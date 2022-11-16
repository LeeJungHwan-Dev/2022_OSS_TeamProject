const getAcademicSchedule = require('./getScheduleFileModule');

/**
 * 모듈 설명
 *
 * 해당 모듈은 index.js에서 최초로 실행되는 모듈입니다.
 * 입력받은 날짜가 올바른 형식인지에 대해 isNaN을 사용해 검사하고,
 * 이후 올바른 값이 입력되면 입력한 날짜, channel, rtm순으로
 * 스케줄 파일을 읽어주는 모듈로 값을 전달합니다.
 *
 * inputDay는 최초 입력 받은 날짜 입니다.
 * resultDay는 입력 받은 데이터를 올바른 형식으로 포맷한 날짜입니다.
 *
 */

const sendAcademicSchedule = function (rtm, channel, text) {
  const inputDay = new Date(`0000${'/'}${text}`);
  const resultDay = `${`00${inputDay.getMonth() + 1}`.slice(
    -2,
  )}/${`00${inputDay.getDate()}`.slice(-2)}`;

  if (isNaN(inputDay)) {
    rtm.sendMessage('올바른 날짜를 입력해주세요.', channel);
  } else {
    getAcademicSchedule(resultDay, channel, rtm);
  }
};

module.exports = sendAcademicSchedule;
