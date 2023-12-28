import { externals as questionController } from "../controllers/question-controller.js";

export const externals = {};
const internals = {};

externals.renderIntro = function () {
  $("#question").hide();
  //add dynamic username?
  const introMsg = `<p><center>You have entered the world of Saint Seiya…<br>
    Answer the questions to clear the levels.<br>
    It is up to you to save Athena…</center></p><iframe id="video" src="https://drive.google.com/file/d/1pYMwjZzchso9rB9W-ZjMB2xbXQWtA58v/preview" width="640" height="480" allow="autoplay"></iframe>`;

  //changed button name
  let element =
    '<button id="start-journey" type="button" class="btn btn-warning">Start journey</button>';
  $(introMsg).appendTo("#intro");
  $(element).appendTo("#intro");

  $("#start-journey").click(function () {
    internals.deleteIntro();
    externals.renderMap(1);
  });
};

externals.renderMap = function (level = 1, message) {
  $("#question").empty();
  $("#options").empty();
  $("#answer-message").empty();
  $("#level").empty();
  $("#level-img").empty();
  $("#question").hide();

  let element =
    '<img id="map-actual-img" src="AssetsMapa/map' + level + '.png">';
  if (message) {
    element += `<p id="progress-message">${message}</p>`;
  }

  element +=
    '<button id="start-game" type="button" class="btn btn-warning">Play</button>';

  $(element).appendTo("#map-img");

  $("#start-game").click(function () {
    externals.deleteMap();
    questionController.beginLevel(level);
  });
};

externals.renderEnd = function () {
  $("#question").empty();
  $("#options").empty();
  $("#answer-message").empty();
  $("#level").empty();
  $("#level-img").empty();
  $("#question").hide();

  let element =
    '<h1>THE END</h1><p>You reached Athena\'s Temple and found the truth:</p><iframe src="https://drive.google.com/file/d/1p8x3_Dcb202rG1WZ_zLB3JIcgm3Su62O/preview" width="640" height="480" allow="autoplay"></iframe>`</h1>';

  $(element).appendTo("#end");
};

externals.deleteMap = function () {
  $("#map-img").empty();
  $("#question").show();
};

internals.deleteIntro = function () {
  $("#intro").empty();
  $("#question").show();
};
