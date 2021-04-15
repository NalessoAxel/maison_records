import React from 'react'
import SwiperCore, { Autoplay, EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { sliderData } from './SliderData'


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
      
      
        
  {sliderData.map((slider, index) => (
    <SwiperSlide >
    <img key={index} src={slider} alt="" className="sliderImage"></img>
    </SwiperSlide>
  ))}

        
      
    </Swiper>
    <div className="sellContent">
      <h3>Do you want to sell your collection?</h3>
        <p>No probleme, come to the shop to discuss on how to do it.</p>
        <p>Can't come to the shop?<br></br> You can send an email here: lemail@maisonrecords.be</p>

    </div>
    </div>
  );
};

export default ImageSlider