import React from 'react'
import { Slide } from 'react-slideshow-image'


const proprietes = {
    duration: 2000,
    transitionDuration: 2000,
    infinite: true,
    indicators: false,
    arrows: false

}
const slideImages = [
    '../../img/sellimg1.jpg',
    '../../img/sellimg2.jpg',
    '../../img/sellimg3.jpg',
]

const Slideshow = () => {
    return (
        <>
        <div className="containerSlide">
            <Slide {...proprietes} easing="ease">
            <div className="each-slide">
            <div className="img-content" style={{'backgroundImage': `url(${slideImages[0]})`}}>
              
            </div>
          </div>
          <div className="each-slide">
            <div className="img-content" style={{'backgroundImage': `url(${slideImages[1]})`}}>
              
            </div>
          </div>
          <div className="each-slide">
            <div className="img-content" style={{'backgroundImage': `url(${slideImages[2]})`}}>
              
            </div>
          </div>
            </Slide>
        </div>
        </>
    )
}

export default Slideshow

