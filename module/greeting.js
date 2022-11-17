const greeting = function (rtm, channel) {
  console.log('인사를 합니다.');
  rtm.sendMessage('안녕하세요.', channel);
};

module.exports = greeting;
