const scheduleList = {};
// key, value로 구성된 스케줄 리스트

const pattern = /^([1-9]|1[012])\/([1-9]|[12][0-9]|3[0-1])$/;

function shortDate(date, schedule) {
  scheduleList[date.toString()] = schedule;
}

function longDate(date, schedule) {
  const firstDate = new Date(date[0]);
  const lastDate = new Date(date[2]);

  while (true) {
    scheduleList[`${firstDate.getMonth() + 1}/${firstDate.getDate()}`] =
      schedule;
    firstDate.setDate(firstDate.getDate() + 1);

    if (
      firstDate.getMonth() + 1 === lastDate.getMonth() + 1 &&
      firstDate.getDate() === lastDate.getDate()
    ) {
      scheduleList[`${firstDate.getMonth() + 1}/${firstDate.getDate()}`] =
        schedule;
      break;
    }
  }
}

function checkDate(dateList) {
  for (let i = 0; i <= dateList.length - 1; i += 1) {
    const schedule = dateList[i].split(':');
    const date = dateList[i].split(' ');

    if (pattern.test(date[0]) && pattern.test(date[2])) {
      longDate(date, schedule[1].trim());
    } else if (pattern.test(date[0])) {
      shortDate(date[0], schedule[1].trim());
    } else {
      console.log('틀린 날짜');
    }
  }
}

const indexing = function () {
  const fs = require('fs');

  fs.readFile('module/haksa.txt', 'utf8', (err, date) => {
    if (err) {
      console.error(err);
    }

    checkDate(date.split('\n'));
  });
};

module.exports.indexing = indexing;
module.exports.scheduleList = scheduleList;
