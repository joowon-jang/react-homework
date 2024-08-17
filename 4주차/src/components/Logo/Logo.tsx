import "./Logo.scss";

import LogoMono from "/Logo/logo-mono.svg";
import LogoStereo from "/Logo/logo-stereo.svg";

interface LogoPropsType {
  type: "mono" | "stereo";
}

const Logo = ({ type }: LogoPropsType) => {
  return (
    <h1 className="logo">
      <img src={type === "mono" ? LogoMono : LogoStereo} alt="로고" />
    </h1>
  );
};

export default Logo;
