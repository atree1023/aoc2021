import { readFileSync } from 'fs';

const rollingSum = readFileSync('./input12.txt', 'utf8')
  .split('\n')
  .map(Number)
  .filter((value, index, array) => value < array[index + 3]);

console.log(rollingSum.length);
