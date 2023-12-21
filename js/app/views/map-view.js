import { externals as questionController } from "../controllers/question-controller.js";

export const externals = {};
const internals = {};

externals.renderIntro = function () {
  //add dynamic username?
  const introMsg = `<br><p><center>You have entered the world of Saint Seiya…<br>
    Answer the questions to clear the levels.<br>
    It is up to you to save Athena…</center></p><iframe id="video" src="https://drive.google.com/file/d/1pYMwjZzchso9rB9W-ZjMB2xbXQWtA58v/preview" width="640" height="480" allow="autoplay"></iframe>`;

  //changed button name
  let element =
    '<button id="start-journey" type="button" class="btn btn-warning">Start journey</button>';
  $(introMsg).appendTo("#intro");
  $(element).appendTo("#intro");

  $("#intro").click(function () {
    internals.deleteIntro();
    externals.renderMap(1);
  });
};

externals.renderMap = function (level = 1) {
  $("#question").empty();
  $("#options").empty();
  $("#answer-message").empty();
  $("#level").empty();

  let element =
    '<img id="map-actual-img" src="../AssetsMapa/map' +
    level +
    '.png">' +
    '<br><button id="start-game" type="button" class="btn btn-warning">Play</button>';

  $(element).appendTo("#map-img");

  $("#map-img").click(function () {
    externals.deleteMap();
    questionController.beginLevel(level);
  });
};

externals.deleteMap = function () {
  $("#map-img").empty();
};

internals.deleteIntro = function () {
  $("#intro").empty();
};
