require('dotenv').config();

const { RTMClient } = require('@slack/rtm-api');

// const channel = 'D047ADF9CH4';

let token;

try {
  // eslint-disable-next-line global-require
  token = require('./module/token');
} catch (err) {
  console.error(err);
}

console.log(token);

const rtm = new RTMClient(token);

(async () => {
  await rtm.start().catch(console.error);
})();

const assert = require('assert');
// const greeting = require('./greeting2');

let res;

describe('테스트를 시작합니다.', async () => {
  // efore(async () => (res = await greeting(rtm, channel)));

  if (
    ('인사 모듈 테스트',
    function (done) {
      console.log(res);
      assert.equal(res, 'success');
      done();
    })
  );
});
