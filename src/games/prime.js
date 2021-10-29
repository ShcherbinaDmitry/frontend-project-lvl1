import readlineSync from 'readline-sync';
import rnd from '../random.js';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return 'no';
  }

  return num > 1 ? 'yes' : 'no';
};

const prime = () => {
  const num = rnd(19);
  const correctAnswer = isPrime(num);
  console.log(`Question: ${num}`);
  const answer = readlineSync.question('Your answer: ');

  return [answer, correctAnswer];
};

export default prime;
