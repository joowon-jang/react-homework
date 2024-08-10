import Squares from "../Squares/Squares";
import Status from "../Status/Status";
import CSS from "./Board.module.css";

interface BoardPropsType {
  winnerInfo: {
    winner: PlayerType;
    location: number[];
  } | null;
  squares: PlayerType[];
  onSquareClick: (index: number) => () => void;
}

const Board = ({ winnerInfo, squares, onSquareClick }: BoardPropsType) => {
  return (
    <div className={CSS.component}>
      <Status />
      <Squares winnerLocation={winnerInfo?.location} squares={squares} onSquareClick={onSquareClick} />
    </div>
  );
};

export default Board;
