import { ChangeEvent, useId } from "react";
import "./Archive.scss";

interface ArchivePropsType {
  defaultChecked: boolean;
  onCheck: (e: ChangeEvent) => void;
}

const Archive = ({ defaultChecked = false, onCheck }: ArchivePropsType) => {
  const id = useId();
  return (
    <>
      <label htmlFor={id} className="archive-label sr-only">
        보관
      </label>
      <input id={id} type="checkbox" defaultChecked={defaultChecked} onChange={onCheck} className="archive-input" />
    </>
  );
};

export default Archive;
