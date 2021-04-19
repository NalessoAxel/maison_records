import React, {useState, useEffect} from 'react'
import Vinyl from './Vinyl'
import axios from 'axios'

const New = (props) => {
    const { products, onAdd } = props

            
        return (
              <>
                <main products={products}>
                <div className="header-container">
                    <h2>NEW RELEASE</h2>
                </div>
            <div className="container">
                <div className="entries">
                {products.map((product) =>(
                    <Vinyl key={product._id} product={product} onAdd={onAdd} >

                    </Vinyl>
                ))}
                </div>
            </div>
            </main>
            </>
            )
        
}



export default New