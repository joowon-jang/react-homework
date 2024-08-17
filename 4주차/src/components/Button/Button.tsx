import "./Button.scss";

interface ButtonPropsType {
  children: string;
  type: string;
}

const Button = ({ children, type }: ButtonPropsType) => {
  return <button className={`button button__${type}`}>{children}</button>;
};

export default Button;
