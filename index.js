const { RTMClient } = require('@slack/rtm-api');
const greeting = require('./module/greeting');
const token = require('./module/token');
const square = require('./module/square');

const greetings = ['hi', 'hello', '안녕', '안녕하세요', '누구세요'];

const rtm = new RTMClient(token);
rtm.start();

rtm.on('message', (message) => {
  const { channel } = message;
  const { text } = message;

  if (!isNaN(text)) {
    square(rtm, text, channel);
  } else if (greetings.includes(text)) {
    greeting(rtm, channel);
  } else {
    rtm.sendMessage("I'm alive", channel);
  }
});
