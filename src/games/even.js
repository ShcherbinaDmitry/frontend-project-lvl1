import readlineSync from 'readline-sync';

const even = () => {
  const num = Math.round(Math.random() * 100);
  console.log(`Question: ${num}`);
  const answer = readlineSync.question('Your answer: ');
  const correctAnswer = num % 2 === 0 ? 'yes' : 'no';

  return [answer, correctAnswer];
};

export default even;
