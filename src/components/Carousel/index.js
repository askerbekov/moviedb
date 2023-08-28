import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Carousel = ({movies}) => {
    return (
        <Swiper className="mySwiper">
            {
                movies.results && movies.results.map(movie =>
                    <SwiperSlide>
                        <img className={'backdrop-img'} src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`} alt=""/>
                    </SwiperSlide>

                )
            }
        </Swiper>
    );
};

export default Carousel;