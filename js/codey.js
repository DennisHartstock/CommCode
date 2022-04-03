const gameState = {}

function preload() {
    this.load.audio('theme', 'files/theme.mp3')
    this.load.image('codey', 'https://content.codecademy.com/courses/learn-phaser/codey.png');
}

function create() {
    gameState.theme = this.sound.add('theme')
    gameState.theme.play

    gameState.codey = this.add.sprite(100, 350, 'codey')
    // Set cursor keys here!
    gameState.cursors = this.input.keyboard.createCursorKeys()
}

function update() {
    // Update based on keypress here!
    if (gameState.cursors.up.isDown) {
        gameState.codey.y -= 5
    }

    if (gameState.cursors.right.isDown) {
        gameState.codey.x += 5
    }

    if (gameState.cursors.down.isDown) {
        gameState.codey.y += 5
    }

    if (gameState.cursors.left.isDown) {
        gameState.codey.x -= 5
    }
}

const config = {
    type: Phaser.AUTO,
    width: innerWidth,
    height: innerHeight,
    backgroundColor: "#5f2a55",
    scene: {
        preload,
        create,
        update
    }
}

const game = new Phaser.Game(config)
