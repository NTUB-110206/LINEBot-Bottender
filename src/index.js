const { router, text } = require('bottender/router');
const WEBAPI = require('./WebAPI');

async function Unknown(context) {
  const result = await WEBAPI.chatbot(context.event.text)
  if (result?.status == 200 && result?.data && result.data?.function) {
    console.log(result['data']['function'])
    if (result['data']['function'] == "getNews") reply_news(context, result['data']['data']['news'])
    else if (result['data']['function'] == "gSearch") reply_gSearch(context, result['data']['data'])
    else await context.sendText(result['data']['data'])

  }
}

async function News(context) {
  const result = await WEBAPI.getNews()
  if (result?.status == 200 && result?.data) {
    reply_news(context, result['data']['data']['news'])
  }
}

const reply_news = async (context, news) => {
  let reply = ""
  await news.slice(-10).map(news => {
    reply += news['news_id'] + "\n" + news['news_website'] + "\n" + news?.category?.category_label + "\n" + news?.trend?.trend_label + "\n" + news['news_title'] + "\n" + news['news_content'] + "\n" + news['news_link'] + "\n\n"
  })

  context.sendText(reply)
}

const reply_gSearch = async (context, datalist) => {
  let reply = ""
  await datalist.slice(-5).map(data => {
    reply += data['title'] + "\n" + data['snippet'] + "\n" + data['displayLink'] + "\n\n"
  })

  context.sendText(reply)
}

module.exports = async function App(context) {
  return router([
    text('news', News),
    text('*', Unknown),
  ]);
};
