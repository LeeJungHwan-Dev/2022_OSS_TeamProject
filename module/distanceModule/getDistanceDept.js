const sendDept = function (list, distanceArray, channel, rtm) {
  console.log('호출됨');
  const minDist = Math.min.apply(null, distanceArray);
  const minIndex = distanceArray.indexOf(minDist);

  console.log(distanceArray);

  rtm.sendMessage('최대한 유사한 학과를 찾아본 결과 아래와 같아요.', channel);
  rtm.sendMessage(
    '* 입력값이 너무 작으면 올바른 결과가 나오지 않습니다.',
    channel,
  );

  for (let i = minIndex; i < distanceArray.length; i += 1) {
    if (minDist === distanceArray[i]) {
      rtm.sendMessage(list[i], channel);
    }
  }
};

module.exports.sendDept = sendDept;
