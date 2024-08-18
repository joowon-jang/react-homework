import { ChangeEvent, useId } from "react";
import "./Checkbox.scss";

interface CheckboxPropsType {
  defaultChecked?: boolean;
  onCheck?: (e: ChangeEvent) => void;
}

const Checkbox = ({ defaultChecked = false, onCheck }: CheckboxPropsType) => {
  const id = useId();
  return (
    <>
      <label htmlFor={id} className="checkbox-label sr-only">
        체크
      </label>
      <input id={id} type="checkbox" defaultChecked={defaultChecked} className="checkbox-input" onChange={onCheck} />
    </>
  );
};

export default Checkbox;
