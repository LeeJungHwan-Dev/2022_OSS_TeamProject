const { RTMClient } = require('@slack/rtm-api');
const greeting = require('./module/greeting');
const token = require('./module/token');
const square = require('./module/square');

const rtm = new RTMClient(token);
rtm.start();

rtm.on('message', (message) => {
  const { channel } = message;
  const { text } = message;

  if (!isNaN(text)) {
    square(rtm, text, channel);
  } else {
    switch (text) {
      case 'hi':
        greeting(rtm, channel);
        break;
      default:
        rtm.sendMessage(" I'm alive", channel);
    }
  }
});
