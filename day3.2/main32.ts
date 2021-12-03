import { readFileSync } from 'fs';

const fileToAoA = readFileSync('./input31.txt', 'utf8')
  .split('\n')
  .map((value) => {
    const numArr = value.split('');
    return numArr.map(Number);
  });
