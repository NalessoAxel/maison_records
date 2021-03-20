import React from 'react'
import ReactPlayer from 'react-player'
import Imgrelease from '../../../img/test-vinyl1.jpg'

 const ReleaseDetails = () => {
    return (
        <>
            <div className="contentWrapper">
                <div className="releasePage">
                    <div className="release">
                        <div className="informations">
                            <div className="left">
                                <img src={Imgrelease} alt=""></img>
                            </div>
                            <div className="center">
                                <h1>Various Artists</h1>
                                <h2>Soma Dubs vol.4</h2>
                                <div id="releaseInfo">
                                    <p className="releaseInfo">Label:
                                        <span>Soma</span>
                                    </p>
                                    <p className="releaseInfo">Catno:
                                        <span>Soma176</span>
                                    </p>
                                    <p className="releaseInfo">Formats:
                                        <span>1x12"</span>
                                    </p>
                                    <p className="releaseInfo">Country:
                                        <span>Uk</span>
                                    </p>
                                    <p className="releaseInfo">Release Date: 
                                        <span>2005</span>
                                    </p>
                                    <p className="releaseInfo">Style: 
                                        <span>House</span>
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
                                       url="https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_700KB.mp3"
                                       width="400px"
                                       height="50px"
                                       playing={false}
                                       controls={true}
                                       outline="none"
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
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    )
}
export default ReleaseDetails
