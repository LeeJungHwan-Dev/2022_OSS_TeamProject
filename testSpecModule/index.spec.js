const { assert } = require('chai');
const schedule = require('../module/scheduleModule/indexIngSchedule');
const patter = require('../module/scheduleModule/patternChecker');

schedule.indexing();

describe('Start Schedule Test', () => {
  it('단일 날짜 테스트 #1', () => {
    assert.equal(schedule.scheduleList['8/4'], '2학기 수강신청');
  });

  it('중복 날짜 출력 테스트 #2', () => {
    assert.equal(schedule.scheduleList['9/1'], '2학기 개강');
    assert.equal(schedule.scheduleList['9/1r'], '2학기 수강신청 변경 기간');
  });

  it('범위 날짜 출력 테스트 #3', () => {
    assert.equal(schedule.scheduleList['9/5'], '2학기 수강신청 변경 기간');
    assert.equal(
      schedule.scheduleList['10/20'],
      '(대학원) 석사학위 논문 심사 신청',
    );
  });

  it('날짜 패턴 검사 테스트 #4', () => {
    assert.equal(patter.getStatus('10/1-10/24'), 2);
    assert.equal(patter.getStatus('10/01-10/24'), 2);
    assert.equal(patter.getStatus('1/01-10/24'), 2);
    assert.equal(patter.getStatus('10/1'), 1);
    assert.equal(patter.getStatus('0/01-10/24'), -1);
    assert.equal(patter.getStatus('/101'), -1);
    assert.equal(patter.getStatus('00/00'), -1);
    assert.equal(patter.getStatus('10/33'), -1);
    assert.equal(patter.getStatus('ㅁ'), -1);
  });
});
