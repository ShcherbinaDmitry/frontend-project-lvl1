import readlineSync from 'readline-sync';

const cli = (question) => {
    const answer = readlineSync.question('May I have your name? ');

    return answer;
};

export default cli;