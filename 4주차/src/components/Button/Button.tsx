import "./Button.scss";

interface ButtonPropsType {
  children: string;
  modifier: "primary" | "secondary" | "disabled";
  type?: "submit" | "button" | "reset";
  onClick?: () => void;
}

const Button = ({ children, modifier, type = "button", onClick }: ButtonPropsType) => {
  return (
    <button type={type} onClick={onClick} className={`button button--${modifier}`} disabled={modifier === "disabled"}>
      {children}
    </button>
  );
};

export default Button;
