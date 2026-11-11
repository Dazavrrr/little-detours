import Phaser from "phaser";

export class MainScene extends Phaser.Scene {
  constructor() {
    super("Main Scene");
  }

  create() {
    this.add.text(100, 150, "Little Detours!", {
      fontSize: "32px",
      color: "#ffffff",
    });
  }
}