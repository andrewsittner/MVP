import React from "react"
import "swiper/css";
import "swiper/css/effect-cards";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper";
import Game from './Game'

const UserGamesDisplay = ({ userGames, addUserGame, removeUserGame }) => {

    const mappedUserGames = userGames.map((game) => {
        return( 
        <SwiperSlide className="UserSwiperSlide">
            <div className="UserGameCard">
            <Game key={game.id} userGames={userGames} addUserGame={addUserGame} removeUserGame={removeUserGame} game={game}/>
            </div>
        </SwiperSlide>
        )
    })

    return (
        <>
            <Swiper
                effect={"cards"}
                grabCursor={true}
                modules={[EffectCards]}
                className="mySwiper"
            >
                {mappedUserGames}
            </Swiper>
        </>
    )
}


export default UserGamesDisplay 