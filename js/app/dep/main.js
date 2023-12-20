import {externals as router} from './router.js'

$(document).ready(function () {
    console.log('DOM is mounted and ready');

    router.start();
});