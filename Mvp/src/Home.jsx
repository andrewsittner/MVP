import axios from "axios";
import React, { useEffect, useState } from "react";
import GameList from "./GameList";
import Recommendations from "./Recommendations";
import UserGamesDisplay from './UserGamesDisplay'
import './Css/Home.css'



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
        setRecommendedGames([])
        axios.post('http://localhost:3000/updateGames', { games: userGames, id: currentUserID })
            .then(data => getRecommendations())
            .catch(data => console.log(data))
    }
    const getUserGameData = () => {
        axios.post('http://localhost:3000/userGames', { id: currentUserID })
            .then(data => {
                setUserGames(data.data)
            })
            .catch(err => console.log(err, 'error when getting user games from database'))
    }
    const getRecommendations = () => {
        axios.post('http://localhost:3000/getRecommendations', { games: userGames })
            .then(data => setRecommendedGames(data.data))
            .catch(err => console.log(err, 'err in get Recommendations'))
    }

    useEffect(() => {
        getUserGameData()
        getRecommendations()
    }, [])

    return (
        <div>
            <h2>Recommended Games: </h2>
            {recommendedGames.length > 0
                ? <>
                    <Recommendations addUserGame={addUserGame} userGames={userGames} removeUserGame={removeUserGame} recommendedGames={recommendedGames} />
                    <button className="glow-on-hover" hover="true" type="button" onClick={handleGetNewRecommendations}>Generate New recommendations </button>
                    
                </>
                : <div><p>l</p><p>o</p><p>a</p><p>d</p><p>i</p><p>n</p><p>g</p></div>
              
            }

            {userGames.length > 0
                ? <div className="likedGamesBlock">
                    <h2>Your Liked Games:</h2><UserGamesDisplay  addUserGame={addUserGame} removeUserGame={removeUserGame} userGames={userGames} />
                </div>
                : <h2>No Liked Games Found</h2>
            }


            <GameList userGames={userGames} addUserGame={addUserGame} removeUserGame={removeUserGame} />
        </div>
    )
}

export default Home