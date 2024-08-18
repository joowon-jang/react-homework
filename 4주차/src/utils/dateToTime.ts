export default function dateToTime(date: Date) {
  const hours = date.getHours();
  const minutes = date.getMinutes();

  const calcedHours = hours >= 12 ? hours - 12 : hours;

  const time = String(calcedHours).padStart(2, "0") + ":" + String(minutes).padStart(2, "0");

  return time;
}
