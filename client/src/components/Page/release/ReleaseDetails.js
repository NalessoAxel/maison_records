import React from 'react'
import ReactPlayer from 'react-player'

import { Link,useParams} from "react-router-dom";

 const ReleaseDetails = (props) => {
    let countSuggestion = 0
    let { id } = useParams();
    const {products, onAdd} = props

    return (   
        <>
        {Object.entries(products).map((vinylInfos) => {
         if (vinylInfos[1]._id === id) {
            return (
                <div className="contentWrapper">
                    <div className="releasePage">
                        <div className="release">
                            <div className="informations">
                                <div className="left">
                                    <img src={`${process.env.REACT_APP_API_URL}images/${vinylInfos[1].image}.png`}  alt="VinylImage"></img>
                                </div>
                                <div className="center">                                  
                                    <h1>{vinylInfos[1].artist_name}</h1>
                                    <h2>{vinylInfos[1].title}</h2>
                                    <div id="releaseInfo">
                                        <p className="releaseInfo">Label:
                                            <span>{vinylInfos[1].label}</span>
                                        </p>
                                        <p className="releaseInfo">Catno:
                                            <span>{vinylInfos[1].catNumber}</span>
                                        </p>
                                        <p className="releaseInfo">Format:
                                            <span>{vinylInfos[1].format}</span>
                                        </p>
                                        <p className="releaseInfo">Country:
                                            <span>{vinylInfos[1].country}</span>
                                        </p>
                                        <p className="releaseInfo">Release Date: 
                                            <span>{vinylInfos[1].year }</span>
                                        </p>
                                        <p className="releaseInfo">Style: 
                                            <span>{vinylInfos[1].style}</span>
                                        </p>
                                        <p className="releaseInfo">Price: 
                                            <span>{vinylInfos[1].price}€</span>
                                        </p>
                                        <p className="releaseInfo">Type: 
                                            <span>{vinylInfos[1].product_type}</span>
                                        </p>
                                        <p className="releaseInfo">Description: 
                                            <span>{vinylInfos[1].description}</span>
                                        </p>
                                    </div>
                                </div>
                                    <div className="right">
                                        <h1>Tracklist</h1>
                                        <div className="audioPlayer">
                                        {Object.entries(vinylInfos[1].audio).map((preview)=> {  
                                            if (preview[1].path !== "default") {
                                                return (
                                                    <>
                                                    <span>{preview[1].name}</span>
                                                    <ReactPlayer
                                                            config={{ file: { attributes: { controlsList: 'nodownload' } } }}
                                                            url = {`${process.env.REACT_APP_API_URL}songs/${preview[1].path}.mp3`}
                                                            width="400px"
                                                            height="50px"
                                                            playing={false}
                                                            controls={true}       
                                                    />
                                                    </>
                                                )
                                            }}) 
                                        }
                                        </div>
                                    </div>           
                            </div>
                        </div> 
                            
                <div id="suggestion">
                        <h2>Suggestion</h2>
                        <div className="suggestionEntries">
                            {Object.entries(products).map((suggestion) => {
                                countSuggestion++
                                console.log(countSuggestion)
                                if(countSuggestion <= 100 ){
                                    
                                    if (suggestion[1].style === vinylInfos[1].style) {
        
                                        if (suggestion[1]._id !== vinylInfos[1]._id) {
                                            return (
                                                <div className="tile">
                                                    <div className="hover-effect">
                                                    <img src={`${process.env.REACT_APP_API_URL}images/${suggestion[1].image}.png`}  alt="VinylImage"></img>
                                                            <div className="overlay">
                                                                <h2> {suggestion[1].description} </h2>
                                                            </div>
                                                        </div>
                                                        <div className="infos-record">
                                                            <div className="artistAndTitlePrice">
                                                                <span className="artistName">
                                                                    <span>{suggestion[1].artist_name}</span>
                                                                </span>
                                                                <br/>
                                                                    <span>{suggestion[1].title}</span>
                                                                <br/>
                                                                    <span>{suggestion[1].price}€</span>
                                                            </div>
                                                        <span className="button">
                                                            <Link to = {'/ReleaseDetails/'+ suggestion[1]._id}> 
                                                            <button className="showMore" >Show More</button>                                                                         
                                                            </Link>
                                                            <button onClick={() => onAdd(suggestion[1])} className="addToCart">Add to cart</button>
                                                        </span>
                                                    </div>
                                                </div>
                                                )               
                                        }
                                    }
                                }
                                    })}        
                                </div>
                            </div>
                        </div>   
                    </div>
            )
         }
        })}       
        </>
)}

export default ReleaseDetails
