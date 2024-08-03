interface MannerTemperaturePropsType {
  id: number | string;
  temperature: number;
}

function MannerTemperature({ id, temperature }: MannerTemperaturePropsType) {
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

  return (
    <div role="group" aria-label={`매너온도: ${temperature}도`} className="manner-info">
      <div className="manner-info-wrapper">
        <span style={{ color: fontColor }} aria-labelledby={`manner-label-${id}`} className="manner-info_temperature">
          {temperature}°C
        </span>
        <span className="manner-info__icon">{temperatureIcon}</span>
      </div>
      <span id={`manner-label-${id}`} className="manner-info__label">
        매너온도
      </span>
    </div>
  );
}

export default MannerTemperature;
