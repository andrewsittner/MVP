import React, {useState} from "react";
import AllGames from "./AllGames";


const GameList = ({addUserGame, removeUserGame, userGames}) => {

    return (
        <div className="AllGames">
            <AllGames userGames={userGames} addUserGame={addUserGame} removeUserGame={removeUserGame}/>
        </div>
    )
}


export default GameList