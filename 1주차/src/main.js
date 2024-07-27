import React from "https://esm.sh/react";
import { createRoot } from "https://esm.sh/react-dom";
import ProfileInfoPage from "/src/pages/ProfileInfoPage.js";

const container = document.getElementById("react-app");

if (container) {
  createRoot(container).render(React.createElement(ProfileInfoPage));
} else {
  console.warn('문서에 "#react-app" 요소가 존재하지 않습니다.');
}
