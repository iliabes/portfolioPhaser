import { Entity } from "./entity"

export class Player extends Entity{
    textureKey: string;
    constructor(scenes:Phaser.Scene,x:number,y:number,texture:string,type?:string){
        super(scenes,x,y,texture)
        this.scene = scenes
        this.scene.add.existing(this)

        //методя для создания анимации
        const anims = this.scene.anims
        //скорость
        const animsFrameRate = 9;
        this.textureKey = texture
        

        anims.create({
            //ключ для 
            key: 'left',
            frames: anims.generateFrameNames(this.textureKey,{
                start: 0,
                end: 10
            }),
            frameRate:animsFrameRate,
            repeat: -1
        })
    }

    update(delta:number){
        const spacebar = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE)
        const keys = this.scene.input.keyboard.createCursorKeys()
        
        
        if(Phaser.Input.Keyboard.JustDown(spacebar)){
            alert()
        }

        if(keys.up.isDown){
            this.play('left')
            this.setPosition(this.x,this.y - delta * 0.25)
        }
        else if(keys.down.isDown){
            this.play('left')
            this.setPosition(this.x,this.y+delta * 0.25)
        }
        else if(keys.left.isDown){
            this.play('left')
            this.setPosition(this.x-delta * 0.25,this.y)
        }
        else if(keys.right.isDown){
            this.play('left')
            this.setPosition(this.x+delta * 0.25,this.y)
        }else{
            
            // this.stop()
        }
    }
}
// delta: number