const greeting = function (rtm, channel) {
  console.log('인사를 합니다.');

  const rand = Math.random() * 3 + 1; // 1 ~ 3의 난수 생성

  rtm.sendMessage(String(rand), channel);

  if (Math.floor(rand) === 1) {
    rtm.sendMessage('Hello', channel);
  } else if (Math.floor(rand) === 2) {
    rtm.sendMessage('Hi', channel);
  } else if (Math.floor(rand) === 3) {
    rtm.sendMessage('Bonjour', channel);
  } else {
    rtm.sendMessage('Error', channel);
  }
};

module.exports = greeting;
