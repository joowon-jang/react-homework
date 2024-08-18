import { CSSProperties, ReactNode } from "react";
import "./Button.scss";

interface ButtonPropsType {
  children: ReactNode;
  modifier: "primary" | "secondary" | "disabled";
  type?: "submit" | "button" | "reset";
  onClick?: () => void;
  style?: CSSProperties;
}

const Button = ({ children, modifier, type = "button", onClick, style }: ButtonPropsType) => {
  return (
    <button
      style={style}
      type={type}
      onClick={onClick}
      className={`button button--${modifier}`}
      disabled={modifier === "disabled"}>
      {children}
    </button>
  );
};

export default Button;
