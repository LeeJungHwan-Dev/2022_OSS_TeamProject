const getAcademicSchedule = require('./getScheduleFileModule');
const checkLongDay = require('./longDayCheckModule');

/**
 * 모듈 설명
 *
 * 해당 모듈은 index.js에서 최초로 실행되는 모듈입니다.
 * 입력받은 날짜가 올바른 형식인지에 대해 isNaN과 indexOf를 사용해 검사하고,
 * 이후 올바른 값이 입력되면 입력한 날짜, channel, rtm순으로
 * 스케줄 파일을 읽어주는 모듈로 값을 전달합니다. => getAcademicSchedule()
 *
 * inputDay는 최초 입력 받은 날짜를 YYYY/MM/DD로 변환한 날짜 입니다.
 * resultDay는 입력 받은 데이터를 올바른 형식으로 포맷한 날짜입니다. => MM/DD
 *
 * checkDay는 날짜의 형식이 올바른지 검사하는 코드로 날짜 사이에 '/'이 존재하는 확인하고
 * '11/'과 같이 '/'은 포함하는데 문자열 마지막에 들어가 올바르지 않은 날짜형식을 가지고 있는
 * 문자열을 처리해줍니다.
 *
 * if('/'가 없을 경우 || '/'가 문자열 끝에 있는 경우 || 날짜가 올바르지 않은 경우)
 *
 * 각 매개변수 설명
 * rtm => slack 챗봇 사용을 위해 필요한 rtm
 * channel => slack 챗봇 사용을 위해 필요한 channel 변수
 *
 * text => 사용자가 입력한 날짜 원형
 *
 * isLong ?
 * isLong변수는 checkLongDay() 함수에서 리턴하는 값을 담기 위한 변수로 '10/19 - 10/21'과 같은 입력을
 * 판별하는 true / false를 담은 변수입니다.
 *
 * checkLongDay()?
 * checkLongDay() 사용자가 입력한 text가 날짜가 맞는지 확인하고 '10/19 - 10/21'과 같이 범위가 지정된
 * 날짜인지 판별하는 함수입니다.
 *
 */

const sendAcademicSchedule = function (rtm, channel, text) {
  const isLong = checkLongDay(text);
  if (isLong === true) {
    getAcademicSchedule(text, channel, rtm, isLong);
  } else {
    const inputDay = new Date(`0000${text}`);
    const resultDay = `${`${inputDay.getMonth() + 1}`.slice(
      -2,
    )}/${`${inputDay.getDate()}`}`;

    const checkDay = text.indexOf('/', 1);

    if (checkDay === -1 || checkDay === text.length - 1 || isNaN(inputDay)) {
      rtm.sendMessage('올바른 날짜를 입력해주세요. ex) 10/24 ', channel);
    } else {
      getAcademicSchedule(resultDay, channel, rtm, isLong);
    }
  }
};

module.exports = sendAcademicSchedule;
