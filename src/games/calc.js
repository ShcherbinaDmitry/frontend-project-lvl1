import readlineSync from 'readline-sync';
import rnd from '../random.js';

const calc = () => {
  const operands = ['+', '-', '*'];
  const num1 = rnd(50);
  const num2 = rnd(50);
  const operand = operands[rnd(operands.length - 1)];
  let correctAnswer;

  switch (operand) {
    case '+':
      correctAnswer = num1 + num2;
      break;
    case '-':
      correctAnswer = num1 - num2;
      break;
    case '*':
      correctAnswer = num1 * num2;
      break;
    default:
      console.log('Something went wrong :-(');
  }
  console.log(`Question: ${num1} ${operand} ${num2}`);
  const answer = readlineSync.question('Your answer: ');

  return [answer, correctAnswer];
};

export default calc;
