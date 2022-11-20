const { RTMClient } = require('@slack/rtm-api');
const greeting = require('./module/greeting');
const token = require('./module/token');
const square = require('./module/square');
const check = require('./module/scheduleModule/checkingScheduleSelect');
const searchAcademicSchedule = require('./module/scheduleModule/searchAcademicScheduleModule');

let isFirst = false;

const rtm = new RTMClient(token);
rtm.start();

rtm.on('message', (message) => {
  const { channel } = message;
  const { text } = message;

  if (check.getCheck()) {
    searchAcademicSchedule(rtm, channel, text);
  } else if (!isNaN(text)) {
    square(rtm, text, channel);
  } else {
    switch (text) {
      case '안녕?':
        greeting(rtm, channel);
        break;
      case '학사일정':
        rtm.sendMessage('안내 받을 날짜를 이야기해주세요.', channel);
        check.setCheck(true);
        break;
      default:
        rtm.sendMessage(" I'm alives", channel);
    }
  }

  if (isFirst === false) {
    rtm.sendMessage(
      '전북대학교 통합 지원 챗봇 입니다. 원하는 항목의 내용을 입력해주세요. \n 1. 학사일정 \n 2. 식단조회 \n 3. 학과 사무실 조회',
      channel,
    );
    isFirst = true;
  }
});
