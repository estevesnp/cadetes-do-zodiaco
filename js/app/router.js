import { externals as questionController } from "./controllers/question-controller.js";

const internals = {};
export const externals = {};

internals.routes = {
  map: {
    hash: "#map",
    controller: "map-controller",
  },
  question: {
    hash: "#question", // hash
    controller: questionController, // controller
  },
};

internals.defaultRoute = "question";
internals.currentHash = ""; // required to track hash changes

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
