const { router, text } = require('bottender/router');
const WEBAPI = require('./WebAPI');

async function Unknown(context) {
  const result = await WEBAPI.chatbot(context.event.text)
  if (result?.status == 200 && result?.data) {
    await context.sendText(result.data['data']);
  }
}

async function News(context) {
  const result = await WEBAPI.getNews()
  let news = []
  if (result?.status == 200 && result?.data) {
    news = result.data['news']
    console.log(news)
    let reply = ""
    news.map(news => {
      reply += news['news_id'] + "\n" + news['news_website'] + "\n" + news['news_title'] + "\n" + news['news_content'] + "\n\n"
    })
    await context.sendText(reply);
  }
}

module.exports = async function App(context) {
  return router([
    text('news', News),
    text('*', Unknown),
  ]);
};
