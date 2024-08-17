import { CSSProperties } from "react";
import "./Divider.scss";

interface DividerPropsType {
  style?: CSSProperties;
}

const Divider = ({ style }: DividerPropsType) => {
  return <div style={style} className="divider"></div>;
};

export default Divider;
