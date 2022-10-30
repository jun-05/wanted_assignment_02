export function convertDate(date) {
  //년월일시분초 문자열 생성
  let newDate = new Date(date);
  const year = newDate.getFullYear();
  const month = newDate.getMonth() + 1;
  const day = newDate.getDay();

  const convertDate = `${year}년 ${month}월 ${day}일`;
  return convertDate;
}
