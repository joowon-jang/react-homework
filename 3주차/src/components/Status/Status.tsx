import CSS from "./Status.module.css";

interface StatusPropsType {
  winner?: PlayerType;
  currentPlayer: PlayerType;
  isDraw?: boolean;
}

const Status = ({ winner, currentPlayer, isDraw }: StatusPropsType) => {
  let statusMessage = `현재 플레이어 : ${currentPlayer}`;
  if (winner) statusMessage = `위너!! ${winner}`;
  if (isDraw) statusMessage = "음... 비겼네. 😩 한 판 더?!";

  return <h2 className={CSS.component}>{statusMessage}</h2>;
};

export default Status;
