import { WINNERS_COLOR } from "@/constants";
import { CSSProperties } from "react";
import Square from "../Square/Square";
import CSS from "./Squares.module.css";

interface SquaresPropsType {
  winnerLocation?: number[];
  squares: PlayerType[];
  onSquareClick: (index: number) => () => void;
}

const Squares = ({ winnerLocation, squares, onSquareClick }: SquaresPropsType) => {
  return (
    <div className={CSS.component}>
      {squares.map((square, index) => {
        const winnerStyles: CSSProperties = {
          backgroundColor: "",
        };

        if (winnerLocation) {
          const [x, y, z] = winnerLocation;

          if (index === x || index === y || index === z) {
            winnerStyles.backgroundColor = WINNERS_COLOR;
          }
        }

        return (
          <Square key={index} style={winnerStyles} onClick={onSquareClick(index)}>
            {square}
          </Square>
        );
      })}
    </div>
  );
};

export default Squares;
