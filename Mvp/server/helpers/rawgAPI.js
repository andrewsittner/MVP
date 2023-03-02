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

const getByTitle = async (games) => {
    const resultArray = []
    const finalResultArray = []
    games = games.toString().replace(/(\r\n|\n|\r)^\s*\d+\.\s*/gm, "").split(',')
    for (let i = 0; i< games.length; i++) {
        if (i === 9) {
            games[i] = games[i].slice(3)
        }
        const singleResult = await axios.get(`https://api.rawg.io/api/games?key=${apiKey}&page_size=1&search=${games[i]}`)
        resultArray.push(singleResult.data.results[0].id)
    }
    for (let j = 0; j < resultArray.length; j++) {
        const finalResult = await axios.get(`https://api.rawg.io/api/games/${resultArray[j]}?key=${apiKey}`)
        finalResultArray.push({
            id: finalResult.data.id,
            name: finalResult.data.name,
            rating: finalResult.data.metacritic,
            image: finalResult.data.background_image,
            description: finalResult.data.description,
        })
    }
    console.log(finalResultArray)
    return finalResultArray
}


module.exports = {getByGenre, getByTitle}