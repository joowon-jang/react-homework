export default function timeStringToDate(timeString: string, noon: NoonType = "오전") {
  // 오늘 날짜를 기준으로 새로운 Date 객체 생성
  const now = new Date();

  // 시(hour)와 분(minute)을 문자열에서 추출
  const [hours, minutes] = timeString.split(":").map(Number);

  if (noon === "오후") now.setHours(hours - 12, minutes, 0, 0); // 초와 밀리초는 0으로 설정
  else now.setHours(hours, minutes, 0, 0); // 초와 밀리초는 0으로 설정

  return now;
}
