import React from 'react';
import ImageSlider from './slide/ImageSlider';
import { sliderData } from './slide/SliderData';

const SellCollection = () => {
    return (
        <>
       
            <ImageSlider key={sliderData} slides={sliderData} />
            
        </>
    );
}

export default SellCollection;

