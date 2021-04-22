import React, {useState} from 'react'
import {useForm} from 'react-hook-form'
import AdminHeader from './AdminHeader'
import axios from "axios"

const AddReference = () => {
    const {register, handleSubmit,formState, errors} = useForm()
    const {isSubmitting} = formState
    
    const onSubmit = async (formAnswers) => {
      let imageName
      let songName
      {(formAnswers.image[0]==undefined) ? (imageName="default") : (imageName =formAnswers.image[0].name)}
      {(formAnswers.audio[0]==undefined) ? (songName="default") : (songName =formAnswers.audio[0].name)}
      
      console.log(formAnswers.audio,  "formAnswers est ici");
                  
        try {
            const resAddRef = await axios ({
                method: "post",
                url: `${process.env.REACT_APP_API_URL}api/vinyl/addReference/`,
                withCredentials: true,
                data: {
          
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
                  image: imageName,
                  audio: songName
                }, 
            });
            // create a fake form with good encryption with new Formdata
            const imageToUpload = new FormData();
            const songToUpload = new FormData();

            imageToUpload.append("image",formAnswers.image[0])
            songToUpload.append("song",formAnswers.audio[0])
            // Fake form = {image: formAnwsers.image(name in form)[0]}

            const resUploadImage = await axios({
              method: "post",
              url: `${process.env.REACT_APP_API_URL}api/vinyl/upload/`,
              withCredentials: true,
              headers: { "Content-Type": "multipart/form-data" },
              data: imageToUpload
            });

            const resUploadAudio = await axios({
              method: "post",
              url: `${process.env.REACT_APP_API_URL}api/vinyl/uploadSong/`,
              withCredentials: true,
              headers: { "Content-Type": "multipart/form-data" },
              data: songToUpload
            });
            
          } catch (err) {
            console.log(err);
          }
          window.location = ''
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

                  value='flo'

                  ref={register({ required: true })}
                />
                <label>Artist name</label>
                <input
                  name="artist_name"
                  type="text"
                  value='flo'
                  ref={register({ required: true })}
                />
                <label>label</label>
                <input
                  name="label"
                  type="text"
                  value='flo'
                  ref={register({ required: true })}
                />
                <label>Cat number</label>
                <input
                  name="catNumber"
                  type="text"
                  value='flo'
                  ref={register({ required: true })}
                />
                <label>Year</label>
                <input
                  name="year"
                  type="text"
                  value='1000'
                  ref={register({ required: true })}
                />
                <label>Country</label>
                <input
                  name="country"
                  type="text"
                  value='flo'
                  ref={register({ required: true })}
                />
                <label>Style</label>
                <input
                  name="style"
                  type="text"
                  value='flo'
                  ref={register({ required: true })}
                />
                <label>Format</label>
                <input
                  name="format"
                  type="text"
                  value='Mp3'
                  ref={register({ required: true })}
                />
                <label>Description</label>
                <input
                  name="description"
                  type="text"
                  value='flo'
                  ref={register({ required: true })}
                />
              </div>
              <div className="containerLeft">
                <label>Price</label>
                <input
                  name="price"
                  type="text"
                  value='10'
                  ref={register({ required: true })}
                />
                <label>Quantity</label>
                <input
                  name="quantity"
                  type="text"
                  value='50'
                  ref={register({ required: true })}
                />
                <label>Image</label>
                <input
                  name="image"
                  type="file"
                  // defaultValue="default"
                  // accept=".jpg"
                  ref={register({
                    // required: true
                  })}
                />
                <label>Audio</label>
                <input
                  name="audio"
                  type="file"
                  ref={register({
                    // required: true
                  })}
                />
                {/* <label>Audio</label>
                <input
                  name="audio"
                  type="file"
                  ref={register({
                    // required: true
                  })}
                />
                <label>Audio</label>
                <input
                  name="audio"
                  type="file"
                  ref={register({
                    // required: true
                  })}
                />
                <label>Audio</label>
                <input
                  name="audio"
                  type="file"
                  ref={register({
                    // required: true
                  })}
                />
                <label>Audio</label>
                <input
                  name="audio"
                  type="file"
                  ref={register({
                    // required: true
                  })}
                /> */}
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
