/**
 * 해당 모듈은 학사 일정 선택 유무를 확인하는 스케줄 check getter/setter 입니다.
 *
 */

let isScheduleCheck = false;

const setCheck = function (check) {
  isScheduleCheck = check;
};

const getCheck = function () {
  return isScheduleCheck;
};

module.exports.setCheck = setCheck;
module.exports.getCheck = getCheck;
