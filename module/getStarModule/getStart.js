const star = {
  1: '',
  2: '',
  3: '',
  4: '',
  5: '',
};

const editStar = function () {
  for (let i = 1; i <= 5; i += 1) {
    const num = Math.floor(Math.random() * 10) + 1;
    if (num === 1) {
      star[i] = '⭐️';
    } else if (num === 2) {
      star[i] = '⭐️⭐️';
    } else {
      star[i] = '⭐️⭐️⭐️';
    }
  }
};

const getStar = function () {
  return star;
};

module.exports.editStar = editStar;
module.exports.getStar = getStar;
