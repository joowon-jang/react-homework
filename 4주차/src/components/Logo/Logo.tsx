import "./Logo.scss";

import LogoMono from "/Logo/logo-mono.svg";
import LogoStereo from "/Logo/logo-stereo.svg";

interface LogoPropsType {
  type: "mono" | "stereo";
}

const Logo = ({ type }: LogoPropsType) => {
  return <img src={type === "mono" ? LogoMono : LogoStereo} alt="로고" className="logo" />;
};

export default Logo;
