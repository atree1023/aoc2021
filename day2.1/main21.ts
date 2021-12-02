import { readFileSync } from 'fs';

const fileToAoO = readFileSync('./input.txt', 'utf8')
  .split('\n')
  .map((value) => {
    const [dir, dist] = value.split(' ');
    return { direction: dir, distance: Number(dist) };
  });

const sumObj = fileToAoO.reduce(
  (sum, { direction, distance }) => {
    if (direction === 'forward') {
      const distsum = sum.distsum + distance;
      return { distsum, depthsum: sum.depthsum };
    }
    const depthsum =
      direction === 'down'
        ? (sum.depthsum += distance)
        : (sum.depthsum -= distance);
    return { distsum: sum.distsum, depthsum };
  },
  { distsum: 0, depthsum: 0 }
);

console.log(sumObj.distsum * sumObj.depthsum);
