import level from "./room1.js"

const scene = {
    preload: function () {
    //загрузка тайлов
    this.load.spritesheet(
        'tiles',
        'assets/colored.png',
        {
            frameWidth: 16,
            frameHeight: 16,
            spacing: 1
        });
    },
    create: function (){
        // меняем в массиве все 1 на 826
        const wall = 826 //стена
        const floor = 0 //пол
        let mappedLevel = level.map(r => r.map(t => t == 1 ? wall : floor))

        // отрисовываем тайловую карту
        const tileSize = 16
        const config = {
            data: mappedLevel,
            tileWidth: tileSize,
            tileHeight: tileSize,
        }
        const map = this.make.tilemap(config)
        const tileset = map.addTilesetImage('tiles', 'tiles', tileSize, tileSize, 0, 1)
        const ground = map.createLayer(0, tileset, 0, 0)
    },
    update: function () {
    }   
}

const config = {
    type: Phaser.AUTO,
    width: 80 * 16,
    height: 50 * 16,
    backgroundColor: "#000",
    parent: "game",
    pixelArt: true,
    zoom: 2,
    scene: scene,
    physics: {
        default: "arcade",
        arcade: {
            gravity: { y: 0 }
        }
    }
}

const game = new Phaser.Game(config);
