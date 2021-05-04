import React, {useContext, useState} from 'react'
import {useForm} from 'react-hook-form'
import axios from "axios"

const ModalVinylForm = (props) => {
    const {register, handleSubmit, errors} = useForm()
    const {product} = props
    const [checkSubmit, setCheckSubmit] = useState("")

    // const [valueProductType, setvalueProductType]=useState()
    
    const onSubmit = async (formAnswers) => {
      try{
        const res = await axios({
          method: "patch",
          url: `${process.env.REACT_APP_API_URL}api/vinyl/update/` + product._id,
          withCredentials: true,
          data: formAnswers,
        });
        setCheckSubmit("Successfully")

      } catch (err) {
        console.log(err);
      }
    }


 let productTypeLabel = ''
 let productTypeLabel2 = ''


    const decide = () => {
      if (product.product_type == "New") {
            productTypeLabel="Second hand"
            productTypeLabel2="Merch"

      } else {
            productTypeLabel="New"
            productTypeLabel2 ="Merch"
      }    
    }

    let sizeB = ''
    let sizeC = ''

    const decideSize = () =>{
      
      if (product.size == "S"){
        sizeB = "M"
        sizeC = "L"
      }else if(product.size == "M"){
        sizeB = "S"
        sizeC = "L"
      }else{
        sizeB = "M"
        sizeC = "S"
      }
    } 
    
   
    return (
      <>

        <div  className="modalBillingForm">
          
            {product.product_type === "Merch" ?
             (<>
            <h1 style={{textAlign: "center"}}>EDIT MERCH</h1>
            </>) : 
            (<>
            <h1 style={{textAlign: "center"}}>EDIT VINYL</h1>
            </>)}

          <div className="modalInput">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
              {product.product_type === "Merch" ? 
              (<> 
              <select name="product_type" ref={register({ required: true })}>         
              <option value="Merch"> Merch </option>
              </select>
              <br/>
              <label>Size</label>
              <br/>      
              <select name="size" ref={register({ required: true })}>         
                 <option value={decideSize()}>{product.size}</option>
                 <option> {sizeB} </option>
                 <option> {sizeC} </option>
              </select>
              <br/>
              </>) : (<>
                <label>Product Type</label>
                        <select name="product_type" ref={register({ required: true })}>
                          <option value={product.product_type}>
                            {product.product_type}
                          </option>

                          <option
                            value={decide()}>
                            {productTypeLabel}
                          </option>
                        </select>
              </>)}
              <label>Title</label>
                        <input
                          name="title"
                          defaultValue={product.title}
                          type="text"
                          ref={register({
                            required: true,
                          })}
                        />
                        <label>Price</label>
                        <input
                          name="price"
                          defaultValue={product.price}
                          type="text"
                          ref={register({
                            required: true,
                          })}
                        />
                        <label>Quantity</label>
                        <input
                          name="quantity"
                          defaultValue={product.quantity}
                          type="text"
                          ref={register({
                            required: true,
                          })}
                        />
                        <label>Description</label>
                        <input
                          name="description"
                          defaultValue={product.description}
                          type="text"
                          ref={register({
                            required: true,
                          })}
                        />
              {product.product_type === "Merch" ?
             (<></>) : (<>
                        <label>Artist Name</label>
                        <input
                          name="artist_name"
                          defaultValue={product.artist_name}
                          type="text"
                          ref={register({
                            required: true,
                          })}
                        />
                        <label>Year</label>
                        <input
                          name="year"
                          defaultValue={product.year}
                          type="text"
                          ref={register({
                            required: true,
                          })}
                        />
                        <label>Label</label>
                        <input
                          name="label"
                          defaultValue={product.label}
                          type="text"
                          ref={register({
                            required: true,
                          })}
                        />
                        <label>CatNumber</label>
                        <input
                          name="catNumber"
                          defaultValue={product.catNumber}
                          type="text"
                          ref={register({
                            required: true,
                          })}
                        />
                        <label>Format</label>
                        <input
                          name="format"
                          defaultValue={product.format}
                          type="text"
                          ref={register({
                            required: true,
                          })}
                        />
                        <label>Country</label>
                        <input
                          name="country"
                          defaultValue={product.country}
                          type="text"
                          ref={register({
                            required: true,
                          })}
                        />
                        <label>Style</label>
                        <input
                          name="style"
                          defaultValue={product.style}
                          type="text"
                          ref={register({
                            required: true,
                          })}
                        />
            </>)}
            <br />
            </div>
            <div>
              <input type="submit" value="Upload infos" />
            </div>
          <div>{checkSubmit}</div>

            </form>
          </div>
        </div>
      </>
    );
}

export default ModalVinylForm

