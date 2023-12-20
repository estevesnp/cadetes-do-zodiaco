import {externals as questionView} from '../views/question-view.js';
import {externals as questionService} from '../services/question-service.js';

export const externals = {};
const internals = {};

externals.start = function() {
    console.log("[QUESTION CONTROLLER HERE]")
    questionView.start();
    questionService.start();
}