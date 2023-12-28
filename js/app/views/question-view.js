import { externals as questionController } from "../controllers/question-controller.js";

export const externals = {};
const internals = {};

externals.render = function (question, correctAnswer, options) {
  internals.renderQuestion(question, correctAnswer, options);
  internals.setButtonActions(question, correctAnswer, options);
};

externals.renderLives = function () { };

externals.renderQuestionsToAnswer = function () { };

externals.updateLevel = function (level = 1) {
  $("#level-img").empty();
  $("#level").text("Level: " + level);
  let img =
    '<br><img src = "AssetsMapa/' +
    level +
    '.png" id="lvl-img" alt="level logo">';
  $(img).appendTo("#level-img");
};

internals.renderQuestion = function (question, correctAnswer, options) {
  $("#question").empty();
  $("#options").empty();

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

internals.setButtonActions = function (question, correctAnswer, options) {
  $(".correctBtn").click(function () {

    $("#answer-message").empty();
    $('<span id="correct-answer">Correct</span>').appendTo("#answer-message");
    setTimeout(function () {
      $("#correct-answer").fadeOut();
    }, 1000);
    questionController.correctAnswer();
  });

  $(".incorrectBtn").click(function () {

    $("#answer-message").empty();
    $('<span id="incorrect-answer">Incorrect</span>').appendTo(
      "#answer-message"
    );
    setTimeout(function () {
      $("#incorrect-answer").fadeOut();
    }, 1000);
    questionController.incorrectAnswer();
  });

  $(document).keydown(function (event) {
    if (event.which === 76) {

      while (options.length > 2) {
        const rand = Math.floor(Math.random() * options.length)
        if (options[rand] !== correctAnswer) {
          options.splice(rand, 1)
        }
      }

      internals.renderQuestion(question, correctAnswer, options)
      internals.setButtonActions(question, correctAnswer, options);

    }
  });
};
