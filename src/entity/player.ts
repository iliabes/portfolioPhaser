import { Entity } from "./entity"

export class Player extends Entity{
    constructor(scenes:Phaser.Scene,x:number,y:number,texture:string,type?:string){
        super(scenes,x,y,texture)
        this.scene = scenes
        this.scene.add.existing(this)

        const anims = this.scene.anims
        const animsFrameRate = 9;
        this.textureKey = texture

    }

    update(delta: number){

        const keys = this.scene.input.keyboard.createCursorKeys()
        if(keys.up.isDown){
            this.setPosition(this.x,this.y-1)
        }
    }
}
