import React, { useState } from "react";
import IndvidualGame from './IndvidualGame'
import { motion } from 'framer-motion'
import './Css/Game.css'



const Game = ({ game }) => {
    const [isOpen, setIsOpen] = useState(false)


    return (
        <motion.div
            transition={{ layout: { duration: 1, type: "spring" } }}
            onClick={() => { setIsOpen(!isOpen) }}
            layout
            className="card"
        >

            {isOpen
                ? <motion.img layout="position" src={game.image}></motion.img>
                : <motion.div className="ExpandedCard">
                    <motion.img layout="position" src={game.image}></motion.img>
                    <p>
                        {game.description.replace(/(<([^>]+)>)/ig, '')}
                    </p>
                </motion.div>
            }
        </motion.div>
    )
}

export default Game