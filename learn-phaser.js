const gameState = {}

function create() {
  // Change "Codey's Adventures\n  in Code World" to the name of your game
  this.add.text(110, 100, "Back to the light", { font: "40px Times New Roman", fill: "#ffa0d0" })

  // Change "by Codecademy" to your name!
  this.add.text(300, 250, "by Dennis", { font: "20px Times New Roman", fill: "#ffa0d0" })
}

function preloadBackground() {
  // Load in the background image here!
  this.load.image('sky', 'https://content.codecademy.com/courses/learn-phaser/sky.jpg')
}

function createBackground() {
  // Put the background image in the scene here!
  this.add.image(225, 300, 'sky')
}

function createCircles() {
  let circle1 = this.add.circle(50, 100, 90, 0xFFF070)
  let circle2 = this.add.circle(95, 300, 80, 0xFF0000)
  let circle3 = this.add.circle(200, 200, 100, 0x9F00D0)
  let circle4 = this.add.circle(300, 400, 10, 0x00E030)

  // Add in a circle here!
  let circle5 = this.add.circle(300, 500, 25, 0xFF4A7F)
}

function preloadCodey() {
  // Load in the sprite here!
  this.load.image("codey", 'https://content.codecademy.com/courses/learn-phaser/codey.png')
}

function createCodey() {
  // Create a sprite game object here!
  gameState.codey = this.add.sprite(25, 300, "codey")
}

function update() {
  codey.x ++
}

const config = {
  type: Phaser.AUTO,
  width: 450,
  height: 600,
  backgroundColor: "#5f2a55",
  scene: {
    create,
    preloadBackground,
    createBackground,
    createCircles,
    preloadCodey,
    createCodey,
    update
  }
}

const game = new Phaser.Game(config)

