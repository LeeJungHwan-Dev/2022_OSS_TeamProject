const distance = require('js-levenshtein');
const check = require('../seletedCheckModule');
const getDept = require('../distanceModule/getDistanceDept');

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
  const distanceArray = [];
  // 사용자의 입력에 따른 각 학과 사무실 distance 거리

  for (let i = 0; i < list.length; i += 1) {
    /// /////////////////// 유효한 학과 이름 입력일 경우//////////////////////

    /** 올바른 문자열 유사도 검사를 위해 전부 50글자로 채워넣고 검사를 실시한다. */
    let dptName = list[i].trim().split('-')[0];
    while (dptName.length <= 50) {
      dptName += '📆';
    }

    distanceArray[i] = distance(dptName, string);
    /** 올바른 문자열 유사도 검사를 위해 전부 50글자로 채워넣고 검사를 실시한다. */

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

  console.log(distanceArray);
  console.log(distanceArray[1]);

  if (resultOk === false) {
    rtm.sendMessage(
      '이런! 입력하는 값과 일치하는 학과는 없네요! 대신에 유사한 학과를 찾아볼게요.',
      channel,
    );
    getDept.sendDept(list, distanceArray, channel, rtm);
    check.setCheck(false);
  } else {
    rtm.sendMessage(str, channel);
    check.setCheck(false);
  }
};

module.exports = searchAddress;
