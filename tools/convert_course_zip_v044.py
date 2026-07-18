#!/usr/bin/env python3
# -*- coding: utf-8 -*-

"""
Blockly Lab Course ZIP Converter V0.4.4 ASCII-safe

Based on V0.4.3.

Changes in V0.4.4:
  1. Normalize table-cell text parsed from HTML tables.
     This fixes extra blank lines created by:
       <br> + source-code indentation/newline
     Example:
       第一行<br>
       第二行<br>
     V0.4.3 might output:
       第一行\n\n第二行
     V0.4.4 outputs:
       第一行\n第二行

  2. Keep paragraph-style text for description.
     題目說明 still allows paragraph breaks.

  3. Keep V0.4.1+ rules:
     - description only stores 題目說明.
     - inputDescription is added only when 輸入說明 is actually parsed.
     - outputDescription is added only when 輸出說明 is actually parsed.
     - no empty inputDescription / outputDescription.
     - no auto-filled 無.

  4. Keep source content unchanged in meaning.
     The converter only normalizes whitespace caused by HTML parsing.

Usage:
  python -u tools/convert_course_zip_v044.py course-zips/20260301S1.zip JSB00 "基礎練習1" --output src/courses/JSB00.js

Contest example:
  python -u tools/convert_course_zip_v044.py course-zips/20260301W6.zip JSW05 "競賽練習 Week5" --mode contest --output src/courses/JSW05.js
"""

import argparse
import html
import json
import re
import sys
import zipfile
from pathlib import Path
from html.parser import HTMLParser


INPUT_LABELS = ("第一個輸入", "第二個輸入", "第三個輸入", "第四個輸入", "第五個輸入")
ALL_CASE_LABELS = INPUT_LABELS + ("預期答案", "分數")


class TableParser(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=False)
        self.tables = []
        self.current_table = None
        self.current_row = None
        self.current_cell = None
        self.in_table = False
        self.in_row = False
        self.in_cell = False

    def handle_starttag(self, tag, attrs):
        tag = tag.lower()

        if tag == "table":
            self.in_table = True
            self.current_table = []

        elif tag == "tr" and self.in_table:
            self.in_row = True
            self.current_row = []

        elif tag in ("td", "th") and self.in_table and self.in_row:
            self.in_cell = True
            self.current_cell = ""

        elif tag == "br" and self.in_cell:
            self.current_cell += "\n"

    def handle_endtag(self, tag):
        tag = tag.lower()

        if tag in ("td", "th") and self.in_cell:
            self.current_row.append(clean_table_cell_text(self.current_cell))
            self.current_cell = None
            self.in_cell = False

        elif tag == "tr" and self.in_row:
            if self.current_cell is not None:
                self.current_row.append(clean_table_cell_text(self.current_cell))
                self.current_cell = None
                self.in_cell = False

            if self.current_row:
                self.current_table.append(self.current_row)

            self.current_row = None
            self.in_row = False

        elif tag == "table" and self.in_table:
            if self.current_row:
                self.current_table.append(self.current_row)

            if self.current_table:
                self.tables.append(self.current_table)

            self.current_table = None
            self.current_row = None
            self.current_cell = None
            self.in_table = False
            self.in_row = False
            self.in_cell = False

    def handle_data(self, data):
        if self.in_cell and self.current_cell is not None:
            self.current_cell += data

    def handle_entityref(self, name):
        if self.in_cell and self.current_cell is not None:
            self.current_cell += html.unescape("&" + name + ";")

    def handle_charref(self, name):
        if self.in_cell and self.current_cell is not None:
            self.current_cell += html.unescape("&#" + name + ";")


def normalize_newlines(value):
    if value is None:
        return ""
    return str(value).replace("\r\n", "\n").replace("\r", "\n")


def clean_text(value):
    """
    General text cleaner.

    Keep paragraph breaks because description fields may intentionally use them.
    """
    if value is None:
        return ""

    value = html.unescape(str(value))
    value = normalize_newlines(value)
    value = re.sub(r"[ \t]+", " ", value)
    value = re.sub(r" *\n *", "\n", value)
    value = re.sub(r"\n{3,}", "\n\n", value)
    return value.strip()


def clean_table_cell_text(value):
    """
    Cleaner for HTML table cells.

    In table cells, most line breaks come from <br>.
    Source indentation around <br> often creates extra blank lines.
    Therefore, collapse multiple newlines into a single newline.
    """
    if value is None:
        return ""

    value = html.unescape(str(value))
    value = normalize_newlines(value)

    # Remove indentation-only lines caused by source HTML formatting.
    lines = []
    for line in value.split("\n"):
        lines.append(line.strip())

    value = "\n".join(lines)

    # Normalize spaces within each line.
    value = re.sub(r"[ \t]+", " ", value)

    # Collapse multiple blank/newline sequences to one newline for table cells.
    value = re.sub(r"\n{2,}", "\n", value)

    return value.strip()


