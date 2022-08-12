class ArrayBufferConverter {
  constructor() {
    this.buffer = null;
  }

  load(buffer) {
    this.buffer = buffer;
  }

  toString() {
    const bufferView = new Uint16Array(this.buffer);
    let result = '';
    for (let i = 0; i < bufferView.length; i += 1) {
      const cur = String.fromCharCode(bufferView[i]);
      result += cur;
    }
    return result;
  }
}

export default ArrayBufferConverter;
