import { useEffect } from "react";
import Phaser from "phaser";
import { MainScene } from "./game/MainScene";

function App() {
  useEffect(() => {
    const game = new Phaser.Game({
      type: Phaser.AUTO,
      width: 1000,
      height: 650,
      backgroundColor: "#243b35",
      parent: "game-container",
      scene: [MainScene],
    });

    return () => {
      game.destroy(true);
    };
  }, []);

  return <div id="game-container" />;
}

export default App;
