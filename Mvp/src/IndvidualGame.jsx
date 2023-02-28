import React from "react";

const IndvidualGame = ({ game }) => {
    let backgroundImageStyle = `background-image: url(${game.image}); height: 200px; width: 400px; border: 1px solid black;`
    return (
        <div className="IndGame">
            <div>{game.name}</div>
            <div>{game.rating}</div>
            <div className="gameDescription">{game.description.replace(/(<([^>]+)>)/ig, '')}</div>
        </div>
    )
}

export default IndvidualGame