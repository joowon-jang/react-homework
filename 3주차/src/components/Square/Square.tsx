import CSS from "./Square.module.css";

interface SquarePropsType {
  children?: PlayerType;
  onClick: () => void;
}

const Square = ({ children, onClick }: SquarePropsType) => {
  return (
    <button className={CSS.component} onClick={onClick}>
      {children}
    </button>
  );
};

export default Square;
