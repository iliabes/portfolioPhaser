import mainSceneJson from '../assets/scene/mainSceneJson.json';

export class mainScene extends Phaser.Scene {
    constructor() {
        super('DurotarScene');
    }

    preload () {
        this.load.image('imgTest', 'src/assets/img/test.png')
        this.load.tilemapTiledJSON('map', 'src/assets/scene/mainSceneJson.json')
    }

    create () {
        const map = this.make.tilemap({ key: "map" });
        const tileset = map.addTilesetImage(mainSceneJson.tilesets[0].name, 'imgTest', 16, 16);
        const groundLayer = map.createLayer('ground', tileset, 0, 0);
        const wallsLayer = map.createLayer('walls', tileset, 0, 0);
        console.log(groundLayer,wallsLayer)
    }
}