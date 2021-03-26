import React from 'react'
import ImgVinyl1 from '../../../img/sellimg1.jpg'

const SecondHand = () => {
    return(
        <>
        <main>
        <div className="header-container">
            <h2>Second hand</h2>
        </div>
            <div className="container">
                <div className="playlist">
                    <div className="entries">
                        <div className="tile">
                            <div className="hover-effect">
                            <img src={ImgVinyl1} alt=""></img>
                            <div class="overlay">
                                <h2>Description of the records when hove the img</h2>
                                </div>
                            </div>
                            <div className="infos-record">
                            <div className="artistAndTitlePrice">
                                <span className="artistName">
                                    <span>Various Artist</span>
                                </span>
                                    <p>
                                        <span>
                                            <span>Soma Dubs Vol.4</span>
                                        </span>   
                                    </p>
                                    <p>
                                        <span>
                                            <span>20€</span>
                                        </span>  
                                    </p>
                            </div>
                            <span className="button">
                                        <button className="showMore">Show More</button>
                                        <button className="addToCart">Add to cart</button>
                                    </span>
                                    </div>
                        </div>
                        </div>
                </div>
            </div>
            </main>
        </>
    )
}

export default SecondHand