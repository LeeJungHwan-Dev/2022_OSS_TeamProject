const getOfficeAddress = require('./getOfficeAddress');

/**
 * 모듈 설명
 *
 * 해당 모듈은 index.js에서 최초로 실행되는 모듈입니다.
 * 이후 올바른 값이 입력되면 입력한 텍스트, channel, rtm순으로
 * 주소 파일을 읽어주는 모듈로 값을 전달합니다. => getOfficeAddress()
 *
 * 각 매개변수 설명
 * rtm => slack 챗봇 사용을 위해 필요한 rtm
 * channel => slack 챗봇 사용을 위해 필요한 channel 변수
 * text => 사용자가 입력한 텍스트
 *
 * 텍스트의 변환 허용을 하기 위한 모듈
 */

const sendAddress = function (rtm, channel, text) {
  getOfficeAddress(text, channel, rtm);
};

module.exports = sendAddress;
