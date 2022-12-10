const axios = require('axios');
const cheerio = require('cheerio');

async function webScraping(url, selector) {
  const res = [];
  const html = await axios.get(url);
  const $ = cheerio.load(html.data);

  // eslint-disable-next-line no-restricted-syntax
  for (const v of $(selector)) {
    res.push($(v).text());
  }

  return res;
}

const url = 'https://sobi.jbnu.ac.kr/menu/week_menu.php';

let str;

const selector = 'font';
const selector2 = 'span';

const infoFoodDay = async function (rtm, data, channel) {
  const res = await webScraping(url, selector);
  const res2 = await webScraping(url, selector2);
  // 6, 7, 8, 9 월요일 식단

  if (data === 0 || data === 6) {
    str = '오늘은 휴무일입니다.';
    console.log(str);
    rtm.sendMessage(str, channel);
  } else if (data === 1) {
    str = `오늘의 메뉴는 '${res2[6]} / ${res2[7]} / ${res2[8]} / ${res2[9]}'입니다.`;
    console.log(str);
    rtm.sendMessage(str, channel);
  } else {
    str = `오늘의 메뉴는 '${res[data * 4 - 7]} / ${res[data * 4 - 6]} / ${
      res[data * 4 - 5]
    } / ${res[data * 4 - 4]}'입니다.`;
    console.log(str);
    rtm.sendMessage(str, channel);
  }
};

const infoFoodWeek = async function (rtm, channel) {
  const res = await webScraping(url, selector);
  const res2 = await webScraping(url, selector2);
  // 6, 7, 8, 9 월요일 식단

  let foodDay1 = -3;
  let foodDay2 = -2;
  let foodDay3 = -1;
  let foodDay4 = 0;

  str = `${'월'}: ${res2[6]} / ${res2[7]} / ${res2[8]} / ${res2[9]} `;
  console.log(str);
  rtm.sendMessage(str, channel);
  for (let i = 0; i < 4; i += 1) {
    const day = ['화', '수', '목', '금'];
    str = `${day[i]}: ${res[(foodDay1 += 4)]} / ${res[(foodDay2 += 4)]} / ${
      res[(foodDay3 += 4)]
    } / ${res[(foodDay4 += 4)]} `;
    console.log(str);
    rtm.sendMessage(str, channel);
  }
};

module.exports.infoFoodDay = infoFoodDay;
module.exports.infoFoodWeek = infoFoodWeek;
