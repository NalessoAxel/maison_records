import React from 'react'
import Merchandising from './Merchandising'



const Merch = (props) => {
    const { products, onAdd } = props

        return (
              <>
                <main products={products}>
                <div className="header-container">
                    <h2>Merch</h2>
                </div>
            <div className="container">
                <div className="entries">
                {products.map((product) =>(
                    <>
                    {product.product_type == "Merch" ? (
                        <>
                        <Merchandising key={product._id} product={product} onAdd={onAdd}></Merchandising> 
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



export default Merch