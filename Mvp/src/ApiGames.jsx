import React, {useState, useEffect} from "react";
import GameCarousel from "./GameCarousel";
import axios from "axios"
import './Css/ActionGame.css'

const ApiGames = ( {addUserGame, removeUserGame, userGames, genre}) => {

    const [games, setGames] = useState([])

    const getGames = () => {
        axios.get('http://localhost:3000/games/', {params : {genre: genre.toLowerCase()}})
        .then(data => setGames(data.data))
        .catch(err => console.log(err, 'err in axios get games'))
    }

    useEffect(()=>{
        getGames()
    },[])
    return (
        <div>
        <h2 className="action">{genre}</h2>
        {games.length > 0
        ?  <GameCarousel userGames={userGames} removeUserGame={removeUserGame} addUserGame={addUserGame} id="gameCarousel" games={games}/>
        :  <div><p>l</p><p>o</p><p>a</p><p>d</p><p>i</p><p>n</p><p>g</p></div>
        }
        
        </div>
    )
}

export default ApiGames