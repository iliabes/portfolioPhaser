import { scenes } from "../scenes/scenes";

export class Entity extends Phaser.GameObjects.Sprite{
    constructor(scenes:Phaser.Scene,x:number,y:number,texture:string,type?:string){
        super(scenes,x,y,texture)
        this.scene = scenes
        this.scene.add.existing(this)
    }
}
