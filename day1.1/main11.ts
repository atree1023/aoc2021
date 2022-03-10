import { readFileSync } from 'fs';

const rollingSum = readFileSync('./input11.txt', 'utf8')
  .split('\n')
  .map(Number)
  .filter((value, index, array) => value < array[index + 1]);

console.log(rollingSum.length);
