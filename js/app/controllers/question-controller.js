import {externals as mapView} from '../views/map-view.js';
import {externals as questionView} from '../views/question-view.js';
import {externals as questionService} from '../services/question-service.js';

export const externals = {};
const internals = {};

let level = 1;
let lives = 3;
let questionDifficulties = [];


externals.start = function() {
    console.log("[QUESTION CONTROLLER HERE]");

    mapView.renderIntro();

}

externals.beginLevel = function(level = 1) {

    questionView.updateLevel(level);

    lives = 3;

    // change questions according to level
    internals.createQuestionArray(level);

    internals.createQuestion();
}

externals.correctAnswer = function() {

    questionDifficulties.shift();

    if (questionDifficulties.length === 0) {

        internals.nextLevel();
    } else {
        
        internals.createQuestion();
    }

    
}

externals.incorrectAnswer = function() {

    lives--;

    if (lives === 0) {
        internals.previousLevel();
    } else {

        internals.createQuestion();
    }

}

internals.createQuestionArray = function(level = 1) {
    questionDifficulties = [];
    questionDifficulties.push('easy', 'easy')
}

internals.nextLevel = function() {

    const newLevel = (internals.currLevel() === 12) ? 12 : internals.currLevel() + 1;

    level = newLevel;

    mapView.renderMap(newLevel);

}

internals.previousLevel = function() {

    lives = 3;

    const newLevel = (internals.currLevel() === 1) ? 1 : internals.currLevel() - 1;

    level = newLevel;

    mapView.renderMap(newLevel);

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

    console.log('QUESTIONS REMAINING: ', questionDifficulties.length);

    console.log('[DIFFICULTY]', questionDifficulties[0]);

    //const question = await questionService.createQuestion(difficulty);

    const question = await questionService.createQuestion(questionDifficulties[0]);

    questionView.render(...question);

}

internals.setQuestionsAndLives = function() {

}

internals.currLevel = function() {
    return parseInt($('#level').text().split('Level: ')[1]);
}