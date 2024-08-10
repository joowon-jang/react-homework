import CSS from "./Square.module.css";

interface SquarePropsType {
  children?: PlayerType;
  onClick: () => void;
}

const Square = ({ children, onClick }: SquarePropsType) => {
  const isDisabled = !!children;

  return (
    <button className={CSS.component} disabled={isDisabled} onClick={onClick}>
      {children}
    </button>
  );
};

export default Square;
