import Divider from "../Divider/Divider";
import Status from "./Status/Status";
import "./StatusList.scss";

interface StatusListPropsType {
  list: TodoListType[];
  onChange: (status: StatusType) => () => void;
}

const StatusList = ({ list, onChange }: StatusListPropsType) => {
  return (
    <ul className="status-list">
      <li>
        <Status onChange={onChange("모두")} count={list.length} defaultChecked={true}>
          모두
        </Status>
      </li>
      <Divider type="vertical" style={{ height: "12px" }} />
      <li>
        <Status onChange={onChange("할일")} count={list.filter((listItem) => !listItem.done).length}>
          할일
        </Status>
      </li>
      <li>
        <Status onChange={onChange("한일")} count={list.filter((listItem) => listItem.done).length}>
          한일
        </Status>
      </li>
      <li>
        <Status onChange={onChange("보관")} count={list.filter((listItem) => listItem.archived).length}>
          보관
        </Status>
      </li>
    </ul>
  );
};

export default StatusList;
