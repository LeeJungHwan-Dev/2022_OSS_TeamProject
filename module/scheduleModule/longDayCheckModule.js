/**
 * date ?
 * date 변수는 사용자가 입력한 text를 띄어쓰기 단위로 나눠 저장한 변수입니다.
 * 만약 날짜가 맞다면 date[0]은 첫번째 날짜 date[2]는 마지막 날짜가 될 것 입니다.
 *
 * pattern은 날짜의 형식을 확인하기 위한 정규식 입니다.
 *
 *
 */

let date;

const pattern = /^([1-9]|1[012])\/([1-9]|[12][0-9]|3[0-1])$/;

function isPatternTrue(dateList) {
  if (pattern.test(dateList[0].trim()) && pattern.test(dateList[1].trim())) {
    return true;
  }
  return false;
}

function isDayFormatTrue(day) {
  if (
    day.includes('-') && // '-' 포함확인
    day.split('/').length - 1 === 2 && // '/' 2개포함 확인
    day.length - 1 <= 12 // 길이 확인 최대 12자리 '11/11 - 11/11')
  ) {
    return true;
  }
  return false;
}

const longDayCheck = function (day) {
  if (isDayFormatTrue(day)) {
    date = day.toString().split('-');

    if (isPatternTrue(date)) {
      const inputDay = new Date(`0000${date[0]}`);
      const inputDay1 = new Date(`0000${date[1]}`);

      if (isNaN(inputDay) || isNaN(inputDay1)) {
        return false;
      }
      date[0] = `${inputDay.getMonth() + 1}/${inputDay.getDate()}`;
      date[1] = `${inputDay1.getMonth() + 1}/${inputDay1.getDate()}`;
      return true;
    }
  }
  return false; // 아니면 false
};

const getDate = function () {
  return date; // 차후 sendAcademicScheduleModule.js에서 날짜를 전달하기 위한 함수
};

module.exports = longDayCheck;
module.exports.getDate = getDate;
