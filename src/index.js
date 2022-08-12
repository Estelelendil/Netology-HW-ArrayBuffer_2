import ArrayBufferConverter from './js/basic';
import getBuffer from './js/app';

const buffer = getBuffer();
const converter = new ArrayBufferConverter();
converter.load(buffer);
console.log(converter.toString());
