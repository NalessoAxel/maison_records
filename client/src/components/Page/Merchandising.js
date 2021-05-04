import React from 'react'
import {BrowserRouter as Router,Route, Link } from 'react-router-dom'

const Merchandising = (props) => {
    const {product, onAdd} = props;
    
    return (
        <>
                        <div className="tile">
                            <div className="hover-effect">
                                < img src = {`${process.env.REACT_APP_API_URL}images/${product.image}.png`} alt="VinylImage"></img>
                                    <div class="overlay">
                                        <h2>{product.description}</h2>
                                    </div>
                                    <div className="infos-record">
                                    <div className="artistAndTitlePrice">
                                        <span className="artistName">
                                            <span>{product.title}</span>
                                            </span>
                                        <p>
                                        <span>
                                            <span></span>
                                        </span>   
                                        </p>
                                        <p>
                                        <span>
                                            <span>{product.price} €</span>
                                        </span>  
                                    </p>
                                </div>
                                            
                            <span className="button">
                                        <Link to = {'/ReleaseDetails/'+ product._id}> 
                                        <button className="showMore">Show More</button>
                                        
                                        </Link>
                                        <button onClick={() => onAdd(product)} className="addToCart">Add to cart</button>
                                    </span>
                            </div>
                        </div>
                    </div>
                
            
        </>
    )
}
export default Merchandising