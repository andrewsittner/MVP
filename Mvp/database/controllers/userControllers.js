const mongoose = require('mongoose');

const db = mongoose.connection

const getUserGames = async (id) => {
    id = id.toString()
    const userGames =  await db.collection('users').findOne({email: id})
    return userGames
}

const updateUserGames = async (games, id) => {
    id = id.toString()
    const updateGames = await db.collection('users').updateOne({email: id}, { $set : {games: games}})
    return updateGames
}




module.exports = {getUserGames, updateUserGames};