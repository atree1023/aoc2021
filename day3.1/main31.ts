import { readFileSync } from 'fs';

const fileToAoA = readFileSync('./input31.txt', 'utf8')
  .split('\n')
  .map((value) => {
    const numArr = value.split('');
    return numArr.map(Number);
  });

const totalArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

fileToAoA.forEach((value) =>
  value.forEach((value, index) => {
    if (value === 1) {
      totalArr[index] += value;
    }
  })
);

const gamma = parseInt(
  totalArr
    .map((value) => {
      return value >= 500 ? 1 : 0;
    })
    .join(''),
  2
);

const epsilon = parseInt(
  totalArr
    .map((value) => {
      return value < 500 ? 1 : 0;
    })
    .join(''),
  2
);

console.log(gamma * epsilon);
