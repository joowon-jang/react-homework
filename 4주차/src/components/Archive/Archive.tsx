import { useId } from "react";
import "./Archive.scss";

const Archive = () => {
  const id = useId();
  return (
    <>
      <label htmlFor={id} className="archive-label sr-only">
        보관
      </label>
      <input id={id} type="checkbox" className="archive-input" />
    </>
  );
};

export default Archive;
