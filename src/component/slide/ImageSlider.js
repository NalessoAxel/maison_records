import React from 'react'
import SwiperCore, { Autoplay, EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/swiper.scss';
import 'swiper/components/effect-fade/effect-fade.scss';


SwiperCore.use([Autoplay, EffectFade]);

const ImageSlider = () => {
 
  return (
    <div className="container-sell">
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{ delay: 2000 }}
      loop={true}
      effect="fade"
    >
      
      <SwiperSlide>
        <img className="sliderImage" src="https://scontent-bru2-1.xx.fbcdn.net/v/t1.0-9/152579483_241101897604531_661489331152485831_o.jpg?_nc_cat=107&ccb=1-3&_nc_sid=a26aad&_nc_ohc=pvFL8TuGCP4AX-eYEOB&_nc_ht=scontent-bru2-1.xx&oh=2e0b54ccc7029ff9d83d3c88020bd535&oe=607972F0" alt=""></img>
      </SwiperSlide>
      <SwiperSlide>
        <img className="sliderImage" src="https://scontent-bru2-1.xx.fbcdn.net/v/t1.0-9/152354232_241101360937918_2025517960655615356_o.jpg?_nc_cat=109&ccb=1-3&_nc_sid=a26aad&_nc_ohc=-OewOplq5rYAX8HcnT5&_nc_ht=scontent-bru2-1.xx&oh=30b9d41eef548226447cdee23574a8a5&oe=607950AB" alt=""></img>
      </SwiperSlide>
      <SwiperSlide>
        <img className="sliderImage" src="https://scontent-bru2-1.xx.fbcdn.net/v/t1.0-9/153238337_241097394271648_1901766266912851776_o.jpg?_nc_cat=108&ccb=1-3&_nc_sid=a26aad&_nc_ohc=rMZWQ_61uOwAX-c2pZP&_nc_oc=AQnytR4k98YPsnW9kLFQ2XgUJHslEfhpPsqPl6TP4YF8aVfpvtqGg1LTkC1dH9Q7kRY&_nc_ht=scontent-bru2-1.xx&oh=cfff101dd5d50bccf165a0f406d67d8f&oe=60780389" alt=""></img>
      </SwiperSlide>
      
        
      
    </Swiper>
    </div>
  );
};

export default ImageSlider