import readlineSync from 'readline-sync';

const gcd = () => {
  const num1 = Math.round(Math.random() * 50);
  const num2 = Math.round(Math.random() * 50);
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
