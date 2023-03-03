import React, { useState } from "react";
import ApiGames from "./ApiGames";
import './Css/allGames.css'
const AllGames = ({addUserGame, removeUserGame, userGames}) => {

    return (
        <div>
            <h2>Select Games you like to get new recommendations </h2>
            <ApiGames userGames={userGames} removeUserGame={removeUserGame} addUserGame={addUserGame} genre="Action" />
            <ApiGames userGames={userGames} removeUserGame={removeUserGame} addUserGame={addUserGame} genre="Adventure" />
            <ApiGames userGames={userGames} removeUserGame={removeUserGame} addUserGame={addUserGame} genre="RPG" />
            <ApiGames userGames={userGames} removeUserGame={removeUserGame} addUserGame={addUserGame} genre="Indie" />
            <ApiGames userGames={userGames} removeUserGame={removeUserGame} addUserGame={addUserGame} genre="Platformer" />
            <ApiGames userGames={userGames} removeUserGame={removeUserGame} addUserGame={addUserGame} genre="Shooter" />
        </div>
    )
}


export default AllGames