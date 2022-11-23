const check = require('./checkingScheduleSelect');
const schedule = require('./indexIngSchedule');

let keyList;
// index.js에서 생성한 key값을 담을 리스트 변수

const pattern = /^([1-9]|1[012])\/([1-9]|[12][0-9]|3[0-1])$/;
// mm/dd 패턴 정규식
const pattern2 =
  /^([1-9]|1[012])\/([1-9]|[12][0-9]|3[0-1])-([1-9]|1[012])\/([1-9]|[12][0-9]|3[0-1])$/;
// mm/dd - mm/dd 패턴 정규식

function scheduleListSender(dateList, rtm, channel) {
  let keyindex = keyList.indexOf(dateList[0]);
  // keyindex는 사용자가 입력한 첫째날 인덱스부터 더해질 변수이다.
  while (true) {
    if (
      keyList.at(keyindex) === undefined ||
      keyList.at(keyindex) === dateList[1]
    ) {
      // 날짜가 더이상 존재하지 않거나, 입력한 마지막 날짜와 같을경우 break를 위한 if문
      rtm.sendMessage(
        `${keyList.at(keyindex)}는 ${
          schedule.scheduleList[keyList.at(keyindex)]
        }입니다.`,
        channel,
      );
      // 9/7일까지 있을경우 9/6일까지 출력되어 마지막에 한번더 출력하여 마지막 날짜까지 출력해주는 로직
      break;
    } else {
      rtm.sendMessage(
        `${keyList.at(keyindex)}는 ${
          schedule.scheduleList[keyList.at(keyindex)]
        }입니다.`,
        channel,
      );
      // 날짜를 key로 사용하여 value값을 찾아 사용자에게 일정을 전송한다.
      // keyindex에는 증가한 날짜 key index가 들어있다.
    }
    keyindex += 1;
    // 다음 날짜로 이동
  }
  check.setCheck(false);
}

function noScheduleCheck(removeBlankDate, rtm, channel) {
  keyList = Object.keys(schedule.scheduleList);
  const dateList = removeBlankDate.split('-');
  const keyindex1 = keyList.indexOf(dateList[0]);
  const keyindex2 = keyList.indexOf(dateList[1]);

  /**
   * 각 keyindex는 key값이 존재하는 위치의 인덱스 값을 담은 변수이다.
   * keyindex1는 첫번째 날짜의 인덱스 값, keyindex2는 두번째 날짜의 인덱스 값 이다.
   * dateList는 날짜를 '-' 기준으로 자른 날짜 리스트이다.
   */
  if (keyindex1 <= keyindex2) {
    // 날짜를 9/7 - 9/1 과 같이 범위 설정을 잘 못 하였을 때를 처리하기 위한 if문
    if (keyindex1 !== -1 && keyindex2 !== -1) {
      // 키값에 등록된 올바른 범위일경우
      scheduleListSender(dateList, rtm, channel);
    } else {
      // 일정이 둘다 없을경우
      rtm.sendMessage('학사일정이 존재하지 않습니다.', channel);
      check.setCheck(false);
    }
  } else {
    rtm.sendMessage(
      '날짜 범위가 올바르지 않습니다. 다시 입력해주세요.',
      channel,
    );
  }
}

function scheduleSender(date, rtm, channel) {
  const removeBlankDate = date.replace(/(\s*)/g, '');
  // 맨 처음 들어오는 날짜 문자열에서 공백을 모두 제거한다.
  if (pattern.test(removeBlankDate)) {
    // 단일 날짜 입력에 따른 패턴 검사
    let resultDate = new Date(`0000${date}`);
    resultDate = `${resultDate.getMonth() + 1}/${resultDate.getDate()}`;
    // 날짜를 yyyy/mm/dd 순으로 만들고 날짜 key를 생성한다. => resultDate

    if (schedule.scheduleList[resultDate] === undefined) {
      // key를 기반으로 호출 했을때 value가 없으면 undefined가 리턴된다. 이를 확인하고 아래 메시지를 사용자에게 전달한다.
      rtm.sendMessage('학사일정이 존재하지 않습니다.', channel);
      check.setCheck(false);
    } else {
      // 정상적으로 날짜가 존재하고 value가 존재한다면
      rtm.sendMessage(
        `${resultDate}는 ${schedule.scheduleList[resultDate]}입니다.`,
        channel,
      );
      check.setCheck(false);
      // 사용자에게 key와 value가 존재할 경우 존재하는 일정을 전달한다.
    }
  } else if (pattern2.test(removeBlankDate)) {
    // 단일 날짜가 아닌 범위날짜일 경우
    // 스케줄이 범위 내에 있는지 검사하는 함수로 이동한다.
    noScheduleCheck(removeBlankDate, rtm, channel);
  } else {
    // 패턴1 => mm/dd 패턴2 => mm/dd - mm/dd 둘다 아닐 경우는 날짜 형식이 잘못된 것이므로 아래 메시지를 사용자에게 전달한다.
    rtm.sendMessage('올바른 날짜 형식이 아닙니다.', channel);
  }
}

module.exports = scheduleSender;
