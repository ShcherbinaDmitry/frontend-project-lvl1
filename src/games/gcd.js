import readlineSync from 'readline-sync';
import rnd from '../random.js';

const gcd = () => {
  const num1 = rnd(50);
  const num2 = rnd(50);
  let divider = num1 < num2 ? num1 : num2;
  while (num1 % divider || num2 % divider) {
    divider -= 1;
  }
  const correctAnswer = divider;

  console.log(`Question: ${num1} ${num2}`);
  const answer = readlineSync.question('Your answer: ');

  return [answer, correctAnswer];
};

export default gcd;
