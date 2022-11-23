const check = require('../seletedCheckModule');
// const getAdress = require('./searchAddress');

const searchAddress = function (string, list, channel, rtm) {
  /**
   * 모듈 설명
   *
   * 해당 모듈은 넘겨받은 텍스트와 파일에서 읽어온 내용을 비교하며
   * 해당 학과 이름이 있는 줄의 내용을 출력하는 모듈입니다.
   *
   * resultOk는 해당 날짜의 학과 이름이 있으면 true 없으면 false로 설정됩니다.
   * result는 학과 이름이 담겨 있는 변수 입니다.
   *
   * check는 학과 사무실 주소 안내가 종료가 되었으므로 false값을 줌으로써 최초 화면으로 탈출할 수 있게 구현 됩니다.
   *
   */

  let resultOk = false;
  let result;
  let str;

  for (let i = 0; i < list.length; i += 1) {
    /// /////////////////// 유효한 학과 이름 입력일 경우//////////////////////
    if (list[i].includes(string)) {
      result = `${list[i]} 입니다`;
      result = list[i].trim().split('-');

      if (result[0].trim() !== string) {
        console.log('틀린값 입니다');
      } else {
        str = `${result[0].trim()}은 ${result[1].trim()}입니다.`;
        console.log(str);
        resultOk = true;
        break;
      }
    }
  }
  if (resultOk === false) {
    rtm.sendMessage(
      '학과 이름이 존재하지 않습니다. 처음으로 돌아갑니다.',
      channel,
    );
    check.setCheck(false);
  } else {
    rtm.sendMessage(str, channel);
    check.setCheck(false);
  }
};

module.exports = searchAddress;
