import React, {useState} from 'react'
import {useForm} from 'react-hook-form'
import AdminHeader from './AdminHeader'
import axios from "axios"

const AddReference = () => {
    const {register, handleSubmit,formState, errors} = useForm()
      const {isSubmitting} = formState
      // let formAnswers= new FormData();


    const onSubmit = async (formAnswers) => {
       
      console.log(formAnswers.image[0].stream());
      console.log(formAnswers.image[0].text());


      // formAnswers.append("image", formAnswers.image);
        try {
            const resAddRef = await axios ({
                method: "post",
                url: `${process.env.REACT_APP_API_URL}api/vinyl/addReference/`,
                withCredentials: true,
                data: {
                  image: formAnswers.image[0].name,
                  product_type: formAnswers.product_type,
                  title: formAnswers.title,
                  artist_name: formAnswers.artist_name,
                  label: formAnswers.label,
                  catNumber: formAnswers.catNumber,
                  year: formAnswers.year,
                  country: formAnswers.country,
                  style: formAnswers.style,
                  format: formAnswers.format,
                  description: formAnswers.description,
                  quantity: formAnswers.quantity,
                  price: formAnswers.price,
                }, 
            });
            const imageToUpload = new FormData();
            imageToUpload.append("image",formAnswers.image[0])

            const resUploadImage = await axios({
              method: "post",
              url: `${process.env.REACT_APP_API_URL}api/vinyl/upload/`,
              withCredentials: true,
              headers: { "Content-Type": "multipart/form-data" },
              data: imageToUpload
            });
            // window.location = ''
            
        } catch (err) {
            console.log(err);
        }
    }

    // fetch post => upload => imageNameFromForm dans /images 
//
    return (
      <>
        <AdminHeader />
        <div className="referenceWrapper">
          <h1>Add a reference</h1>
          <div className="formWrapper">
            <form
              // encType="multipart/form-data"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="containerRight">
                <label>Choose an option</label>
                <select name="product_type" ref={register({ required: true })}>
                  <option value="New">New</option>
                  <option value="Second hand">Second hand</option>
                </select>
                <label>Title</label>
                <input
                  name="title"
                  type="text"
                  ref={register({ required: true })}
                />
                <label>Artist name</label>
                <input
                  name="artist_name"
                  type="text"
                  ref={register({ required: true })}
                />
                <label>label</label>
                <input
                  name="label"
                  type="text"
                  ref={register({ required: true })}
                />
                <label>Cat number</label>
                <input
                  name="catNumber"
                  type="text"
                  ref={register({ required: true })}
                />
                <label>Year</label>
                <input
                  name="year"
                  type="text"
                  ref={register({ required: true })}
                />
                <label>Country</label>
                <input
                  name="country"
                  type="text"
                  ref={register({ required: true })}
                />
                <label>Style</label>
                <input
                  name="style"
                  type="text"
                  ref={register({ required: true })}
                />
                <label>Format</label>
                <input
                  name="format"
                  type="text"
                  ref={register({ required: true })}
                />
                <label>Description</label>
                <input
                  name="description"
                  type="text"
                  ref={register({ required: true })}
                />
              </div>
              <div className="containerLeft">
                <label>Price</label>
                <input
                  name="price"
                  type="text"
                  ref={register({ required: true })}
                />
                <label>Quantity</label>
                <input
                  name="quantity"
                  type="text"
                  ref={register({ required: true })}
                />
                <label>Image</label>
                <input
                  name="image"
                  type="file"
                  // accept=".jpg"
                  ref={register({
                    // required: true
                  })}
                />
                <label>Audio</label>
                <input
                  name="audio"
                  type="text"
                  ref={register({
                    // required: true
                  })}
                />
                <label>Audio</label>
                <input
                  name="audio"
                  type="text"
                  ref={register({
                    // required: true
                  })}
                />
                <label>Audio</label>
                <input
                  name="audio"
                  type="text"
                  ref={register({
                    // required: true
                  })}
                />
                <label>Audio</label>
                <input
                  name="audio"
                  type="text"
                  ref={register({
                    // required: true
                  })}
                />
                <label>Audio</label>
                <input
                  name="audio"
                  type="text"
                  ref={register({
                    // required: true
                  })}
                />
              </div>
              <input
                disabled={isSubmitting}
                type="submit"
                value="Add reference"
                className="btnRef"
              />
            </form>
          </div>
        </div>
      </>
    );
}

export default AddReference
