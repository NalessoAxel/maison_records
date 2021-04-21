import React from 'react'
import Vinyl from './Vinyl'



const New = (props) => {
    const { products, onAdd } = props

            
        return (
              <>
                <main products={products}>
                <div className="header-container">
                    <h2>NEW</h2>
                </div>
            <div className="container">
                <div className="entries">
                {products.map((product) =>(
                    <>
                    {product.product_type == "New" ? (
                        <>
                        <Vinyl key={product._id} product={product} onAdd={onAdd}></Vinyl> 
                        </>
                        ) : (
                        <>
                        </>
                    )}
                </>
                ))}
                </div>
            </div>
            </main>
            </>
            )
        
}



export default New