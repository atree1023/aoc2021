import { readFileSync } from 'fs';

const file = readFileSync('./input.txt', 'utf8').split('\n');

let forcount = 0;
let aimcount = 0;
let depthcount = 0;

file.forEach((value) => {
  const instArr = value.split(' ');
  if (instArr[0] === 'forward') {
    const forDist = Number(instArr[1]);
    forcount += forDist;
    depthcount += forDist * aimcount;
  } else if (instArr[0] === 'up') {
    aimcount -= Number(instArr[1]);
  } else if (instArr[0] === 'down') {
    aimcount += Number(instArr[1]);
  } else {
    console.log('Error', instArr);
  }
});

console.log(forcount * depthcount);
