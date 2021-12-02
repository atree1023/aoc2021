import { readFileSync } from 'fs';

const file = readFileSync('./day1.2/input.txt', 'utf8').split('\n').map(Number);

const rollingSum = file.filter(
  (value, index, array) => value < array[index + 3]
  // array[index + 1] + array[index + 2] + array[index + 3] >
  // value + array[index + 1] + array[index + 2]
);

console.log(rollingSum.length);
