import { readFileSync } from 'fs';

const file = readFileSync('./input11.txt', 'utf8').split('\n').map(Number);

const filterIndex = file.filter(
  (value, index, array) => value < array[index + 1]
);

console.log(filterIndex.length);
