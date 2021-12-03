import { readFileSync } from 'fs';

const getRating = (inc: number, exc: number): number => {
  let fileToAoA = readFileSync('./input32.txt', 'utf8')
    .split('\n')
    .map((value) => {
      const numArr = value.split('');
      return numArr.map(Number);
    });

  for (let index = 0; index < 12; index++) {
    let colTotal = 0;

    if (fileToAoA.length === 1) {
      break;
    }

    fileToAoA.forEach((value) => {
      if (value[index] === 1) {
        colTotal += 1;
      }
    });

    if (colTotal >= fileToAoA.length / 2) {
      fileToAoA = fileToAoA.filter((value) => {
        return value[index] === inc;
      });
    } else {
      fileToAoA = fileToAoA.filter((value) => {
        return value[index] === exc;
      });
    }
  }
  return parseInt(fileToAoA[0].join(''), 2);
};

const oxygenRating = getRating(1, 0);
const co2Rating = getRating(0, 1);

console.log(oxygenRating * co2Rating);
