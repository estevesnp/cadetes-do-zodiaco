import {externals as questionView} from '../views/question-view.js';
import {externals as questionService} from '../services/question-service.js';

export const externals = {};
const internals = {};

let questionsForNextLevel = 2;
let lives = 3;

externals.start = function() {
    console.log("[QUESTION CONTROLLER HERE]");
    questionView.renderLives(); ///
    questionView.renderQuestionsToAnswer(); ///
    questionView.updateLevel(1);
    internals.createQuestion();
}


externals.correctAnswer = function() {
    questionsForNextLevel--;

    if (questionsForNextLevel === 0) {

        internals.nextLevel();
    }

    internals.createQuestion();
    
}

externals.incorrectAnswer = function() {
    lives--;

    if (lives === 0) {
        internals.previousLevel();
    }

    internals.createQuestion();
}

internals.nextLevel = function() {

    questionsForNextLevel = 2;
    lives = 3;

    const newLevel = (internals.currLevel() === 12) ? 12 : internals.currLevel() + 1;

    questionView.updateLevel(newLevel);

}

internals.previousLevel = function() {

    questionsForNextLevel = 2;
    lives = 3;

    const newLevel = (internals.currLevel() === 1) ? 1 : internals.currLevel() - 1;

    questionView.updateLevel(newLevel);

}

internals.createQuestion = async function() {

    console.log("Lives: " + lives);

    let difficulty;

    if (internals.currLevel() >= 9) {
        difficulty = 'hard';
    } else if (internals.currLevel() >= 5) {
        difficulty = 'medium'
    } else {
        difficulty = 'easy'
    }

    console.log('[DIFFICULTY]', difficulty);

    const question = await questionService.createQuestion(difficulty);

    questionView.render(...question);

}

internals.setQuestionsAndLives = function() {

}

internals.currLevel = function() {
    return parseInt($('#level').text().split('Level: ')[1]);
}