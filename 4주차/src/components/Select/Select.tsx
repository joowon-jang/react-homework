import { useId } from "react";
import "./Select.scss";

const Select = () => {
  const id = useId();
  return (
    <select name="noon" defaultValue="오전" id={id} className="select">
      <option value="오전">오전</option>
      <option value="오후">오후</option>
    </select>
  );
};

export default Select;
