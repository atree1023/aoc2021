import { readFileSync } from 'fs';

const file = readFileSync('./day2.1/input.txt', 'utf8').split('\n');

let forcount = 0;
let vertcount = 0;

file.forEach((value) => {
  const instArr = value.split(' ');
  if (instArr[0] === 'forward') {
    forcount += Number(instArr[1]);
  } else if (instArr[0] === 'up') {
    vertcount -= Number(instArr[1]);
  } else if (instArr[0] === 'down') {
    vertcount += Number(instArr[1]);
  } else {
    console.log('Error', instArr);
  }
});

console.log(forcount * vertcount);
