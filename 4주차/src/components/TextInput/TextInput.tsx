import "./TextInput.scss";

interface TextInputPropsType {
  type: "text" | "textarea";
  placeholder: string;
}

const TextInput = ({ type, placeholder }: TextInputPropsType) => {
  if (type === "text") return <input type="text" placeholder={placeholder} className="text-input" />;
  else if (type === "textarea") return <textarea placeholder={placeholder} rows={3} className="text-input textarea" />;
};

export default TextInput;
