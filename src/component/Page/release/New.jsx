import React from 'react'
import Vinyl from './Vinyl'

const New = (props) => {
    const { vinyl, onAdd } = props
    console.log('dans newait:', vinyl)
    return(
        <>
            <main vinyls={vinyl}>
                <div className="header-container">
                    <h2>NEW RELEASE</h2>
                </div>
            <div className="container">
                <div className="entries">
                {vinyl.map((vinyl) =>(
                    <Vinyl key={vinyl.id} vinyl={vinyl} onAdd={onAdd}></Vinyl>
                ))}
                </div>
            </div>
        </main>
    </>
    )
}

export default New