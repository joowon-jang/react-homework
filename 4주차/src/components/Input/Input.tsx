import "./Input.scss";

interface InputPropsType {
  placeholder: string;
}

const Input = ({ placeholder }: InputPropsType) => {
  return <input type="text" placeholder={placeholder} className="input" />;
};

export default Input;
