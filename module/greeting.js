const greeting = function (rtm, channel) {
  console.log('인사를 합니다.');

  const rand = Math.floor(Math.random() * 3) + 1; // 1 ~ 3의 난수 생성

  if (rand === 1) {
    rtm.sendMessage(
      '안녕하세요? 전북대학교 챗봇입니다.\n다음의 기능들을 제공하고 있습니다.',
      '\n1. 학사일정\n2. 식단 조회\n3. 학과 사무실 조회',
      channel,
    );
  } else if (rand === 2) {
    rtm.sendMessage(
      'Hello? I`m Chonbuk National University chatbot.\nI provide the following features.',
      '\n1. Academic Calendar\n2. Check Menu\n3. Check Office of Academic Department',
      channel,
    );
  } else if (rand === 3) {
    rtm.sendMessage(
      'こんにちは？全北大学チャットボットです。\n以下の機能を提供しています。',
      '\n1. 学士スケジュール\n2. 食事の検索\n3. 学科事務所検索',
      channel,
    );
  } else {
    rtm.sendMessage('Error of random()', channel);
  }
};

module.exports = greeting;
