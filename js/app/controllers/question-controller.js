import {externals as questionView} from '../views/question-view.js';
import {externals as questionService} from '../services/question-service.js';

export const externals = {};
const internals = {};

externals.start = function() {
    console.log("[QUESTION CONTROLLER HERE]");
    internals.createQuestion();
}

internals.createQuestion = async function() {

    const question = await questionService.createQuestion()

    questionView.renderQuestion(...question);

}