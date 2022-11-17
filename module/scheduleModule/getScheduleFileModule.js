const sendSchedule = require('./sendAcademicScheduleModule');

/**
 * 모듈 설명
 *
 * 해당 모듈은 readfile() 함수를 통해 학사 일정을 읽어오고
 * 스케줄을 전송 모듈로 정보를 전달하는 모듈입니다. => sendSchedule()
 *
 */

const getScheduleFile = function (day, channel, rtm) {
  const fs = require('fs');

  fs.readFile(
    '/Users/lee/Desktop/2_study/2022_OSS_TeamProject/학사일정.txt',
    'utf8',
    (err, data) => {
      if (err) {
        console.error(err);
      }
      return sendSchedule(day, data.toString().split('\n'), channel, rtm);
    },
  );
};

module.exports = getScheduleFile;
