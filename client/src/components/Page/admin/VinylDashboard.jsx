import React from 'react'
import axios from 'axios'
import AdminHeader from './AdminHeader'

const VinylDashboard = (props) => {
    const { products } = props
    console.log(products, "produit");

    const deleteVinyl = async (id) =>{
        console.log(id)
        
        try{
            const res = await axios({
                method:"delete",
                url: `${process.env.REACT_APP_API_URL}/api/vinyl/`+id,
                withCredentials: true
            })
            
        }catch (err){
            console.log("nop")
        }
    }

    return (
        <>
           <AdminHeader />
            <div className="boardVinylBox">
            <div>
                    <h4>New</h4>
                    <table>
                        <tr className="tr0">
                            <td>Title</td>
                            <td>Artist Name</td>
                            <td>Year</td>
                            <td>Label</td>
                            <td>Format</td>
                            <td>CatNumber</td>
                            <td>Country</td> 
                            <td>Style</td> 
                            <td>Price</td> 
                            <td>Quantity</td>
                            <td>Delete ?</td>

                        </tr>
                        
                    {products.map((product)=>(
                    <tr>
                        {product.product_type == "New" ? (
                            <>
                            <td>{product.title}</td>    
                            <td>{product.artist_name}</td>    
                            <td>{product.year}</td> 
                            <td>{product.label}</td>   
                            <td>{product.format}</td>
                            <td>{product.catNumber}</td>
                            <td>{product.country}</td>
                            <td>{product.style}</td>
                            <td>{product.price}€</td>
                            <td>{product.quantity}</td>
                            <td><button onClick={()=>{deleteVinyl(product._id)}}>X</button></td>
                            
                            </>
                        ) : (
                            <>
                            </>
                        )}
                    </tr>
                        ))}
                    </table>
                </div>
              

                <div>
                    <h4>Second hand</h4>
                    <table>
                        <tr>
                            <td>Title</td>
                            <td>Artist Name</td>
                            <td>Year</td>
                            <td>Label</td>
                            <td>Format</td>
                            <td>catNumber</td>
                            <td>country</td> 
                            <td>style</td> 
                            <td>price</td> 
                            <td>quantity</td>
                            <td>Delete ?</td>
                        </tr>
                        
                    {products.map((product)=>(
                    <tr>
                        {product.product_type == "Second hand" ? (
                            <>
                            <td>{product.title}</td>    
                            <td>{product.artist_name}</td>    
                            <td>{product.year}</td> 
                            <td>{product.label}</td>   
                            <td>{product.format}</td>
                            <td>{product.catNumber}</td>
                            <td>{product.country}</td>
                            <td>{product.style}</td>
                            <td>{product.price}€</td>
                            <td>{product.quantity}</td>
                            <td><button onClick={()=>{deleteVinyl(product._id)}}>X</button></td>
                            </>
                        ) : (
                            <>
                            </>
                        )}
                    </tr>
                        ))}
                    </table>
                </div>
            </div>
        </>
    )




}

export default VinylDashboard