def read_zip_text(zip_file, info):
    raw = zip_file.read(info)

    for encoding in ("utf-8-sig", "utf-8", "cp950", "big5"):
        try:
            return raw.decode(encoding)
        except UnicodeDecodeError:
            pass

    return raw.decode("utf-8", errors="replace")


def natural_sort_key(text):
    parts = re.split(r"(\d+)", text)
    key = []
    for part in parts:
        if part.isdigit():
            key.append(int(part))
        else:
            key.append(part.lower())
    return key


def get_task_id_from_filename(filename):
    stem = Path(filename).stem

    match = re.match(r"^([A-Za-z]+-\d+-\d+)", stem)
    if match:
        return match.group(1)

    if stem.isdigit():
        return "P" + stem.zfill(2)

    safe_stem = re.sub(r"[^A-Za-z0-9_-]+", "_", stem)
    return safe_stem.strip("_") or "TASK"


def get_title(text, fallback_title):
    match = re.search(r"題目\s*[:：]\s*(.+)", text)
    if match:
        return clean_text(match.group(1))

    return fallback_title


def parse_tables(text):
    parser = TableParser()
    parser.feed(text)
    return parser.tables


def find_section_from_tables(tables, section_title):
    for table in tables:
        for index, row in enumerate(table):
            joined = " ".join(row)

            if section_title in joined:
                contents = []

                if len(row) >= 2:
                    contents.append(row[1])

                if index + 1 < len(table):
                    contents.extend(table[index + 1])

                return clean_text("\n".join([item for item in contents if item]))

    return ""


def parse_problem_sections(tables):
    sections = {}

    description = find_section_from_tables(tables, "題目說明")
    input_description = find_section_from_tables(tables, "輸入說明")
    output_description = find_section_from_tables(tables, "輸出說明")

    sections["description"] = description

    if input_description:
        sections["inputDescription"] = input_description

    if output_description:
        sections["outputDescription"] = output_description

    return sections


def parse_examples(tables):
    examples = []

    for table in tables:
        if not table:
            continue

        header_index = None

        for i, row in enumerate(table):
            joined = " ".join(row)

            if "使用者輸入" in joined and "輸出" in joined:
                header_index = i
                break

        if header_index is None:
            continue

        for row in table[header_index + 1:]:
            if len(row) < 2:
                continue

            item = {
                "input": clean_table_cell_text(row[0]),
                "output": clean_table_cell_text(row[1]),
                "explanation": clean_table_cell_text(row[2]) if len(row) >= 3 else ""
            }

            if item["input"] or item["output"] or item["explanation"]:
                examples.append(item)

        if examples:
            break

    return examples


def parse_case_count(text):
    text = normalize_newlines(text)
    match = re.search(r"(?:驗資筆數|筆數)\s*[:：]\s*(\d+)", text)

    if match:
        return int(match.group(1))

    return 0


def split_case_blocks(text):
    text = normalize_newlines(text)
    pattern = re.compile(r"^案例\s*(\d+)\s*$", re.M)
    matches = list(pattern.finditer(text))
    blocks = []

    for index, match in enumerate(matches):
        case_no = int(match.group(1))
        start = match.end()
        end = matches[index + 1].start() if index + 1 < len(matches) else len(text)
        block = text[start:end]
        blocks.append((case_no, block))

    return blocks


def parse_case_block(block):
    fields = {}
    current_label = None
    buffer = []

    label_pattern = re.compile(
        r"^\s*(" + "|".join(re.escape(label) for label in ALL_CASE_LABELS) + r")\s*[:：][ \t]*(.*)$"
    )

    def flush():
        nonlocal current_label, buffer
        if current_label is not None:
            fields[current_label] = clean_text("\n".join(buffer))
        current_label = None
        buffer = []

    for raw_line in normalize_newlines(block).split("\n"):
        line = raw_line.rstrip()
        label_match = label_pattern.match(line)

        if label_match:
            flush()
            current_label = label_match.group(1)
            buffer = [label_match.group(2)]
        else:
            if current_label is not None:
                buffer.append(line)

    flush()
    return fields


def parse_test_cases(text):
    text = normalize_newlines(text)
    case_count = parse_case_count(text)
    cases = []

    for case_no, block in split_case_blocks(text):
        fields = parse_case_block(block)

        inputs = []
        for label in INPUT_LABELS:
            value = clean_text(fields.get(label, ""))
            if value:
                inputs.append(value)

        expected_output = clean_text(fields.get("預期答案", ""))

        score_text = clean_text(fields.get("分數", ""))
        score_match = re.search(r"\d+", score_text)
        score = int(score_match.group(0)) if score_match else 0

        cases.append({
            "caseNo": case_no,
            "input": "\n".join(inputs),
            "expectedOutput": expected_output,
            "score": score
        })

    cases.sort(key=lambda item: item["caseNo"])

    if case_count > 0:
        cases = cases[:case_count]

    output_cases = []

    for item in cases:
        output_cases.append({
            "input": item["input"],
            "expectedOutput": item["expectedOutput"],
            "score": item["score"]
        })

    return output_cases, case_count


