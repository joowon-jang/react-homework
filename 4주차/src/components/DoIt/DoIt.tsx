import Archive from "../Archive/Archive";
import Checkbox from "../Checkbox/Checkbox";
import Divider from "../Divider/Divider";
import "./DoIt.scss";

interface DoItPropsType {
  content: {
    title: string;
    description: string;
    noon: "오전" | "오후";
    startTime: string;
    endTime: string;
  };
}

const DoIt = ({ content }: DoItPropsType) => {
  const { title, description, noon, startTime, endTime } = content;

  return (
    <article className="do-it">
      <div className="do-it-main">
        <div className="do-it-content">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <Checkbox />
      </div>
      <Divider style={{ marginBlock: "8px" }} />
      <div className="do-it-sub">
        <div className="do-it-time">
          <strong>오늘 </strong>
          <span>
            {noon} <time dateTime={startTime}>{startTime}</time> - <time dateTime={endTime}>{endTime}</time>
          </span>
        </div>
        <Archive />
      </div>
    </article>
  );
};

export default DoIt;
