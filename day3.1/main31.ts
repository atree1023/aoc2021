import { readFileSync } from 'fs';

const totalArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

readFileSync('./input31.txt', 'utf8')
  .split('\n')
  .map((value) => {
    const numArr = value.split('');
    return numArr.map(Number);
  })
  .forEach((value) =>
    value.forEach((innervalue, index) => {
      if (innervalue === 1) {
        totalArr[index] += innervalue;
      }
    }),
  );

const gamma = parseInt(totalArr.map((value) => (value >= 500 ? 1 : 0)).join(''), 2);

const epsilon = parseInt(totalArr.map((value) => (value < 500 ? 1 : 0)).join(''), 2);

console.log(gamma * epsilon);
