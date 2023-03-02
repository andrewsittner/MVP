const path = require('path');
require('dotenv').config()
const { Configuration, OpenAIApi } = require("openai");
const {getByTitle} = require('./rawgAPI')
const configuration = new Configuration({
  apiKey: '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'
});

const openai = new OpenAIApi(configuration);
const getRecommendations = async (games) => {
  const gameNames = games.map((game) => {
    return game.name
  })
 const data = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `give me a list of ten games that are similar to ${gameNames} send them to me in an array seperated by commas`,
    temperature: 0.6,
    max_tokens: 100,
    top_p: 1,
    frequency_penalty: 1.0,
    presence_penalty: 1.0
  })
  
  return getByTitle(data.data.choices[0].text)

   
}


module.exports = getRecommendations
