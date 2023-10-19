import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Carousel = ({movies}) => {
    return (
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 3500,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
        >
            {
                movies.results && movies.results.map(movie =>
                    <SwiperSlide>
                        <img className={'backdrop-img'}  src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`} alt=""/>
                    </SwiperSlide>

                )
            }

        </Swiper>

    );
};

export default Carousel;
// <SwiperSlide>
//     <img className={'backdrop-img'} data-swiper-autoplay="2000" src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`} alt=""/>
// </SwiperSlide>