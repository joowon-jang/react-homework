import Square from "../Square/Square";
import CSS from "./Squares.module.css";

interface SquaresPropsType {
  squares: PlayerType[];
  onSquareClick: (index: number) => () => void;
}

const Squares = ({ squares, onSquareClick }: SquaresPropsType) => {
  return (
    <div className={CSS.component}>
      {squares.map((square, index) => {
        return (
          <Square key={index} onClick={onSquareClick(index)}>
            {square}
          </Square>
        );
      })}
    </div>
  );
};

export default Squares;
