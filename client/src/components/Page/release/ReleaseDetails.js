import React, {useState, useEffect} from 'react'
import ReactPlayer from 'react-player'
import Imgrelease from '../../../img/test-vinyl1.jpg'
import {Link, useParams} from "react-router-dom";
import axios from 'axios'


 const ReleaseDetails = () => {
    
    let { id } = useParams();
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
    console.log(vinylInfos);
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
                                        <p>
                                            <span>A1 - Bright Light Fading</span>
                                        </p>
                                    <ReactPlayer
                                    config={{ file: { attributes: { controlsList: 'nodownload' } } }}
                                           url={`${process.env.REACT_APP_API_URL}songs/${vinylInfos.audio}.mp3`}
                                           width="400px"
                                           height="50px"
                                           playing={false}
                                           controls={true}
                                    />
                                        <p>
                                            <span>A1 - Bright Light Fading</span>
                                        </p>
                                    <ReactPlayer
                                    config={{ file: { attributes: { controlsList: 'nodownload' } } }}
                                           url="https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_700KB.mp3"
                                           width="400px"
                                           height="50px"
                                           playing={false}
                                           controls={true}
                                    />
                                        <p>
                                            <span>A1 - Bright Light Fading</span>
                                        </p>
                                    <ReactPlayer
                                    config={{ file: { attributes: { controlsList: 'nodownload' } } }}
                                           url="https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_700KB.mp3"
                                           width="400px"
                                           height="50px"
                                           playing={false}
                                           controls={true}
                                    />
                                        <p>
                                            <span>A1 - Bright Light Fading</span>
                                        </p>
                                    <ReactPlayer
                                    config={{ file: { attributes: { controlsList: 'nodownload' } } }}
                                           url="https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_700KB.mp3"
                                           width="400px"
                                           height="50px"
                                           playing={false}
                                           controls={true}
                                    />
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
                        <div className="tile">
                        <div className="hover-effect">
                            <img src={Imgrelease} alt=""></img>
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
                                        <Link to='/ReleaseDetails'>
                                        <button className="showMore" >Show More</button>
                                        </Link>
                                        <button className="addToCart">Add to cart</button>
                                    </span>
                                    </div>
                        </div>
                        <div className="tile">
                        <div className="hover-effect">
                            <img src={Imgrelease} alt=""></img>
                            <div className="overlay">
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
                                        <Link to='/ReleaseDetails'>
                                        <button className="showMore" >Show More</button>
                                        </Link>
                                        <button className="addToCart">Add to cart</button>
                                    </span>
                                    </div>
                        </div>
                        <div className="tile">
                        <div className="hover-effect">
                            <img src={Imgrelease} alt=""></img>
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
                                        <Link to='/ReleaseDetails'>
                                        <button className="showMore" >Show More</button>
                                        </Link>
                                        <button className="addToCart">Add to cart</button>
                                    </span>
                                    </div>
                        </div>
                        <div className="tile">
                        <div className="hover-effect">
                            <img src={Imgrelease} alt=""></img>
                            <div className="overlay">
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
                                        <Link to='/ReleaseDetails'>
                                        <button className="showMore" >Show More</button>
                                        </Link>
                                        <button className="addToCart">Add to cart</button>
                                    </span>
                                    </div>
                        </div>
                        <div className="tile">
                        <div className="hover-effect">
                            <img src={Imgrelease} alt=""></img>
                            <div className="overlay">
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
                                        <Link to='/ReleaseDetails'>
                                        <button className="showMore" >Show More</button>
                                        </Link>
                                        <button className="addToCart">Add to cart</button>
                                    </span>
                                    </div>
                        </div>
                        <div className="tile">
                        <div className="hover-effect">
                            <img src={Imgrelease} alt=""></img>
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
                                        <Link to='/ReleaseDetails'>
                                        <button className="showMore" >Show More</button>
                                        </Link>
                                        <button className="addToCart">Add to cart</button>
                                    </span>
                                    </div>
                        </div>
                        
                    </div>
                </div>
                </div>
                
            </div>
         
        </>
    )
}
export default ReleaseDetails
