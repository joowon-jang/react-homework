import "./Button.scss";

interface ButtonPropsType {
  children: string;
  type: "primary" | "secondary" | "disabled";
}

const Button = ({ children, type }: ButtonPropsType) => {
  return (
    <button className={`button button--${type}`} disabled={type === "disabled"}>
      {children}
    </button>
  );
};

export default Button;
