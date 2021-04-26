import React, {useState} from 'react'
import {useForm} from 'react-hook-form'
import AdminHeader from './AdminHeader'
import axios from "axios"



const AddReference = () => {
  const {register, handleSubmit,formState, errors} = useForm()
  const {isSubmitting} = formState
  
  let inputPreviewForm = ["preview1","preview2","preview3","preview4"]
  let count = inputPreviewForm.length-inputPreviewForm.length; // = 0 

    const onSubmit = async (formAnswers) => {
      let imageName

      let songName1,songName2,songName3,songName4
      
      let listSongName =[songName1,songName2,songName3,songName4]
      let listPreview =[formAnswers.preview1,formAnswers.preview2,formAnswers.preview3,formAnswers.preview4]
      
      for (let i = 0; i < listSongName.length; i++){
        {(listPreview[i][0]==undefined) ? (listSongName[i]="default") : (listSongName[i] = listPreview[i][0].name)}
      // {(formAnswers.preview1[0]==undefined) ? (songName1="default") : (songName1 =formAnswers.preview1[0].name)}
      }

      {(formAnswers.image[0]==undefined) ? (imageName="default") : (imageName =formAnswers.image[0].name)}

        
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
                  audio:
                  { 
                    preview1: {path: listSongName[0]},
                    preview2: {path: listSongName[1]},
                    preview3: {path: listSongName[2]},
                    preview4: {path: listSongName[3]},
                  },
                }
            });
            // create a fake form with good encryption with new Formdata
            const imageToUpload = new FormData();
            
            imageToUpload.append("image",formAnswers.image[0])
            // Fake form = {image: formAnwsers.image(name in form)[0]}
            const resUploadImage = await axios({
              method: "post",
              url: `${process.env.REACT_APP_API_URL}api/vinyl/upload/`,
              withCredentials: true,
              headers: { "Content-Type": "multipart/form-data" },
              data: imageToUpload,
            });

            const previews = [formAnswers.preview1[0],formAnswers.preview2[0],formAnswers.preview3[0],formAnswers.preview4[0]]
            const routes = ["uploadSong1","uploadSong2","uploadSong3","uploadSong4"];
            
            for(let i = 0; i <= previews.length; i++){
              const songToUpload = new FormData();
              songToUpload.append("song", previews[i])
              const resUploadAudio = await axios({
                method: "post",
                url: `${process.env.REACT_APP_API_URL}api/vinyl/${routes[i]}/`,
                withCredentials: true,
                headers: { "Content-Type": "multipart/form-data" },
                data: songToUpload,
              });
            }
        
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
                <select name="product_type" ref={register({ })}>
                  <option value="New">New</option>
                  <option value="Second hand">Second hand</option>
                </select>
                <label>Title</label>
                <input
                  name="title"
                  type="text"
                  ref={register({ })}
                />
                <label>Artist name</label>
                <input
                  name="artist_name"
                  type="text"
                  ref={register({ })}
                />
                <label>label</label>
                <input
                  name="label"
                  type="text"
                  ref={register({ })}
                />
                <label>Cat number</label>
                <input
                  name="catNumber"
                  type="text"
                  ref={register({ })}
                />
                <label>Year</label>
                <input
                  name="year"
                  type="text"
                  ref={register({ })}
                />
                <label>Country</label>
                <input
                  name="country"
                  type="text"
                  ref={register({ })}
                />
                <label>Style</label>
                <input
                  name="style"
                  type="text"
                  ref={register({ })}
                />
                <label>Format</label>
                <input
                  name="format"
                  type="text"
                  ref={register({ })}
                />
                <label>Description</label>
                <input
                  name="description"
                  type="text"
                  ref={register({ })}
                />
              </div>
              <div className="containerLeft">
                <label>Price</label>
                <input
                  name="price"
                  type="text"
                  ref={register({ })}
                />
                <label>Quantity</label>
                <input
                  name="quantity"
                  type="text"
                  ref={register({ })}
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
                {
                 inputPreviewForm.map((insertForm)=>{
                   count += 1
                   
                    return (
                      <>
                        <label>Preview {count}</label>
                        <input
                        name={insertForm}
                        type="file"
                        ref={register({
                          // required: true
                        })}
                        />
                      </>
                    )
                })
                }

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