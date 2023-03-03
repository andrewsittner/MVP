const path = require('path');
require('dotenv').config()
let apiKey = process.env.KEY
const { Configuration, OpenAIApi } = require("openai");
const {getByTitle} = require('./rawgAPI')
const configuration = new Configuration({
  apiKey: apiKey
});

const openai = new OpenAIApi(configuration);
const getRecommendations = async (games) => {
  const gameNames = games.map((game) => {
    return game.name
  })
 const data = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `give me a list of ten games that are similar but not the same to ${gameNames.toString()} send them to me in an array seperated by commas`,
    temperature: 0.6,
    max_tokens: 100,
    top_p: 1,
    frequency_penalty: 1.0,
    presence_penalty: 1.0
  })
  
  return getByTitle(data.data.choices[0].text)

   
}


module.exports = getRecommendations
