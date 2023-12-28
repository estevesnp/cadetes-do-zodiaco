import {questions as questionsArrays} from '../questions.js';

export const externals = {};
const internals = {};

externals.createQuestion = function(difficulty = 'easy') {

    const questArray = questionsArrays[difficulty];
    const quest = questArray[Math.floor(Math.random() * questArray.length)];

    const options = [...quest.incorrectAnswers];
    
    options.splice(Math.floor(Math.random() * (options.length + 1)), 0, quest.correctAnswer);

    return [quest.question, quest.correctAnswer, options]
}

externals.createQuestionFetch = async function(difficulty = 'easy') {
    const results = await fetch(`https://the-trivia-api.com/v2/questions?limit=1&difficulties=${difficulty}`);
    const data = await results.json();

    const question = data[0].question.text;
    const correctAnswer = data[0].correctAnswer;
    const options = data[0].incorrectAnswers;

    options.splice(Math.floor(Math.random() * (options.length + 1)), 0, correctAnswer);

    return [question, correctAnswer, options];
}