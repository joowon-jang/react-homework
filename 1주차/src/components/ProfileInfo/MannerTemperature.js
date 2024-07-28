import { createElement as h } from "https://esm.sh/react";

/*
  <div role="group" aria-label="매너온도: 41.2도" class="manner-info">
    <div class="manner-info-wrapper">
      <span aria-labelledby="manner-label" class="manner-info__temperature">
        41.2&deg;C
      </span>
      <span class="manner-info__icon">
        😀
      </span>
    </div>
    <span id="manner-label" class="manner-info__label">
      매너온도
    </span>
  </div>
*/

function MannerTemperature(props) {
  const { id, temperature } = props;

  let temperatureIcon;
  let fontColor;
  if (temperature < 35) {
    temperatureIcon = "😡";
    fontColor = "var(--negative)";
  } else if (temperature < 40) {
    temperatureIcon = "😀";
    fontColor = "var(--secondary)";
  } else {
    temperatureIcon = "😊";
    fontColor = "var(--positive)";
  }

  return h(
    "div",
    { role: "group", "aria-label": `매너온도: ${temperature}도`, className: "manner-info" },
    h(
      "div",
      { className: "manner-info-wrapper" },
      h(
        "span",
        {
          style: { color: `${fontColor}` },
          "aria-labelledby": `manner-label-${id}`,
          className: "manner-info__temperature",
        },
        `${temperature}°C`
      ),
      h("span", { className: "manner-info__icon" }, `${temperatureIcon}`)
    ),
    h("span", { id: `manner-label-${id}`, className: "manner-info__label" }, "매너온도")
  );
}

export default MannerTemperature;
