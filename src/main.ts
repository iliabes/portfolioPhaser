import './style.css'
import Phaser from 'phaser'
import { scenes } from './scenes/scenes'

new Phaser.Game({
  width:600,
  height:600,
  title:'Portfolio on phaser',
  backgroundColor: '#000',
  scene:scenes,
  scale:{
    mode:Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  pixelArt:true
})