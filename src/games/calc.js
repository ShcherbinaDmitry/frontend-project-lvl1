import readlineSync from 'readline-sync';

const calc = () => {
  const operands = ['+', '-', '*'];
  const num1 = Math.round(Math.random() * 50);
  const num2 = Math.round(Math.random() * 50);
  const operand = operands[Math.floor(Math.random() * operands.length)];
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
