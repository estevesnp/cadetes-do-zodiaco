import {externals as questionView} from '../views/question-view.js';
import {externals as questionService} from '../services/question-service.js';

export const externals = {};
const internals = {};

externals.start = function() {
    console.log("[QUESTION CONTROLLER HERE]");
    questionView.renderLives();
    questionView.renderLevel();
    internals.createQuestion();
}

externals.nextLevel = function() {
    const currLevel = parseInt($('#level').text().split('Level: ')[1]);

    const newLevel = (currLevel === 12) ? 12 : currLevel + 1;

    $('#level').text('Level: ' + newLevel);

    internals.createQuestion();

    console.log(currLevel);
}

externals.previousLevel = function() {
    const currLevel = parseInt($('#level').text().split('Level: ')[1]);

    const newLevel = (currLevel === 1) ? 1 : currLevel - 1;

    $('#level').text('Level: ' + newLevel);

    internals.createQuestion();

}

externals.newQuestion = function() {

    internals.createQuestion();
}

internals.createQuestion = async function() {

    const question = await questionService.createQuestion();

    questionView.render(...question);

}