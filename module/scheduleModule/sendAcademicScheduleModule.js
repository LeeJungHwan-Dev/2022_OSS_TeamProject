const check = require('./checkingScheduleSelect');
const getDay = require('./longDayCheckModule');

const searchSchedule = function (day, list, channel, rtm, isLong) {
  /**
   * 모듈 설명
   *
   * 해당 모듈은 넘겨받은 날짜와 파일에서 읽어온 내용을 비교하며
   * 해당 날짜가 있는 줄의 내용을 출력하는 모듈입니다.
   *
   * resultOk는 해당 날짜의 학사 일정이 있으면 true 없으면 false로 설정됩니다.
   * result는 학사 일정이 담겨 있는 변수 입니다.
   *
   * check는 학사일정 안내가 종료가 되었으므로 false값을 줌으로써 최초 화면으로 탈출할 수 있게 구현 됩니다.
   *
   */

  let resultOk = false;
  let result;

  for (let i = 0; i < list.length; i += 1) {
    /// /////////////////// 날짜 범위 입력일 경우 아래 //////////////////////
    /// //////////////////////////////////////////////////////////////
    if (isLong === true) {
      const date = getDay.getDate();
      if (list[i].includes(date[0]) && list[i].includes(date[2])) {
        result = list[i].trim().replace(' :', '는').concat('입니다.');
        resultOk = true;
        break;
      }
    }
    /// /////////////////// 날짜 단일 입력일 경우 아래 //////////////////////
    /// //////////////////////////////////////////////////////////////
    if (list[i].includes(day)) {
      result = list[i].trim().replace(' :', '는').concat('입니다.');
      resultOk = true;
      break;
    }
  }

  if (resultOk === false) {
    rtm.sendMessage(
      '학사일정이 존재하지 않습니다, 처음으로 돌아갑니다.',
      channel,
    );
    check.setCheck(false);
  } else {
    rtm.sendMessage(result, channel);
    check.setCheck(false);
  }
};

module.exports = searchSchedule;
