'use strict';

(function () {
    function init() {
        var router = new Router([
            new Route('start', 'start.html', true),
            new Route('quest', 'quest.html'),
            new Route('answer', 'answer.html'),
            new Route('final', 'final.html'),
        ]);
    }
    init();
}());
