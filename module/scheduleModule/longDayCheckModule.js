/**
 * date ?
 * date 변수는 사용자가 입력한 text를 띄어쓰기 단위로 나눠 저장한 변수입니다.
 * 만약 날짜가 맞다면 date[0]은 첫번째 날짜 date[2]는 마지막 날짜가 될 것 입니다.
 *
 *
 */

let date;

const longDayCheck = function (day) {
  if (day.includes('-') && day.split('/').length - 1 === 2) {
    // 범위 지정 패턴 '-'이 사용되고 '/' 개수가 2개 사용되었는지 확인
    date = day.toString().split(' ');
    const date1 = new Date(date[0]); // 올바른 날짜 인지 확인
    const date2 = new Date(date[2]); // 올바른 날짜 인지 확인
    if (!isNaN(date1 && date2)) {
      return true; // 날짜가 맞으면 true
    }
  }
  return false; // 아니면 false
};

const getDate = function () {
  return date; // 차후 sendAcademicScheduleModule.js에서 날짜를 전달하기 위한 함수
};

module.exports = longDayCheck;
module.exports.getDate = getDate;
