import { readFileSync } from 'fs';

const input = readFileSync('./data/01/input.txt', 'utf8');

const sorted = input
  .split('\n\n')
  .map((number) => number.split('\n'))
  .map((group) => group.map((number) => parseInt(number, 10)))
  .map((number) => number.reduce((acc, curr) => acc + curr))
  .sort((a, b) => b - a);

if (!sorted[0] || !sorted[1] || !sorted[2]) {
  throw new Error('Not enough numbers!');
}

const solutionPartOne = sorted[0];
const solutionPartTwo = sorted[0] + sorted[1] + sorted[2];

console.log({
  part1: solutionPartOne,
  part2: solutionPartTwo,
});
