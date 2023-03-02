import React, { useState, useEffect } from "react";
import IndvidualGame from './IndvidualGame'
import Modal from 'react-modal';
import './Css/Game.css'



const Game = ({ game, addUserGame, removeUserGame}) => {
    const [modalIsOpen, setModal] = useState(false);
    if (process.env.NODE_ENV !== 'test') Modal.setAppElement('#root');

    let openModal = () => {
        setModal(true);
        root.style.setProperty("--test", `url(${game.image})`);
    }
    let closeModal = () => {
        setModal(false);
    }
    var root = document.querySelector(':root');



    return (
        <div>
            <div onClick={openModal} className="GameCard">
                <img className="gameImage" layout="position" src={game.image}></img>
                <div className="middle">
                    <div className="text">{game.name}</div>
                </div>
            </div >
            <Modal
                className="GameModal"
                overlayClassName={{
                    base: "overlay-base",
                    afterOpen: "overlay-after",
                    beforeClose: "overlay-before"
                }}
                isOpen={modalIsOpen}
                onRequestClose={() => { setModal(false) }}>

                <IndvidualGame removeUserGame={removeUserGame} addUserGame={addUserGame} game={game} />
                <button id="GameClose" onClick={() => { setModal(false) }}>X</button>
            </Modal>
        </div >
    )
}

export default Game





// root.style.setProperty('--variable', 'lightblue');
// :root {
//   --main-bg-color: coral;
// }

// #div1 {
//   background-color: var(--main-bg-color);
// }