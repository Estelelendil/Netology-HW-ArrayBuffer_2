import ArrayBufferConverter from '../basic';
import getBuffer from '../app';

test('testing methods load and toString ', () => {
  const result = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  const converter = new ArrayBufferConverter();
  const buffer = getBuffer();
  converter.load(buffer);
  expect(converter.toString()).toBe(result);
});
