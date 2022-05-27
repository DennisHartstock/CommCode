; (function () {
    var Game = function (canvvasId) {
        var canvas = document.getElementById(canvvasId);
        var screen = canvas.getContext('2d');

        var gameSize = {
            x: canvas.width,
            y: canvas.height
        };

        var self = this;
        var tick = function() {
            self.update();
            self.draw(screen, gameSize);
            requestAnimationFrame(tick);
        };

        tick();
    }

    Game.prototype = {

        update: function() {
            console.log("update");
        },

        draw : function(screen, gameSize) {
            screen.fillRect(150, 150, 32, 32);
        }
    }

    window.onload = function () {
        new Game("screen");
    }
})();    