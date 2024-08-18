import "./TextInput.scss";

interface TextInputPropsType {
  type: "text" | "textarea";
  placeholder: string;
  id: string;
}

const TextInput = ({ id, type, placeholder }: TextInputPropsType) => {
  if (type === "text") return <input type="text" placeholder={placeholder} id={id} className="text-input" />;
  else if (type === "textarea")
    return <textarea placeholder={placeholder} rows={3} id={id} className="text-input textarea" />;
};

export default TextInput;
