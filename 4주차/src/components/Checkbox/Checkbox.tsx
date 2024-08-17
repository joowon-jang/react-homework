import { useId } from "react";
import "./Checkbox.scss";

const Checkbox = () => {
  const id = useId();
  return (
    <>
      <label htmlFor={id} className="checkbox-label sr-only">
        체크
      </label>
      <input id={id} type="checkbox" className="checkbox-input" />
    </>
  );
};

export default Checkbox;
