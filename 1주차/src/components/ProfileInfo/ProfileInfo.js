import { createElement as h } from "https://esm.sh/react";
import MannerTemperature from "/src/components/ProfileInfo/MannerTemperature.js";

/*
  <section
    aria-label="판매자 프로필 정보"
    class="profile-info"
  >
    <!-- 아이콘, 닉네임, 주소 -->
    <div
      role="group"
      aria-label="판매자 기본정보"
      class="profile-info-personal"
    >
      <img
        id="user-avatar"
        src=""
        alt="닉네임"
      />
      <dl>
        <div>
          <dt class="sr-only">판매자 닉네임:</dt>
          <dd id="user-name">닉네임</dd>
        </div>
        <div>
          <dt class="sr-only">판매자 주소:</dt>
          <dd id="user-address">주소</dd>
        </div>
      </dl>
    </div>
    <!-- 매너온도 -->
    <MannerTemperature />
  </section>
*/

function ProfileInfo(props) {
  const { photo, userName, userAddress, temperature } = props;
  return h(
    "section",
    { "aria-label": "판매자 프로필 정보", className: "profile-info" },
    h(
      "div",
      { role: "group", "aria-label": "판매자 기본정보", className: "profile-info-personal" },
      h("img", { src: `${photo}`, alt: `${userName}` }),
      h(
        "dl",
        null,
        h("div", null, h("dt", { className: "sr-only" }, "판매자 닉네임:"), h("dd", null, userName)),
        h("div", null, h("dt", { className: "sr-only" }, "판매자 주소:"), h("dd", null, userAddress))
      )
    ),
    h(MannerTemperature, { temperature })
  );
}

export default ProfileInfo;
