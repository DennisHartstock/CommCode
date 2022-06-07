; (function () {
    var Game = function (canvasId) {
        var canvas = document.getElementById(canvasId);
        var screen = canvas.getContext('2d');

        var gameSize = {
            x: canvas.width,
            y: canvas.height
        };

        this.bodies = createInvaders(this).concat([new Player(this, gameSize)]);

        var self = this;
        var tick = function () {
            self.update(gameSize);
            self.draw(screen, gameSize);
            requestAnimationFrame(tick);
        };

        tick();
    }

    Game.prototype = {

        update: function (gameSize) {

            var bodies = this.bodies;

            var notCollidingWithAnything = function(b1) {
                return bodies.filter(function(b2) {
                    return colliding(b1, b2);
                }).length == 0;
            }

            this.bodies = this.bodies.filter(notCollidingWithAnything);

            for (var i = 0; i < this.bodies.length; i++) {
                if (this.bodies[i].position.y < 0) {
                    this.bodies.splice(i, 1);
                }
            }

            for (var i = 0; i < this.bodies.length; i++) {
                this.bodies[i].update();
            }
        },

        draw: function (screen, gameSize) {
            clearCanvas(screen, gameSize);
            for (var i = 0; i < this.bodies.length; i++) {
                drawRect(screen, this.bodies[i]);
            }
        },

        addBody: function (body) {
            this.bodies.push(body);
        }
    }

    var Invader = function (game, position) {
        this.game = game;
        this.size = { width: 16, height: 16 };
        this.position = position;
        this.patrolX = 0;
        this.speedX = 0.3;
    }

    Invader.prototype = {
        update: function () {
            if (this.patrolX < 0 || this.patrolX > 800) {
                this.speedX -= this.speedX;
            }

            this.position.x += this.speedX;
            this.patrolX += this.speedX;
        }
    }

    var Player = function (game, gameSize) {
        this.game = game;
        this.bullets = 0;
        this.timer = 0;
        this.size = { width: 16, height: 16 };
        this.position = { x: gameSize.x / 2 - this.size.width / 2, y: gameSize.y / 2 - this.size.height / 2 };
        this.keyboarder = new Keyboarder();
    }

    Player.prototype = {
        update: function () {
            if (this.keyboarder.isDown(this.keyboarder.KEYS.LEFT)) {
                this.position.x -= 2;
            }

            if (this.keyboarder.isDown(this.keyboarder.KEYS.RIGHT)) {
                this.position.x += 2;
            }

            if (this.keyboarder.isDown(this.keyboarder.KEYS.SPACE)) {
                if (this.bullets < 5) {
                    var bullet = new Bullet(
                        { x: this.position.x + this.size.width / 2 - 1, y: this.position.y },
                        { x: 0, y: -4 }
                    );
                    this.game.addBody(bullet);
                    this.bullets++;
                }
            }

            this.timer++;

            if (this.timer % 12 == 0) {
                this.bullets = 0;
            }
        }
    }

    var Bullet = function (position, velocity) {
        this.size = { width: 2, height: 4 };
        this.position = position;
        this.velocity = velocity;
    }

    Bullet.prototype = {
        update: function () {
            this.position.x += this.velocity.x;
            this.position.y += this.velocity.y;
        }
    }

    var Keyboarder = function () {
        var keyState = {};

        window.onkeydown = function (e) {
            keyState[e.keyCode] = true;
        }

        window.onkeyup = function (e) {
            keyState[e.keyCode] = false;
        }

        this.isDown = function (keyCode) {
            return keyState[keyCode] === true;
        }

        this.KEYS = { LEFT: 37, RIGHT: 39, SPACE: 32 };
    }

    var createInvaders = function (game) {
        var invaders = [];

        for (var i = 0; i < 24; i++) {
            var x = 30 + (i % 8) * 30;
            var y = 30 + (i % 3) * 30;
            invaders.push(new Invader(game, { x: x, y: y }));
        }
        return invaders;
    }

    // var colliding = function (b1, b2) {
    //     return !(b1 == b2 ||
    //         b1.position.x + b1.size.width / 2 < b2.position.x - b2.size.width / 2 ||
    //         b1.position.y + b1.size.height / 2 < b2.position.y - b2.size.height / 2 ||
    //         b1.position.x - b1.size.width / 2 > b2.position.x + b2.size.width / 2 ||
    //         b1.position.y - b1.size.height / 2 > b2.position.y + b2.size.height / 2
    //     );
    // }

    var colliding = function(b1, b2) {
        return (b1 != b2 && 
         b1.position.x < b2.position.x + b2.size.width  && 
         b1.position.x + b1.size.width  > b2.position.x &&
         b1.position.y < b2.position.y + b2.size.height && 
         b1.position.y + b1.size.height > b2.position.y);
       }


    var drawRect = function (screen, body) {
        screen.fillRect(body.position.x, body.position.y, body.size.width, body.size.height);
    }

    var clearCanvas = function (screen, gameSize) {
        screen.clearRect(0, 0, gameSize.x, gameSize.y);
    }

    window.onload = function () {
        new Game("screen");
    }
})();    