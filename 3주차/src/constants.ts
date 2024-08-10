export const INITIAL_SQUARES = Array(9).fill(null);

export const PLAYER = ["🍡", "🍙"];

export const PLAYER_NUMBER = Object.keys(PLAYER).length;

export const WINNERS_COLOR = "#fede53";

const WINNER_CONDITIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export const checkWinner = (squares: PlayerType[]) => {
  let winnerInfo = null;

  for (const [x, y, z] of WINNER_CONDITIONS) {
    const winner = squares[x];
    if (winner && squares[y] === winner && squares[z] === winner) {
      winnerInfo = {
        winner,
        location: [x, y, z],
      };
      break;
    }
  }

  return winnerInfo;
};
