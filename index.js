const { RTMClient } = require("@slack/rtm-api");
const greeting = require("./module/greeting");
const token = require("./module/token");
const square = require("./module/square");
const check = require("./module/officeModule/isCheck");
const searchOfficeAddress = require("./module/officeModule/searchAddress");

let isFirst = false;

const greetings = ["hi", "hello", "안녕", "안녕하세요", "누구세요"];

const rtm = new RTMClient(token);
rtm.start();
rtm.on("message", (message) => {
  const { channel } = message;
  const { text } = message;

  if (check.getCheck()) {
    searchOfficeAddress(rtm, channel, text);
  } else if (!isNaN(text)) {
    square(rtm, text, channel);
  } else if (text == "학과 사무실 조회") {
    rtm.sendMessage("학과 이름을 입력해주세요.", channel);
    check.setCheck(true);
  } else if (greetings.includes(text)) {
    greeting(rtm, channel);
  } else {
    rtm.sendMessage("I'm alive", channel);
  }
});
