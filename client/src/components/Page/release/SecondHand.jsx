import React from 'react'
import Vinyl from './Vinyl'


const SecondHand = (props) => {
    const { products, onAdd, addProduct} = props


        return (
              <>
                <main products={products}>
                <div className="header-container">
                    <h2>Second hand</h2>
                </div>
            <div className="container">
                <div className="entries">
                {products.map((product) =>(
                    <>
                    {product.product_type == "Second hand" ? (
                        <>
                                <Vinyl key={product._id} product={product} onAdd={onAdd} addProduct={addProduct}></Vinyl> 
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



export default SecondHand