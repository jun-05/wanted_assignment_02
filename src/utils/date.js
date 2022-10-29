export const getCurDate = dates => {
  const now = new Date(dates);
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const date = now.getDate();
  return year + '년 ' + month + '월 ' + date + '일';
};
