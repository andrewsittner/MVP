import React, {useState, useEffect} from "react";
import GameCarousel from "./GameCarousel";
import axios from "axios"
import './Css/ActionGame.css'

const ActionGames = ( {addUserGame, removeUserGame}) => {

    const [actionG, setActionG] = useState([])

    const getGames = () => {
        axios.get('http://localhost:3000/games/', {params : {genre: 'action'}})
        .then(data => setActionG(data.data))
        .catch(err => console.log(err, 'err in axios get games'))
    }

    useEffect(()=>{
        getGames()
    },[])
    return (
        <div>
        <h2 className="action">Action</h2>
        <GameCarousel removeUserGame={removeUserGame} addUserGame={addUserGame} id="gameCarousel" games={actionG}/>
        </div>
    )
}

export default ActionGames