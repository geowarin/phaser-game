import "phaser";
import {MainScene} from "./scenes/MainScene";
import GameConfig = Phaser.Types.Core.GameConfig;

const config: GameConfig = {
  width: 800,
  height: 600,
  type: Phaser.AUTO,
  parent: "game",
  scene: MainScene,
  physics: {
    default: "arcade",
    arcade: {
      gravity: {y: 200}
    }
  }
};

new Phaser.Game(config);
