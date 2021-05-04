import React from 'react'
import ReactPlayer from 'react-player'

import { Link,useParams} from "react-router-dom";

 const ReleaseDetails = (props) => {
   

    let { id } = useParams();
    const {products, onAdd} = props
    let countSuggestion = 0

    return (   
        <>
        {Object.entries(products).map((vinylInfos) => {
            
           if (vinylInfos[1]._id === id) {

            const detailsReferenceModel = ["label","size", "catNumber","format", "country","year","style","price","product_type","description"]

            return (
                <div className="contentWrapper">
                    <div className="releasePage">
                        <div className="release">
                            <div className="informations">
                                <div className="left">
                                    <img src={`${process.env.REACT_APP_API_URL}images/${vinylInfos[1].image}.png`}  alt="VinylImage"></img>
                                </div>
                                <div className="center">
                                                         
                                    {(vinylInfos[1].title == "default") ? (<></>) : ( <><h1> {vinylInfos[1].title} </h1></>)} 
                                   
                                    {(vinylInfos[1].artist_name == "default") ? (<></>) : (<><h2>{vinylInfos[1].artist_name}</h2></>)}
                                    
                                    <div id="releaseInfo">
                                         {detailsReferenceModel.map((element)=>{
                                         if (element == "product_type") {element = "type";
                                             vinylInfos[1][element] = vinylInfos[1]["product_type"]}
                                        else if (element == "catNumber") {element = "catNo";
                                             vinylInfos[1][element] = vinylInfos[1]["catNumber"]}
                                        else if (element == "price") {
                                             vinylInfos[1][element] = vinylInfos[1][element]}
                                             
                                        if (vinylInfos[1][element] != "default" && vinylInfos[1][element] != 1000){
                                        return(
                                            <p className = "releaseInfo" > {element} 
                                            <span>: {vinylInfos[1][element]} 
                                            </span></p>
                                            )}})}
                                    </div>
                                </div>

                                {(vinylInfos[1].product_type != 'Merch') ? (
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
                                ) : (<></>)}
                                              
                            </div>
                        </div> 
                            
                <div id="suggestion">
                        <h2>Suggestion</h2>
                        <div className="suggestionEntries">
                            {Object.entries(products).map((suggestion) => {
                                if (suggestion[1].style === vinylInfos[1].style) {
                                        countSuggestion++
                                        if(countSuggestion <= 21){ // show 20
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
                                                                    <span>{suggestion[1].title}</span>
                                                                    </span>
                                                                    <br/>
                                                                        <span>{suggestion[1].artist_name}</span>
                                                                        
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
