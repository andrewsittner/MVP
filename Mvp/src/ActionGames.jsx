import React, {useState, useEffect} from "react";
import GameCarousel from "./GameCarousel";
import axios from "axios"

const ActionGames = () => {

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
        <GameCarousel games={actionG}/>
        </div>
    )
}

export default ActionGames