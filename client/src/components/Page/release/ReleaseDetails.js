import React, {useState, useEffect} from 'react'
import ReactPlayer from 'react-player'
import Imgrelease from '../../../img/test-vinyl1.jpg'
import {Link, useParams} from "react-router-dom";
import axios from 'axios'


 const ReleaseDetails = (props) => {
    
    let { id } = useParams();
    const {products, onAdd} = props

    const [vinylInfos, setVinylInfos] = useState('')
    const [loading, setLoading] = useState(true)
    
    
   useEffect(()=>{
      const getVinylInfos = async () => {
          try{
             const res = await axios({
             method : 'get',
             url: `${process.env.REACT_APP_API_URL}api/vinyl/`+ id,
             withCredentials: true,
           })
            setVinylInfos(res.data)
            setLoading(false)
            } catch (err) {
                console.log(err)
            }
        }
        getVinylInfos()
    }, [])
   
    return (   
        <>
            <div className="contentWrapper">
                <div className="releasePage">
                    <div className="release">
                        <div className="informations">
                            
                                {(!loading)?(
                                    <>

                                    <div className="left">
                                        <img src={`${process.env.REACT_APP_API_URL}images/${vinylInfos.image}.png`}  alt="VinylImage"></img>
                                    </div>
                                    <div className="center">                                  
                                        <h1>{vinylInfos.artist_name}</h1>
                                        <h2>{vinylInfos.title}</h2>
                                        <div id="releaseInfo">
                                            <p className="releaseInfo">Label:
                                                <span>{vinylInfos.label}</span>
                                            </p>
                                            <p className="releaseInfo">Catno:
                                                <span>{vinylInfos.catNumber}</span>
                                            </p>
                                            <p className="releaseInfo">Format:
                                                <span>{vinylInfos.format}</span>
                                            </p>
                                            <p className="releaseInfo">Country:
                                                <span>{vinylInfos.country}</span>
                                            </p>
                                            <p className="releaseInfo">Release Date: 
                                                <span>{vinylInfos.year }</span>
                                            </p>
                                            <p className="releaseInfo">Style: 
                                                <span>{vinylInfos.style}</span>
                                            </p>
                                            <p className="releaseInfo">Price: 
                                                <span>{vinylInfos.price}€</span>
                                            </p>
                                            <p className="releaseInfo">Type: 
                                                <span>{vinylInfos.product_type}</span>
                                            </p>
                                            <p className="releaseInfo">Description: 
                                                <span>{vinylInfos.description}</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="right">
                                    <h1>Tracklist</h1>
                                    <div className="audioPlayer">
                                        
                                {Object.entries(vinylInfos.audio).map((preview)=> {  
                                    // console.log(Object.entries(vinylInfos.audio), "object in array");                    
                                //^^^^ object.entries = transform an object in array
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
                                    </>
                                ):(
                                    <h3>Loading...</h3>
                                )}
                        </div>
                    </div>
                <div id="suggestion">
                    <h2>Suggestion</h2>
                    <div className="suggestionEntries">
                        {/* {console.log(Object.entries(products))} */}
                        {Object.entries(products).map((suggestion) => {
                            if (suggestion[1].style === vinylInfos.style) {
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
                                                <p>
                                                    <span>
                                                        <span>{suggestion[1].title}</span>
                                                    </span>   
                                                </p>
                                                <p>
                                                    <span>
                                                        <span>{suggestion[1].price}</span>
                                                    </span>  
                                                </p>
                                            </div>
                                            <span className="button">
                    
                                        <Link to = {'/ReleaseDetails/'+ suggestion[1]._id}> 
                                        <button className="showMore" >Show More</button>
                                        {/* <button className="showMore" onClick={()=> window.location=suggestion[1]._id}>Show More</button> */}
                                                                          
                                        </Link>
                                        <button onClick={() => onAdd(suggestion[1])} className="addToCart">Add to cart</button>
                                    </span>
                                    </div>
                        </div>
                                )
                            }
                        })}
                       
                       
                       
                        
                    </div>
                </div>
                </div>
                
            </div>
         
        </>
    )
}
export default ReleaseDetails
