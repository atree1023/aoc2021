import { readFileSync } from 'fs';

const file = readFileSync('./input12.txt', 'utf8').split('\n').map(Number);

const rollingSum = file.filter(
  (value, index, array) => value < array[index + 3]
);

console.log(rollingSum.length);
