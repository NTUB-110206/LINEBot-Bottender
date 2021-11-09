const { router, text } = require('bottender/router');
const WEBAPI = require('./WebAPI');
const temp = require('./temp');
const getColors = require('get-image-colors');
const _ = require('lodash');

async function Unknown(context) {
  const result = await WEBAPI.chatbot(context.event.text)
  if (result?.status == 200) {
    switch (result.headers['function']) {
      case 'getNews':
        reply_news(context, result['data']['data']['news'])
        break;
      case 'getTrend':
        reply_trend(context, result['data']['data'])
        break;
      case 'getPrice':
        reply_price(context, result['data']['data'])
        break;
      case 'gSearch':
        reply_gSearch(context, result['data']['data'])
        break;
      default:
        context.sendText(result['data']['data'])
        break;
    }
  }
}

async function News(context) {
  const result = await WEBAPI.getNews()
  if (result?.status == 200 && result?.data) {
    reply_news(context, result['data']['data']['news'])
  }
}

const reply_news = async (context, news) => {
  let reply = _.cloneDeep(temp.news_carousel)

  await Promise.all(news.slice(-10).map(async (news) => {
    let content = _.cloneDeep(temp.news_contents)

    content['body']['contents'][0]['url'] = news['img_link']
    content['body']['contents'][1]['backgroundColor'] = await colorPicker(news['img_link'])
    content['body']['contents'][1]['contents'][0]['contents'][0]['text'] = news['news_title']
    content['body']['contents'][1]['contents'][1]['contents'][0]['text'] = news['news_datetime'].substring(0, 10)
    content['body']['contents'][1]['contents'][2]['contents'][1]['contents'][1]['text'] = news['news_website']
    content['body']['contents'][1]['contents'][2]['contents'][1]['contents'][1]['action']['uri'] = news['news_link']
    content['body']['contents'][2]['contents'][0]['text'] = news?.trend?.trend_label ? news?.trend?.trend_label : '預測中'
    content['body']['contents'][2]['backgroundColor'] = news?.trend?.trend_label ? (news?.trend?.trend_label == '正面' ? '#26B037' : '#C81B1B') : '#000000'

    reply['contents'].push(content)

  }))
  
  await context.sendFlex('news', reply)
}

const reply_gSearch = async (context, datalist) => {
  let reply = ""
  await datalist.slice(-5).map(data => {
    reply += data['title'] + "\n" + data['snippet'] + "\n" + data['link'] + "\n\n"
  })

  context.sendText(reply)
}

const reply_price = async (context, price) => {
  context.sendText(context.event.text+": "+price)
}

const reply_trend = async (context, img_data) => {
  const imagemap = {
    baseUrl: img_data['img_url'],
    baseSize: {
      height: img_data['height'],
      width: img_data['width'],
    },
    actions: [],
  };
  const altText = 'BTC/USD trend';
  await context.sendImagemap(altText, imagemap);
}

const colorPicker = async (img_url) => {
  const colors = await getColors(img_url)
  return colors[1].hex() + 'cc'
}

module.exports = async function App(context) {
  return router([
    text('news', News),
    text('*', Unknown),
  ]);
};
