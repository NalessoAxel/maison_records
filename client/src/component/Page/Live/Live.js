import React from 'react'
import ReactPlayer from "react-player"

 const Live = () => {
    return (
        <div className="player">
            <h1>LIVE FROM MAISON RECORDS SHOP FOR THE NEXT HOUR WE HAVE LA PETITE SOEUR</h1>
            <ReactPlayer
                url="https://www.twitch.tv/maisonrecords_be"
                controls
            />
        </div>
        
    )
}
export default Live