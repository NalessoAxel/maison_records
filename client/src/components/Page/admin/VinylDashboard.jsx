import React,{ useState} from 'react'
import AdminHeader from './AdminHeader'
import Modal from 'react-modal'
import axios from 'axios'
import ModalVinylForm from './ModalVinylForm'


const VinylDashboard = (props) => {

    const [modalIsOpen, setModalIsOpen] = useState(false)


    const { products } = props
    console.log(products, "produit");

    const deleteVinyl = async (id) =>{
        console.log(id)
        
        try{
            const res = await axios({
                method:"delete",
                url: `${process.env.REACT_APP_API_URL}api/vinyl/`+id,
                withCredentials: true
            })
            window.location = ""
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
                            <td>EDIT</td>
                            <td>Quantity</td>
                            <td>Delete</td>

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
                            <td>
                                
                            <button onClick={() => setModalIsOpen(true) }>Edit</button>
                            <Modal 
                            style={{
                                overlay: {
                                    backgroundColor: 'rgba(0,0,0,0.5)',
                                    position: 'absolute',
                                    top: 0,
                                    right: 0,
                                    left: 0,
                                    bottom: 0,
                                    overflow: 'hidden',
                                },
                                content: {
                                    display: 'flex',
                                    flexDirection: 'column',
                                    width: '306px',
                                    height: '650px',
                                    backgroundColor: '#C4C4C4',
                                    position: 'absolute',
                                    top: '50%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)',
                                    overflow: 'hidden',
                                }
                              }}
                            
                            isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
                                <div className="overlayModal">
                                    <div className="wrapperModal">
                                        <div className="modal">
                                            <button type="button" onClick={() => setModalIsOpen(false)}>
                                                <span>&times;</span>
                                            </button>
                                        <ModalVinylForm/>
                                </div>
                            </div>
                        </div>
                    </Modal>
                            </td>
                            <td><button onClick={()=>{deleteVinyl(product._id)}}>DELETE</button></td>
                            
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
                        <tr className="tr0">
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
                            <td>EDIT</td>
                            <td>Delete</td>
                        </tr>
                        
                    {products.map((product)=>(
                    <tr >
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
                            <td><button>EDIT</button></td>
                            <td><button onClick={()=>{deleteVinyl(product._id)}}>DELETE</button></td>
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