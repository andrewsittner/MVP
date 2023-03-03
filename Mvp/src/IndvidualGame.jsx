import React, { useState, useEffect } from "react";
import './Css/IndividualGame.css'

const IndvidualGame = ({ game, addUserGame, removeUserGame, userGames }) => {
    const [hasBeenSelected, setHasBeenSelected] = useState(false)

    const addGame = (game) => {
        if (!hasBeenSelected) {
            addUserGame(game)
            setHasBeenSelected(true)
        }
    }
    const removeGame = (game) => {
        removeUserGame(game)
        setHasBeenSelected(false)
    }

    const determineLiked = () => {
        const gameNames = userGames.map((game) => {
            return game.name
        })
        if (gameNames.includes(game.name)) setHasBeenSelected(true)
    }

    useEffect(() => {
        determineLiked()
    }, [])

    return (
        <div className="IndGame">
            <div className="modalText">
                <div className="TopBar">
                    <div className="GameName">{game.name}</div>
                    <div className="GameRating">Metacritic: {game.rating}/100</div>
                </div>
                <div className="GameDescription">
                    <div className="Description">Description:</div>
                    <div className="GameDescriptionText">{game.description.replace(/(<([^>]+)>)/ig, '')}</div>
                </div>
            </div>
            {!hasBeenSelected
                ? <button className="btn-green btn-primary btn-ghost-green btn-shine-green" onClick={() => { addGame(game) }}>Like Game</button>
                : <button className="btn-red btn-primary btn-ghost-red btn-shine-red" onClick={() => { removeGame(game) }}>Dislike Game</button>
            }

        </div>
    )
}

export default IndvidualGame