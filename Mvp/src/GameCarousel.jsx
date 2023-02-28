import React, { useState } from "react";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Game from './Game.jsx'

import './Css/GameCarousel.css'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
const GameCarousel = ({ games }) => {


    const gamesDisplayed = games.map((game) => {
        return (
            <SwiperSlide className="item" data-swiper-autoplay="1000" key={game.id}>
                <Game key={game.id} game={game} />
            </SwiperSlide>
        )
    })
    return (

        <Swiper
            slidesPerView={6}
            spaceBetween={30}
            loop={true}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            
            autoplay={{
                delay: 500,
                pauseOnMouseEnter: true,
                disableOnInteraction: false
            }}
            waitForTransition={true}

            speed={1500}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
        >
            {gamesDisplayed}
        </Swiper>
    )
}

export default GameCarousel

