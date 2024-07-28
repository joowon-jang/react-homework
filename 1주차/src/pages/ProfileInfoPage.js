import { createElement as h } from "https://esm.sh/react";
import ProfileInfo from "../components/ProfileInfo/ProfileInfo.js";
import profileList from "../data/profileList.js";

function ProfileInfoPage(props) {
  return h(
    "ul",
    { style: { width: "400px", display: "flex", flexDirection: "column", gap: "1rem" } },
    ...profileList.map((item) => h("li", null, h(ProfileInfo, { ...item })))
  );
}

export default ProfileInfoPage;
