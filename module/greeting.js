const greeting = function (rtm, channel) {
  const rand = Math.floor(Math.random() * 3) + 1; // 1 ~ 3의 난수 생성

  if (rand === 1) {
    rtm.sendMessage(
      `안녕하세요? 전북대학교 챗봇입니다.
다음의 기능들을 제공하고 있습니다.

1. 학사일정 조회
2. 식단 조회
3. 학과 사무실 조회`,
      channel,
    );
  } else if (rand === 2) {
    rtm.sendMessage(
      `Hello? I'm Chonbuk National University chatbot.
I provide the following features.

1. Academic Calendar
2. Check Menu
3. Check Office of Academic Department`,
      channel,
    );
  } else if (rand === 3) {
    rtm.sendMessage(
      `こんにちは？全北大学チャットボットです。
以下の機能を提供しています。

1. 学士スケジュール
2. 食事の検索
3. 学科事務所検索`,
      channel,
    );
  } else {
    rtm.sendMessage('Error of random()', channel);
  }
};

module.exports = greeting;
