import React from "react";
import RecGame from './RecGame.jsx'
import './Css/Recommendations.css'

const Recommendations = ({ recommendedGames, removeUserGame, addUserGame, userGames }) => {

    const Recommended = recommendedGames.map((game) => {
        return (
            <div key={game.id} className="RecommendedGameCard">
                <RecGame userGames={userGames} addUserGame={addUserGame} removeUserGame={removeUserGame} key={game.id} game={game} />
            </div>
        )
    })


    return (
        <div className="RecommendedSection">{Recommended}</div>
    )
}


export default Recommendations