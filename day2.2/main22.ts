import { readFileSync } from 'fs';

const sumObj = readFileSync('./input22.txt', 'utf8')
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
          const depthsum = sum.depthsum + distance * sum.aimsum;
          return { distsum, aimsum: sum.aimsum, depthsum };
        }
        case 'down': {
          const aimsum = sum.aimsum + distance;
          return { distsum: sum.distsum, aimsum, depthsum: sum.depthsum };
        }
        case 'up': {
          const aimsum = sum.aimsum - distance;
          return { distsum: sum.distsum, aimsum, depthsum: sum.depthsum };
        }
        default:
          return {
            distsum: sum.distsum,
            aimsum: sum.aimsum,
            depthsum: sum.depthsum,
          };
      }
    },
    { distsum: 0, aimsum: 0, depthsum: 0 },
  );

console.log(sumObj.distsum * sumObj.depthsum);
