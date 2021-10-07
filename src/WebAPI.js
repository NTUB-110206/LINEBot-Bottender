const { router, text } = require('bottender/router');
axios = require('axios');
const backend_SERVERURL = process.env.Heroku_backend

const getNews = async () => {
  try {
    let res = await axios.get(backend_SERVERURL + `/`, {
      headers: { "content-type": "application/json" }
    })
    console.log(res)
    return res
  } catch (error) {
    return "error";
  }
};


const chatbot = async (context) => {
  try {
    let res = await axios.post(backend_SERVERURL + `/chatbot`, { context }, {
      headers: {
        "content-type": "application/json",
      }
    })
    return res
  } catch (error) {
    return "error";
  }
};

module.exports = { getNews, chatbot }