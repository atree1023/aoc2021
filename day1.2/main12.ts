import { readFileSync } from 'fs';

const file = readFileSync('./day1.1/input.txt', 'utf8').split('\n').map(Number);

const rollingSum = file.filter(
  (value, index, array) =>
    // array[index + 1] + array[index + 2] + array[index + 3] >
    // value + array[index + 1] + array[index + 2]
    value < array[index + 3]
);

console.log(rollingSum.length);
