let status = 0;

const checkPatter = function (text) {
  const pattern = /^([1-9]|1[012])\/([1-9]|[12][0-9]|3[0-1])$/;
  // m/d 패턴 정규식

  const pattern3 = /^(0[1-9]|1[012])\/(0[1-9]|[12][0-9]|3[0-1])$/;
  // mm/dd 패턴 정규식

  const pattern4 = /^(0[1-9]|1[012])\/([1-9]|[12][0-9]|3[0-1])$/;
  // mm/d 패턴 정규식

  const pattern5 = /^([1-9]|1[012])\/(0[1-9]|[12][0-9]|3[0-1])$/;
  // m/dd 패턴 정규식

  const pattern2 =
    /^([1-9]|1[012])\/([1-9]|[12][0-9]|3[0-1])-([1-9]|1[012])\/([1-9]|[12][0-9]|3[0-1])$/;
  // m/d - m/d 패턴 정규식

  const pattern6 =
    /^(0[1-9]|1[012])\/([1-9]|[12][0-9]|3[0-1])-([1-9]|1[012])\/([1-9]|[12][0-9]|3[0-1])$/;
  // mm/d - m/d 패턴 정규식

  const pattern7 =
    /^(0[1-9]|1[012])\/([1-9]|[12][0-9]|3[0-1])-(0[1-9]|1[012])\/([1-9]|[12][0-9]|3[0-1])$/;
  // mm/d - mm/d 패턴 정규식

  const pattern8 =
    /^([1-9]|1[012])\/(0[1-9]|[12][0-9]|3[0-1])-([1-9]|1[012])\/(0[1-9]|[12][0-9]|3[0-1])$/;
  // m/dd - m/dd 패턴 정규식

  const pattern9 =
    /^([1-9]|1[012])\/([1-9]|[12][0-9]|3[0-1])-(0[1-9]|1[012])\/([1-9]|[12][0-9]|3[0-1])$/;
  // m/d - mm/d 패턴 정규식

  const pattern10 =
    /^([1-9]|1[012])\/([1-9]|[12][0-9]|3[0-1])-([1-9]|1[012])\/(0[1-9]|[12][0-9]|3[0-1])$/;
  // m/d - m/dd 패턴 정규식

  const pattern11 =
    /^(0[1-9]|1[012])\/([1-9]|[12][0-9]|3[0-1])-(0[1-9]|1[012])\/(0[1-9]|[12][0-9]|3[0-1])$/;
  // mm/d - mm/dd 패턴 정규식

  if (
    pattern.test(text) ||
    pattern3.test(text) ||
    pattern4.test(text) ||
    pattern5.test(text) ||
    pattern6.test(text)
  ) {
    status = 1;
  }
  if (
    pattern2.test(text) ||
    pattern7.test(text) ||
    pattern8.test(text) ||
    pattern9.test(text) ||
    pattern10.test(text) ||
    pattern11.test(text)
  ) {
    status = 2;
  }
};

const getStatus = function (text) {
  checkPatter(text);
  return status;
};

module.exports.getStatus = getStatus;
