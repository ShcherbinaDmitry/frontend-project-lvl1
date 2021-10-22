const;

import readlineSync from 'readline-sync';

const cli = (question) => {
  const answer = readlineSync.question(`${question} `);

  return answer;
};

export default cli;
