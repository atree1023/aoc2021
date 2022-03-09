/* eslint-disable @typescript-eslint/indent */
import { readFileSync } from 'fs';

const fileToAoA = readFileSync('./input31.txt', 'utf8')
  .split('\n')
  .map((value) => {
    const numArr = value.split('');
    return numArr.map(Number);
  });

const totalArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

fileToAoA.forEach((value) =>
  value.forEach((innervalue, index) => {
    if (innervalue === 1) {
      totalArr[index] += innervalue;
    }
  })
);

const gamma = parseInt(
  totalArr.map((value) => (value >= 500 ? 1 : 0)).join(''),
  2
);

const epsilon = parseInt(
  totalArr.map((value) => (value < 500 ? 1 : 0)).join(''),
  2
);

console.log(gamma * epsilon);
