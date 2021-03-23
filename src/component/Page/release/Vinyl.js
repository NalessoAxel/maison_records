import React from 'react'
import { Link } from 'react-router-dom'

const Vinyl = (props) => {
    const {vinyl, onAdd} = props;

    return (
        <>
                        <div className="tile">
                            <div className="hover-effect">
                                <img src={vinyl.image} alt={vinyl.name}></img>
                                    <div class="overlay">
                                        <h2>Description of the records when hove the img</h2>
                                    </div>
                                    <div className="infos-record">
                                    <div className="artistAndTitlePrice">
                                        <span className="artistName">
                                            <span>{vinyl.title}</span>
                                            </span>
                                        <p>
                                        <span>
                                            <span>{vinyl.subTitle}</span>
                                        </span>   
                                        </p>
                                        <p>
                                        <span>
                                            <span>{vinyl.price}</span>
                                        </span>  
                                    </p>
                                </div>
                            <span className="button">
                                        <Link to='/ReleaseDetails'>
                                        <button className="showMore" >Show More</button>
                                        </Link>
                                        <button onClick={onAdd} className="addToCart">Add to cart</button>
                                    </span>
                            </div>
                        </div>
                    </div>
                
            
        </>
    )
}
export default Vinyl