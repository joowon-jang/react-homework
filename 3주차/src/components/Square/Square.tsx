import { CSSProperties } from "react";
import CSS from "./Square.module.css";

interface SquarePropsType {
  style?: CSSProperties;
  children?: PlayerType;
  onClick: () => void;
}

const Square = ({ children, style, onClick }: SquarePropsType) => {
  const isDisabled = !!children;

  return (
    <button className={CSS.component} style={style} disabled={isDisabled} onClick={onClick}>
      {children}
    </button>
  );
};

export default Square;
