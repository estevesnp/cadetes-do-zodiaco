/**
 * Router Module
 */

import { externals as playerController } from "./controllers/player-controller.js"

const internals = {}; // internal module config and state vars
export const externals = {}; // module external api

internals.routes = {
    // film route
    player: {
        hash: '#player', // hash
        controller: playerController // controller
    },
    route2: {
        hash: '#route2',
        controller: 'route2-controller'
    }
};

internals.defaultRoute = 'player';
internals.currentHash = ''; // required to track hash changes

internals.hashCheck = function () {
    if (window.location.hash === internals.currentHash) {
        return;
    }

    var routeName = Object.keys(internals.routes).find(function (name) {
        return window.location.hash === internals.routes[name].hash;
    });

    if (!routeName) {
        routeName = internals.defaultRoute;
        window.location.hash = internals.routes[internals.defaultRoute].hash;
    }

    internals.loadController(internals.routes[routeName].controller);
};

internals.loadController = function (controller) {
    internals.currentHash = window.location.hash;

    try {
        controller.start();
    } catch (err) {
        console.log(err.stack);
        window.location.hash = internals.routes[internals.defaultRoute].hash;
    }

};

externals.start = function () {
    window.location.hash =
        window.location.hash || internals.routes[internals.defaultRoute].hash;

    setInterval(internals.hashCheck, 150);
};