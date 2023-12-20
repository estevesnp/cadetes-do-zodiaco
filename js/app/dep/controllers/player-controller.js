import {externals as playerView} from '../views/player-view.js';
import {externals as playerService} from '../services/player-service.js';

export const externals = {};
const internals = {};

externals.start = function () {
    internals.bindEventHandlers();
    playerView.render();
};

internals.bindEventHandlers = function () {
    playerView.bind('button', internals.buttonHandler);
};

internals.buttonHandler = function () {
    const playerIndex = Math.floor(Math.random() * 493) + 1;
    playerService.getPlayer(playerIndex, function (player) {
        playerView.render(player);
    });
};
