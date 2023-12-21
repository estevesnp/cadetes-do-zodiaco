import { externals as questionController } from "../controllers/question-controller.js";

export const externals = {};
const internals = {};

externals.start = function () {
  console.log("[QUESTION VIEW HERE]");
};

externals.render = function (question, correctAnswer, options) {
  internals.renderQuestion(question, correctAnswer, options);
  internals.setButtonActions();
};

externals.renderLives = function () {};

externals.renderQuestionsToAnswer = function () {};

externals.updateLevel = function (level = 1) {
  $("#level-img").empty();
  $("#level").text("Level: " + level);
  let img =
    '<br><img src = "../AssetsMapa/' +
    level +
    '.png" id="lvl-img" alt="level logo">';
  $(img).appendTo("#level-img");
};

internals.renderQuestion = function (question, correctAnswer, options) {
  $("#question").empty();
  $("#options").empty();

  console.log("[Question]", question);
  console.log("[Correct Answer]", correctAnswer);
  console.log("[Options]", options);

  let element = "<p><strong>" + question + "</strong></p>";

  $(element).appendTo("#question");

  element = "";

  options.forEach((res) => {
    element += '<button type="button" class="btn btn-warning ';

    if (res === correctAnswer) {
      element += 'correctBtn"';
    } else {
      element += 'incorrectBtn"';
    }

    element += ` >${res}</button>`;
  });

  $(element).appendTo("#options");
};

internals.setButtonActions = function () {
  $(".correctBtn").click(function () {
    console.log("Correct");
    $("#answer-message").empty();
    $('<span id="correct-answer">Correct</span>').appendTo("#answer-message");
    setTimeout(function () {
      $("#correct-answer").fadeOut();
    }, 1000);
    questionController.correctAnswer();
  });
  $(".incorrectBtn").click(function () {
    console.log("Incorrect");
    $("#answer-message").empty();
    $('<span id="incorrect-answer">Incorrect</span>').appendTo(
      "#answer-message"
    );
    setTimeout(function () {
      $("#incorrect-answer").fadeOut();
    }, 1000);
    questionController.incorrectAnswer();
  });
};
