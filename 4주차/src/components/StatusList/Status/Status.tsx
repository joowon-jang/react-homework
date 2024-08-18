import { useId } from "react";
import "./Status.scss";

interface StatusPropsType {
  children: string;
  count: number;
  defaultChecked?: boolean;
  onChange: () => void;
}

const Status = ({ children, count, defaultChecked = false, onChange }: StatusPropsType) => {
  const id = useId();

  return (
    <div role="group" className="status">
      <input
        type="radio"
        name="status"
        defaultChecked={defaultChecked}
        onChange={onChange}
        id={id}
        className="status__input"
      />
      <label htmlFor={id} className="status__label">
        {children}
        <output className="status__count">{count}</output>
      </label>
    </div>
  );
};

export default Status;
