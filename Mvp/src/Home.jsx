import axios from "axios";
import React, { useEffect, useState } from "react";
import GameList from "./GameList";
import Recommendations from "./Recommendations";



const Home = ({ currentUserID }) => {

    const [userGames, setUserGames] = useState([])
    const [recommendedGames, setRecommendedGames] = useState([])
    const addUserGame = (game) => {
        setUserGames([...userGames, game])
    }
    const removeUserGame = value => {
        setUserGames(oldValues => {
            return oldValues.filter(game => game !== value)
        })
    }
    const handleGetNewRecommendations = () => {
        axios.post('http://localhost:3000/updateGames', {games : userGames, id: currentUserID })
        .then(data => getRecommendations())
        .catch(data => console.log(data))
    }
    const getUserGameData = () => {
        axios.post('http://localhost:3000/userGames', { id: currentUserID })
        .then(data => { setUserGames(data.data) })
        .catch(err => console.log(err, 'error when getting user games from database'))
    }
    const getRecommendations = () => {
        axios.post('http://localhost:3000/getRecommendations', {games: userGames})
        .then(data => setRecommendedGames(data.data))
        .catch(err => console.log(err, 'err in get Recommendations'))
    }
  
    useEffect(()=> {
        getUserGameData()
    },[])
    console.log(recommendedGames)

    return (
        <div>{recommendedGames.length > 1
            ?<Recommendations addUserGame={addUserGame} removeUserGame={removeUserGame} recommendedGames={recommendedGames}/>
            :<div>select more games to generate recommendations</div>
            }
            <button onClick={handleGetNewRecommendations}>Get New recommendations </button>
            <GameList addUserGame={addUserGame} removeUserGame={removeUserGame} />
        </div>
    )
}

export default Home