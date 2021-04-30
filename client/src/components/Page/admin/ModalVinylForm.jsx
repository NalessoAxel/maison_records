import React, {useContext} from 'react'
import {useForm} from 'react-hook-form'
import axios from "axios"

const ModalVinylForm = (props) => {
    const {register, handleSubmit, errors} = useForm()
    const {product} = props
    // const [valueProductType, setvalueProductType]=useState()
    
    const onSubmit = async (formAnswers) => {
      try{
        const res = await axios({
          method: "patch",
          url: `${process.env.REACT_APP_API_URL}api/vinyl/update/` + product._id,
          withCredentials: true,
          data: formAnswers,
        });
        window.location =""
      } catch (err) {
        console.log(err);
      }
    }


 let productTypeLabel = ''
    const decide = () => {
      if (product.product_type == "New") {
            productTypeLabel="Second hand"
            return productTypeLabel
      } else {
        productTypeLabel="New"
          return productTypeLabel
      }             
    }
    
    return (
      <>
        <div className="modalBillingForm">
          <h1 style={{textAlign: "center"}}>EDIT VINYL</h1>
          <div className="modalInput">
            <form onSubmit={handleSubmit(onSubmit)}>
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

              <label>Title</label>
              <input
                name="title"
                defaultValue={product.title}
                type="text"
                ref={register({
                  required: true,
                })}
              />
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
              <label>Format</label>
              <input
                name="format"
                defaultValue={product.format}
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

              <br />
              <input type="submit" />
            </form>
          </div>
        </div>
      </>
    );
}

export default ModalVinylForm

