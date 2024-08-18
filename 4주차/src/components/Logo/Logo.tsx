import { CSSProperties } from "react";
import "./Logo.scss";

import LogoMono from "/Logo/logo-mono.svg";
import LogoStereo from "/Logo/logo-stereo.svg";

interface LogoPropsType {
  type: "mono" | "stereo";
  style?: CSSProperties;
}

const Logo = ({ type, style }: LogoPropsType) => {
  return <img style={style} src={type === "mono" ? LogoMono : LogoStereo} alt="로고" className="logo" />;
};

export default Logo;
