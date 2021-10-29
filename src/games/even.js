import readlineSync from 'readline-sync';
import rnd from '../random.js';

const even = () => {
  const num = rnd(100);
  console.log(`Question: ${num}`);
  const answer = readlineSync.question('Your answer: ');
  const correctAnswer = num % 2 === 0 ? 'yes' : 'no';

  return [answer, correctAnswer];
};

export default even;
