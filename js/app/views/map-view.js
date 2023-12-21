import { externals as questionController } from "../controllers/question-controller.js";

export const externals = {};
const internals = {};

externals.renderIntro = function () {

    $("#question").hide();
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

externals.renderMap = function (level = 1, message) {
  $("#question").empty();
  $("#options").empty();
  $("#answer-message").empty();
  $("#level").empty();
  $("#question").hide();

  let element =
    '<img id="map-actual-img" src="../AssetsMapa/map' +
    level +
    '.png">' +
    '<br>';
    
    if(message) {
        
        element += `<p>${message}</p>`
    }
    
    element += '<button id="start-game" type="button" class="btn btn-warning">Play</button>';

  $(element).appendTo("#map-img");

  $("#map-img").click(function () {
    externals.deleteMap();
    questionController.beginLevel(level);
  });
};

externals.deleteMap = function () {
  $("#map-img").empty();
  $("#question").show();
};

internals.deleteIntro = function () {
  $("#intro").empty();
  $("#question").show();
};
