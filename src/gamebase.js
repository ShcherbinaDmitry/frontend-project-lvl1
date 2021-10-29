import readlineSync from 'readline-sync';

const gameBase = (description, game) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(description);
  const winCount = 3;
  let resultPhrase = '';

  for (let i = 0; i < winCount; i += 1) {
    const [answer, correctAnswer] = game();
    if (answer === String(correctAnswer)) {
      console.log('Correct!');
      resultPhrase = 'Congratulations';
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer is '${correctAnswer}'`);
      resultPhrase = "Let's try again";
      break;
    }
  }
  console.log(`${resultPhrase}, ${name}!`);
};

export default gameBase;
