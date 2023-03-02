import React, { useState } from "react";
import ActionGames from "./ActionGames";
import './Css/allGames.css'
const AllGames = ({addUserGame, removeUserGame}) => {

    return (
        <div>
            <h2>Select Games you've played to get new recommendations </h2>
            <ActionGames removeUserGame={removeUserGame} addUserGame={addUserGame} />
        </div>
    )
}


export default AllGames