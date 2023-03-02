import React, {useState} from "react";
import AllGames from "./AllGames";


const GameList = ({addUserGame, removeUserGame}) => {

    return (
        <div className="AllGames">
            <AllGames addUserGame={addUserGame} removeUserGame={removeUserGame}/>
        </div>
    )
}


export default GameList