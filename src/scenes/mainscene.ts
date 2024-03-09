import mainSceneJson from '../assets/scene/mainSceneJson.json';
import { Player } from '../entity/player';

export class mainScene extends Phaser.Scene {
    private player?: Player
    constructor() {
        super('DurotarScene');
    }

    preload () {
        this.load.image('imgTest', 'src/assets/img/test.png')
        this.load.tilemapTiledJSON('map', 'src/assets/scene/mainSceneJson.json')
        this.load.spritesheet('pers', 'src/assets/characters/player/Idle.png', { frameWidth: 32, frameHeight: 32 });
    }

    create () {
        const map = this.make.tilemap({ key: "map" });
        const tileset = map.addTilesetImage(mainSceneJson.tilesets[0].name, 'imgTest', 16, 16);
        const groundLayer = map.createLayer('ground', tileset, 0, 0);
        const wallsLayer = map.createLayer('walls', tileset, 0, 0);
        this.player = new Player(this,300,250,'pers')
    }
}