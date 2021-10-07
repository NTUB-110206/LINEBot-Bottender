const { router, text } = require('bottender/router');
axios = require('axios');
const backend_SERVERURL = process.env.Heroku_backend

const getNews = async () => {
  try {
    let res = await axios.get(backend_SERVERURL + `/`, {
      headers: { "content-type": "application/json" }
    })
    return res
  } catch (error) {
    return handle_Error(error);
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
    return handle_Error(error);
  }
};

const handle_Error = (error) => {
  console.log("WEBAPI error")
  if (error.response) {
    // Request made and server responded
    console.log("response");
    console.log(error.response.data + "\n" + error.response.status + "\n" + error.response.headers);
  } else if (error.request) {
    // The request was made but no response was received
    console.log("request");
    console.log(error.request);
  } else {
    // Something happened in setting up the request that triggered an Error
    console.log("Error");
    console.log(error.message);
  }
}

module.exports = { getNews, chatbot }