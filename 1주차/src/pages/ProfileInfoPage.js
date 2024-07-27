import { createElement as h } from "https://esm.sh/react";
import ProfileInfo from "/src/components/ProfileInfo/ProfileInfo.js";
import profileList from "/src/data/profileList.js";

function ProfileInfoPage(props) {
  return h(
    "ul",
    { style: { width: "400px", display: "flex", flexDirection: "column", gap: "1rem" } },
    ...profileList.map((item) => h(ProfileInfo, { ...item }))
  );
}

export default ProfileInfoPage;
