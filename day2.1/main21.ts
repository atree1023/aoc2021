import { readFileSync } from 'fs';

const sumObj = readFileSync('./input21.txt', 'utf8')
  .split('\n')
  .map((value) => {
    const [dir, dist] = value.split(' ');
    return { direction: dir, distance: Number(dist) };
  })
  .reduce(
    (sum, { direction, distance }) => {
      switch (direction) {
        case 'forward': {
          const distsum = sum.distsum + distance;
          return { distsum, depthsum: sum.depthsum };
        }
        case 'down': {
          const depthsum = sum.depthsum + distance;
          return { distsum: sum.distsum, depthsum };
        }
        case 'up': {
          const depthsum = sum.depthsum - distance;
          return { distsum: sum.distsum, depthsum };
        }
        default:
          return { distsum: sum.distsum, depthsum: sum.depthsum };
      }
    },
    { distsum: 0, depthsum: 0 }
  );

console.log(sumObj.distsum * sumObj.depthsum);
