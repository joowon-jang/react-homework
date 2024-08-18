import dateToTime from "@/utils/dateToTime";
import Archive from "../Archive/Archive";
import Checkbox from "../Checkbox/Checkbox";
import Divider from "../Divider/Divider";
import "./DoIt.scss";
import { ChangeEvent, useState } from "react";

interface DoItPropsType {
  content: DoItType;
  onUpdate: ({ done, archived }: { done?: boolean; archived?: boolean }) => void;
}

const DoIt = ({ content, onUpdate }: DoItPropsType) => {
  const { title, description, startTime, endTime, done, archived } = content;

  const noon = startTime.getHours() < 12 ? "오전" : "오후";
  const formattedStartTime = dateToTime(startTime);
  const formattedEndTime = dateToTime(endTime);

  const [checked, setChecked] = useState<boolean>(done);

  const handleCheck = (e: ChangeEvent) => {
    const target = e.currentTarget as HTMLInputElement;
    setChecked(Boolean(target.checked));
    onUpdate?.({ done: target.checked });
  };

  const handleArchiveCheck = (e: ChangeEvent) => {
    const target = e.currentTarget as HTMLInputElement;
    onUpdate?.({ archived: target.checked });
  };

  return (
    <article className="doit">
      <div className="doit-main">
        <div className="doit-content">
          <h2 style={checked ? { textDecoration: "line-through" } : {}}>{title}</h2>
          <p>{description}</p>
        </div>
        <Checkbox onCheck={handleCheck} defaultChecked={done} />
      </div>
      <Divider style={{ marginBlock: "8px" }} />
      <div className="doit-sub">
        <div className="doit-time">
          <strong>오늘 </strong>
          <span>
            {noon} <time dateTime={formattedStartTime}>{formattedStartTime}</time> -{" "}
            <time dateTime={formattedEndTime}>{formattedEndTime}</time>
          </span>
        </div>
        <Archive onCheck={handleArchiveCheck} defaultChecked={archived} />
      </div>
    </article>
  );
};

export default DoIt;
