const { RTMClient } = require('@slack/rtm-api');
const greeting = require('./module/greeting');
const token = require('./module/token');
const square = require('./module/square');
const sendAcademicSchedule = require('./module/searchAcademicScheduleModule');

let checkSchedule = false;

const rtm = new RTMClient(token);
rtm.start();

rtm.on('message', (message) => {
  const { channel } = message;
  const { text } = message;

  if (checkSchedule) {
    sendAcademicSchedule(rtm, channel, text);
  } else if (!isNaN(text)) {
    square(rtm, text, channel);
  } else {
    switch (text) {
      case 'hi':
        greeting(rtm, channel);
        break;
      case '학사일정':
        rtm.sendMessage('안내 받을 날짜를 이야기해주세요.', channel);
        checkSchedule = true;
        break;
      default:
        rtm.sendMessage(" I'm alives", channel);
    }
  }
});
