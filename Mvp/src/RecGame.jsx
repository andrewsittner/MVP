import React, { useState } from "react";
import Modal from 'react-modal';
import IndvidualGame from "./IndvidualGame";
import './Css/RecGame.css'



const RecGame = ({ game, addUserGame, removeUserGame, userGames }) => {
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
        <div className="innerRecGameCard">
            <div onClick={openModal} className="RecGameCard">
                <img className="RecgameImage" layout="position" src={game.image}></img>
                <div className="RecMiddle">
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

                <IndvidualGame userGames={userGames}removeUserGame={removeUserGame} addUserGame={addUserGame} game={game} />
               
            </Modal>
        </div >

    )


}

export default RecGame