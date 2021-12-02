import { readFileSync } from 'fs';

const file = readFileSync('./day1.1/input.txt', 'utf8').split('\n').map(Number);

const filterIndex = file.filter(
  (value, index, array) => value < array[index + 1]
);

console.log(filterIndex.length);
