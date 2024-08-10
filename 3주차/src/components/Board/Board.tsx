import Squares from "../Squares/Squares";
import Status from "../Status/Status";
import CSS from "./Board.module.css";

interface BoardPropsType {
  squares: PlayerType[];
  onSquareClick: (index: number) => () => void;
}

const Board = ({ squares, onSquareClick }: BoardPropsType) => {
  return (
    <div className={CSS.component}>
      <Status />
      <Squares squares={squares} onSquareClick={onSquareClick} />
    </div>
  );
};

export default Board;
