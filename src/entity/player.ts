import { Entity } from "./entity"

export class Player extends Entity{
    constructor(scenes:Phaser.Scene,x:number,y:number,texture:string,type?:string){
        super(scenes,x,y,texture)
        this.scene = scenes
        this.scene.add.existing(this)
    }
}
