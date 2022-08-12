function getBuffer() {
  const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  return ((input) => { // откуда берется инпут??
    const buffer = new ArrayBuffer(data.length * 2);// баффер длиной всего 2?
    const bufferView = new Uint16Array(buffer);
    for (let i = 0; i < input.length; i += 1) {
      bufferView[i] = input.charCodeAt(i); // записываем данные в массив, но откуда мы их берем?
    }
    return buffer;// возращаем баффер
  })(data);// а это что?
}

export default getBuffer;
