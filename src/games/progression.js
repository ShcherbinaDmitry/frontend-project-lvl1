import readlineSync from 'readline-sync';
import rnd from '../random.js';

const progression = () => {
  const length = rnd(5, 5);
  const position = rnd(length - 1);
  const step = rnd(10);
  let num = rnd(15, 1);
  const progArr = [num];
  for (let i = 0; i < length - 1; i += 1) {
    num += step;
    progArr.push(num);
  }
  const correctAnswer = progArr[position];
  progArr[position] = '..';

  console.log(`Question: ${progArr.join(' ')}`);
  const answer = readlineSync.question('Your answer: ');

  return [answer, correctAnswer];
};

export default progression;
