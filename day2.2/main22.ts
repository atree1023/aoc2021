import { readFileSync } from 'fs';

const fileToAoO = readFileSync('./input22.txt', 'utf8')
  .split('\n')
  .map((value) => {
    const [dir, dist] = value.split(' ');
    return { direction: dir, distance: Number(dist) };
  });

const sumObj = fileToAoO.reduce(
  (sum, { direction, distance }) => {
    if (direction === 'forward') {
      const distsum = sum.distsum + distance;
      const depthsum = sum.depthsum + distance * sum.aimsum;
      return { distsum, aimsum: sum.aimsum, depthsum };
    }
    const aimsum =
      direction === 'down'
        ? (sum.aimsum += distance)
        : (sum.aimsum -= distance);
    return { distsum: sum.distsum, aimsum, depthsum: sum.depthsum };
  },
  { distsum: 0, aimsum: 0, depthsum: 0 }
);

console.log(sumObj.distsum * sumObj.depthsum);
