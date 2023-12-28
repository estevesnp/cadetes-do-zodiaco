import { externals as mapView } from "../views/map-view.js";
import { externals as questionView } from "../views/question-view.js";
import { externals as questionService } from "../services/question-service.js";

export const externals = {};
const internals = {};

let level = 1;
let lives = 3;
let questionDifficulties = [];

externals.start = function () {
    mapView.renderIntro();
};

externals.beginLevel = function (level = 1) {
    questionView.updateLevel(level);

    lives = 3;

    // change questions according to level
    internals.createQuestionArray(level);

    internals.createQuestion();
};

externals.correctAnswer = function () {
    questionDifficulties.shift();

    if (questionDifficulties.length === 0) {
        internals.nextLevel();
    } else {
        internals.createQuestion();
    }
};

externals.incorrectAnswer = function () {
    lives--;

    if (lives === 0) {
        internals.previousLevel();
    } else {
        internals.createQuestion();
    }
};

internals.createQuestionArray = function (level = 1) {
    questionDifficulties = [];

    switch (level) {
        case 1:
            questionDifficulties.push("easy", "easy");
            break;
        case 2:
            questionDifficulties.push("easy", "easy");
            break;
        case 3:
            questionDifficulties.push("easy", "easy", "easy");
            break;
        case 4:
            questionDifficulties.push("easy", "easy", "medium");
            break;
        case 5:
            questionDifficulties.push("easy", "easy", "medium");
            break;
        case 6:
            questionDifficulties.push("easy", "medium", "medium");
            break;
        case 7:
            questionDifficulties.push("medium", "medium", "medium");
            break;
        case 8:
            questionDifficulties.push("medium", "medium", "medium");
            break;
        case 9:
            questionDifficulties.push("medium", "medium", "medium", "hard");
            break;
        case 10:
            questionDifficulties.push("medium", "medium", "hard", "hard");
            break;
        case 11:
            questionDifficulties.push("medium", "hard", "hard", "hard");
            break;
        case 12:
            questionDifficulties.push("hard", "hard", "hard", "hard");
            break;
    }
};

internals.nextLevel = function () {
    const newLevel = internals.currLevel() + 1;

    level = newLevel;


    if (newLevel === 13) {
        mapView.renderEnd();
    } else {
        mapView.renderMap(
            newLevel,
            "  Good job, warrior! You've advanced to the next house!  "
        );
    }


};

internals.previousLevel = function () {
    lives = 3;

    const newLevel = internals.currLevel() === 1 ? 1 : internals.currLevel() - 1;

    level = newLevel;

    mapView.renderMap(newLevel, " Damn warrior, you kinda suck ");
};

internals.createQuestion = async function () {

    const question = questionService.createQuestion(
        questionDifficulties[0]
    );

    questionView.render(...question);
};

internals.setQuestionsAndLives = function () { };

internals.currLevel = function () {
    return parseInt($("#level").text().split("Level: ")[1]);
};
