import { externals as questionController } from "../controllers/question-controller.js";

export const externals = {};
const internals = {};

externals.renderIntro = function() {
    let element = '<button id="start-game" type="button" class="btn btn-warning">Intro</button>'

    $(element).appendTo('#intro')

    $('#intro').click(function() {
        internals.deleteIntro();
        externals.renderMap(1);
    })
}

externals.renderMap = function(level = 1) {

    $('#question').empty();
    $('#options').empty();
    $('#answer-message').empty()
    $('#level').empty();

    let element = '<img src="../AssetsMapa/MainSigns.png">' + 
        '<button id="start-game" type="button" class="btn btn-warning">Play</button>';

    $(element).appendTo('#map-img');

    $('#map-img').click(function() {
        externals.deleteMap();
        questionController.beginLevel(level);
    });

}

externals.deleteMap = function() {
    $('#map-img').empty();
}

internals.deleteIntro = function() {
    $('#intro').empty();
}