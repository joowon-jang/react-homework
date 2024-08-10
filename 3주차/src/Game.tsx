import { useState } from "react";
import Board from "./components/Board/Board";
import History from "./components/History/History";
import { checkWinner, INITIAL_SQUARES, PLAYER, PLAYER_NUMBER } from "./constants";

import CSS from "./Game.module.css";
import "./styles/main.css";

function Game() {
  const [gameHistory, setGameHistory] = useState([INITIAL_SQUARES]);
  const [gameIndex, setGameIndex] = useState(0);

  const currentPlayer = PLAYER[gameIndex % PLAYER_NUMBER];
  const currentSquares = gameHistory[gameIndex];

  const winnerInfo = checkWinner(currentSquares);
  const isDraw = currentSquares.every(Boolean) && !winnerInfo;

  const onSquareClick = (index: number) => () => {
    if (winnerInfo) {
      alert("Game Over");
      return;
    }
    const nextGameHistory = [
      ...gameHistory.slice(0, gameIndex + 1),
      currentSquares.map((square, i) => (index === i ? currentPlayer : square)),
    ];

    setGameHistory(nextGameHistory);
    setGameIndex(gameIndex + 1);
  };

  const onTimeTravel = (index: number) => () => {
    setGameIndex(index);
  };

  return (
    <div className={CSS.component}>
      <Board
        winnerInfo={winnerInfo}
        currentPlayer={currentPlayer}
        isDraw={isDraw}
        squares={currentSquares}
        onSquareClick={onSquareClick}
      />
      <History gameHistory={gameHistory} gameIndex={gameIndex} handleClick={onTimeTravel} />
    </div>
  );
}

export default Game;
