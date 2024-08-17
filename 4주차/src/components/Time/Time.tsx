import { useId } from "react";
import "./Time.scss";
import Divider from "../Divider/Divider";

const Time = () => {
  const startId = useId();
  const endId = useId();

  return (
    <div role="group" className="time">
      <label htmlFor={startId} className="sr-only">
        시작 시간:
      </label>
      <input
        id={startId}
        type="text"
        placeholder="00:00"
        maxLength={5}
        pattern="(0[0-9]|1[0-1]):([0-5][0-9])"
        title="시작 시간을 입력해주세요."
        className="time__input"
      />
      <Divider style={{ width: "8px" }} />
      <label htmlFor={endId} className="sr-only">
        마감 시간:
      </label>
      <input
        id={endId}
        type="text"
        placeholder="00:00"
        maxLength={5}
        pattern="(0[0-9]|1[0-1]):([0-5][0-9])"
        title="마감 시간을 입력해주세요."
        className="time__input"
      />
    </div>
  );
};

export default Time;
