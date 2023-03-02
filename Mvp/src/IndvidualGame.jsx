import React, { useState } from "react";

const IndvidualGame = ({ game, addUserGame, removeUserGame }) => {
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

    return (
        <div className="IndGame">
            <div className="modalText">
                <div>{game.name}</div>
                <button onClick={() => { addGame(game) }}>Add Game</button>
                <div>{game.rating}</div>
                <div className="gameDescription">{game.description.replace(/(<([^>]+)>)/ig, '')}</div>
                <button onClick={() => { removeGame(game)}}>Remove Game</button>
            </div>
        </div>
    )
}

export default IndvidualGame