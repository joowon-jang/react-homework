import dateToTime from "@/utils/dateToTime";
import Archive from "../Archive/Archive";
import Checkbox from "../Checkbox/Checkbox";
import Divider from "../Divider/Divider";
import "./DoIt.scss";

interface DoItPropsType {
  content: DoItType;
}

const DoIt = ({ content }: DoItPropsType) => {
  const { title, description, startTime, endTime } = content;

  const noon = startTime.getHours() < 12 ? "오전" : "오후";
  const formattedStartTime = dateToTime(startTime);
  const formattedEndTime = dateToTime(endTime);

  return (
    <article className="doit">
      <div className="doit-main">
        <div className="doit-content">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <Checkbox />
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
        <Archive />
      </div>
    </article>
  );
};

export default DoIt;
