import { useState } from "react";
import Board from "./components/Board/Board";
import History from "./components/History/History";
import { INITIAL_SQUARES, PLAYER, PLAYER_NUMBER } from "./constants";

import CSS from "./Game.module.css";
import "./styles/main.css";

function Game() {
  const [gameHistory, setGameHistory] = useState([INITIAL_SQUARES]);
  const [gameIndex, setGameIndex] = useState(0);

  const currentPlayer = (gameHistory.length - 1) % PLAYER_NUMBER;

  const onSquareClick = (index: number) => () => {
    setGameHistory([
      ...gameHistory,
      gameHistory[gameIndex].map((square, i) => {
        return index === i ? PLAYER[currentPlayer] : square;
      }),
    ]);

    setGameIndex(gameIndex + 1);
  };

  const onTimeTravel = () => {};

  return (
    <div className={CSS.component}>
      <Board squares={gameHistory[gameIndex]} onSquareClick={onSquareClick} />
      <History />
    </div>
  );
}

export default Game;
