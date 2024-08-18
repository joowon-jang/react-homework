import { CSSProperties } from "react";
import "./Divider.scss";

interface DividerPropsType {
  style?: CSSProperties;
  type?: "vertical" | "horizental";
}

const Divider = ({ style, type = "horizental" }: DividerPropsType) => {
  return <div style={style} className={`divider divider--${type}`}></div>;
};

export default Divider;
