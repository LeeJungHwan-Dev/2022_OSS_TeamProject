const searchSchedule = function (day, list, channel, rtm) {
  /**
   * 모듈 설명
   *
   * 해당 모듈은 넘겨받은 날짜와 파일에서 읽어온 내용을 비교하며
   * 해당 날짜가 있는 줄의 내용을 출력하는 모듈입니다.
   *
   * resultOk는 해당 날짜의 학사 일정이 있으면 true 없으면 false로 설정됩니다.
   * result는 학사 일정이 담겨 있는 변수 입니다.
   *
   */

  let resultOk = false;
  let result;

  for (let i = 0; i < list.length; i += 1) {
    if (list[i].includes(day)) {
      result = `${list[i]} 입니다`;
      result = `${result.slice(0, 5)}일은 ${result.slice(6, result.length)}`;
      resultOk = true;
      break;
    }
  }

  if (resultOk === false) {
    rtm.sendMessage('학사일정이 존재하지 않습니다', channel);
  } else {
    rtm.sendMessage(result, channel);
  }
};

module.exports = searchSchedule;
