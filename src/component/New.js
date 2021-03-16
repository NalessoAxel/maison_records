import React from 'react'
import ImgVinyl from '../img/test-vinyl1.jpg'
const New = () => {
    return(
        <>
            <div className="container">
                <div className="playlist">
                    <div className="entries">
                        <div className="tile">
                            <div className="image">
                            <img src={ImgVinyl}></img>
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
                        <div className="tile">
                            <div className="image">
                            <img src={ImgVinyl}></img>
                            </div>
                            <div className="artistAndTitlePrice">
                                <span className="artistName">
                                    <span>Various Artist</span>
                                </span>
                                <div className="titleAndBasket">
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
                        <div className="tile">
                            <div className="image">
                            <img src={ImgVinyl}></img>
                            </div>
                            <div className="artistAndTitlePrice">
                                <span className="artistName">
                                    <span>Various Artist</span>
                                </span>
                                <div className="titleAndBasket">
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
                        <div className="tile">
                            <div className="image">
                            <img src={ImgVinyl}></img>
                            </div>
                            <div className="artistAndTitlePrice">
                                <span className="artistName">
                                    <span>Various Artist</span>
                                </span>
                                <div className="titleAndBasket">
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
        </>
    )
}

export default New