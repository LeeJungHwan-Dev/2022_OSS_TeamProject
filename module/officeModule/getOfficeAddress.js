const searchAddress = require('./searchAddress');

/**
 * 모듈 설명
 *
 * 해당 모듈은 readfile() 함수를 통해 학과 사무실을 읽어오고
 * 주소를 전송 모듈로 정보를 전달하는 모듈입니다. => sendAddress()
 *
 */

const getAddressFile = function (text, channel, rtm) {
  const fs = require('fs');

  fs.readFile('module/officeModule/dept.txt', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
    }
    console.log(text.toLowerCase());
    console.log(data);

    return searchAddress(
      text.toLowerCase().replace(/ /g, ''),
      data.split('\n'),
      channel,
      rtm,
    );
  });
};

module.exports = getAddressFile;
