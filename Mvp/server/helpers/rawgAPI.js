const axios = require('axios')
const path = require('path');
require('dotenv').config()
let apiKey = process.env.KEY


const getByGenre = async (genre) => {
    let results = []
    let initialResult = await axios.get(`https://api.rawg.io/api/games?key=${apiKey}&ordering=-metacritic&genre=${genre}`)
    for (let i = 0; i < initialResult.data.results.length; i++) {
        let gameid = initialResult.data.results[i].id
        const game = await axios.get(`https://api.rawg.io/api/games/${gameid}?key=${apiKey}`)
        results.push({
            id: game.data.id,
            name: game.data.name,
            rating: game.data.metacritic,
            image: game.data.background_image,
            description: game.data.description,
            genres: game.data.genres
        })
    }
    return results

}

module.exports = getByGenre