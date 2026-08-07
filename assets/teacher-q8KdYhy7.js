import{c as e,n as t}from"./courses-l6-6h46m.js";var n=`https://blocklyydws-starter-editor.tnjboxing.workers.dev`,r=``;document.getElementById(`lockSection`);var i=document.getElementById(`courseSection`),a=document.getElementById(`taskListSection`),o=document.getElementById(`teacherToken`),s=document.getElementById(`btnUnlock`),c=document.getElementById(`lockStatus`),l=document.getElementById(`courseCodeInput`),u=document.getElementById(`btnLoadCourse`),d=document.getElementById(`courseStatus`);function f(e,t,n){e.textContent=t,e.classList.remove(`error`,`ok`),n&&e.classList.add(n)}async function p(e){try{let t=await fetch(`${n}/overrides?courseCode=${encodeURIComponent(e)}`);return t.ok&&(await t.json())?.overrides||{}}catch{return{}}}async function m(e,t,{starterXml:i,loadable:a,note:o}){let s=await fetch(`${n}/overrides`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({courseCode:e,taskId:t,starterXml:i,loadable:a,note:o,token:r})}),c=await s.json().catch(()=>({}));if(!s.ok)throw Error(c?.error||`儲存失敗（HTTP ${s.status}）`);return c}function h(t,n){let r=document.createElement(`div`);r.className=`teacher-task-card`;let i=!!n,a=n?n.loadable!==!1:!!t.starterXml,o=n?.starterXml??t.starterXml??``,s=n?.note??``;r.innerHTML=`
    <div class="teacher-task-card-head">
      <span class="task-id">${t.id}</span>
      <span class="task-title">${t.title||``}</span>
      ${i?`<span class="override-badge">已覆寫</span>`:``}
      <label class="loadable-toggle">
        <input type="checkbox" class="loadable-checkbox" ${a?`checked`:``} />
        可載入範例
      </label>
    </div>
    <p class="field-label">範例答案 XML（starterXml，可直接貼Blockly匯出的XML）</p>
    <textarea class="starter-xml-field" spellcheck="false">${g(o)}</textarea>
    <p class="field-label">教師備註（例如：回報此題題敘/測資有誤，之後回頭修YDWS-CodingBank）</p>
    <textarea class="note-field" spellcheck="false">${g(s)}</textarea>
    <div class="task-save-row">
      <button type="button" class="btnSaveTask">儲存</button>
      <span class="task-save-status"></span>
    </div>
  `;let c=r.querySelector(`.btnSaveTask`),u=r.querySelector(`.task-save-status`),d=r.querySelector(`.starter-xml-field`),f=r.querySelector(`.note-field`),p=r.querySelector(`.loadable-checkbox`);return c.addEventListener(`click`,async()=>{u.textContent=`儲存中...`;try{await m(e(l.value),t.id,{starterXml:d.value,loadable:p.checked,note:f.value}),u.textContent=`已儲存。`}catch(e){u.textContent=`儲存失敗：${e.message}`}}),r}function g(e){return String(e||``).replace(/[&<>"]/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`})[e])}s.addEventListener(`click`,()=>{let e=o.value.trim();if(!e){f(c,`請輸入密碼。`,`error`);return}r=e,f(c,`已解鎖。`,`ok`),i.hidden=!1}),u.addEventListener(`click`,async()=>{let n=e(l.value);if(!n){f(d,`請輸入課程代碼。`,`error`);return}f(d,`載入中...`,null),a.innerHTML=``;try{let[e,r]=await Promise.all([t(n),p(n)]);if(!e){f(d,`找不到課程代碼：${n}`,`error`);return}f(d,`已載入 ${e.title||n}，共 ${e.tasks.length} 題。`,`ok`),e.tasks.forEach(e=>{a.appendChild(h(e,r[e.id]))})}catch(e){f(d,`載入失敗：${e.message}`,`error`)}});