import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import img2 from './images/restauranfood.jpg';
import {Link as RouterLink} from 'react-router-dom';
function Hero(){
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);

    const handleSlideChange = (swiper) => {
      setActiveSlideIndex(swiper.activeIndex);
    };
    return(
        <div className="reservation-container" id='Home'>
            <div className="restaurant-info">
                <h1>Little Lemon</h1>
                <h3>Chicago</h3>
                <br/>
                <pre>We are a family owned </pre>
                <pre>Mediterranean restaurant, focused on traditional recipes</pre>
                <pre>served with a modern twist.</pre>
                <RouterLink to="/booking" href='#' className='btn btn-warning'>Book Reservation</RouterLink>
            </div>
            <div className="restaurant-image col-12 lg col-6" style={{ backgroundImage: `url(${activeSlideIndex === 0 ? img2 : img2})`}} >
                    <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
                onSlideChange={(swiper) => handleSlideChange(swiper)}
            >
                <SwiperSlide>
                <img src={img2} alt='Little Lemon' />
                </SwiperSlide>
                <SwiperSlide>
                <img src={img2} alt='Little Lemon' />
                </SwiperSlide>
                <SwiperSlide>
                <img src={img2} alt='Little Lemon' />
                </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default Hero;