def detect_mode_from_text(text):
    if re.search(r"模式\s*[:：]\s*競賽模式", text):
        return "contest"

    return "learning"


def parse_task(filename, text):
    task_id = get_task_id_from_filename(filename)
    title = get_title(text, Path(filename).stem)

    tables = parse_tables(text)
    sections = parse_problem_sections(tables)
    examples = parse_examples(tables)
    test_cases, case_count = parse_test_cases(text)

    task = {
        "id": task_id,
        "title": title,
        "description": sections.get("description", ""),
        "examples": examples,
        "testCases": test_cases,
        "starterXml": ""
    }

    if "inputDescription" in sections:
        task["inputDescription"] = sections["inputDescription"]

    if "outputDescription" in sections:
        task["outputDescription"] = sections["outputDescription"]

    report = {
        "id": task_id,
        "title": title,
        "filename": filename,
        "hasInputDescription": "inputDescription" in task,
        "hasOutputDescription": "outputDescription" in task,
        "examples": len(examples),
        "testCases": len(test_cases),
        "caseCount": case_count
    }

    return task, report


def should_ignore_txt(filename):
    name = Path(filename).name.lower()

    if name == "title.txt":
        return True

    if name.startswith("._"):
        return True

    return False


def list_txt_files(zip_file):
    infos = []

    for info in zip_file.infolist():
        name = info.filename

        if info.is_dir():
            continue

        if name.startswith("__MACOSX/"):
            continue

        if not name.lower().endswith(".txt"):
            continue

        if should_ignore_txt(name):
            continue

        infos.append(info)

    infos.sort(key=lambda item: natural_sort_key(Path(item.filename).name))
    return infos


def build_course(zip_path, course_code, course_title, forced_mode=None):
    zip_path = Path(zip_path)

    if not zip_path.exists():
        raise FileNotFoundError("ZIP file not found: " + str(zip_path))

    tasks = []
    reports = []
    detected_modes = []

    with zipfile.ZipFile(zip_path, "r") as zf:
        txt_infos = list_txt_files(zf)

        if not txt_infos:
            raise ValueError("No problem .txt files found in ZIP.")

        for info in txt_infos:
            text = read_zip_text(zf, info)
            detected_modes.append(detect_mode_from_text(text))

            task, report = parse_task(info.filename, text)
            tasks.append(task)
            reports.append(report)

    if forced_mode:
        course_mode = forced_mode
    else:
        course_mode = "contest" if "contest" in detected_modes else "learning"

    course = {
        "code": course_code,
        "title": course_title,
        "type": "programming",
        "mode": course_mode,
        "tasks": tasks
    }

    return course, reports


def main():
    arg_parser = argparse.ArgumentParser(
        description="Convert Blockly Lab course ZIP to JS course file."
    )

    arg_parser.add_argument("zip_path", help="Input ZIP path")
    arg_parser.add_argument("course_code", help="Course code, for example JSB01 or JSW05")
    arg_parser.add_argument("course_title", help="Course title")
    arg_parser.add_argument(
        "--output",
        "-o",
        help="Output JS path, for example src/courses/JSB01.js"
    )
    arg_parser.add_argument(
        "--mode",
        choices=["learning", "contest"],
        default=None,
        help="Force course mode. Use contest for contest problem packages."
    )

    args = arg_parser.parse_args()

    output_path = Path(args.output) if args.output else Path(f"{args.course_code}.js")
    output_path.parent.mkdir(parents=True, exist_ok=True)

    course, report = build_course(
        args.zip_path,
        args.course_code,
        args.course_title,
        forced_mode=args.mode
    )

    js_content = "export const " + args.course_code + " = "
    js_content += json.dumps(course, ensure_ascii=False, indent=2)
    js_content += ";\n"

    output_path.write_text(js_content, encoding="utf-8")

    print("SUCCESS")
    print("Output: " + str(output_path))
    print("Course code: " + str(course["code"]))
    print("Course title: " + str(course["title"]))
    print("Course mode: " + str(course["mode"]))
    print("Task count: " + str(len(course["tasks"])))

    print("")
    print("Task check:")

    for item in report:
        if item["caseCount"] == 0:
            status = "CHECK"
        elif item["caseCount"] == item["testCases"]:
            status = "OK"
        else:
            status = "CHECK"

        line = (
            "- [" + status + "] "
            + str(item["id"]) + " | "
            + str(item["title"]) + " | "
            + "file=" + str(item["filename"]) + " | "
            + "inputDesc=" + str(item["hasInputDescription"]) + " | "
            + "outputDesc=" + str(item["hasOutputDescription"]) + " | "
            + "examples=" + str(item["examples"]) + " | "
            + "testCases=" + str(item["testCases"]) + "/" + str(item["caseCount"])
        )
        print(line)


if __name__ == "__main__":
    try:
        main()
    except Exception as error:
        print("ERROR: " + str(error), file=sys.stderr)
        sys.exit(1)
