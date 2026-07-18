export class SmartRingSerial {
  constructor(options = {}) {
    this.baudRate = options.baudRate || 115200;
    this.port = null;
    this.reader = null;
    this.keepReading = false;

    this.onOpen = options.onOpen || null;
    this.onClose = options.onClose || null;
    this.onLine = options.onLine || null;
    this.onError = options.onError || null;
    this.onLog = options.onLog || null;
  }

  isWebSerialSupported() {
    return 'serial' in navigator;
  }

  isConnected() {
    return Boolean(this.port && this.keepReading);
  }

  async connect() {
    if (!this.isWebSerialSupported()) {
      throw new Error('此瀏覽器不支援 WebSerial，請使用 Chrome 或 Edge。');
    }

    if (this.isConnected()) {
      this.log('SmartRing 已經連線。');
      return;
    }

    this.port = await navigator.serial.requestPort();

    await this.port.open({
      baudRate: this.baudRate,
    });

    this.keepReading = true;
    this.onOpen?.();
    this.log(`SmartRing Serial 已開啟，baudRate=${this.baudRate}`);

    this.readLoop();
  }

  async readLoop() {
    const decoder = new TextDecoder();
    let buffer = '';

    try {
      while (this.keepReading && this.port?.readable) {
        this.reader = this.port.readable.getReader();

        try {
          while (this.keepReading) {
            const { value, done } = await this.reader.read();

            if (done) {
              break;
            }

            if (!value) {
              continue;
            }

            buffer += decoder.decode(value, { stream: true });

            const lines = buffer.split(/\r?\n/);
            buffer = lines.pop() || '';

            for (const line of lines) {
              const trimmedLine = line.trim();

              if (trimmedLine) {
                this.onLine?.(trimmedLine);
              }
            }
          }
        } finally {
          this.reader.releaseLock();
          this.reader = null;
        }
      }
    } catch (error) {
      if (this.keepReading) {
        this.onError?.(error);
      }
    } finally {
      this.keepReading = false;
      this.onClose?.();
    }
  }

  async writeLine(line) {
    if (!this.port?.writable) {
      throw new Error('SmartRing 尚未連線，無法送出資料。');
    }

    const writer = this.port.writable.getWriter();

    try {
      const encoder = new TextEncoder();
      const text = line.endsWith('\n') ? line : `${line}\n`;
      await writer.write(encoder.encode(text));
    } finally {
      writer.releaseLock();
    }
  }

  async disconnect() {
    this.keepReading = false;

    if (this.reader) {
      try {
        await this.reader.cancel();
      } catch {
        // ignore cancel error
      }
    }

    await new Promise((resolve) => {
      window.setTimeout(resolve, 50);
    });

    if (this.port) {
      try {
        await this.port.close();
      } catch {
        // ignore close error
      }
    }

    this.reader = null;
    this.port = null;
    this.onClose?.();
    this.log('SmartRing Serial 已斷線。');
  }

  log(message) {
    this.onLog?.(message);
  }
}