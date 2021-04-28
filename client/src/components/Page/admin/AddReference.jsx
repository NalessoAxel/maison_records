import React, {useState} from 'react'
import {useForm} from 'react-hook-form'
import AdminHeader from './AdminHeader'
import axios from "axios"



const AddReference = () => {
  const {register, handleSubmit,formState, errors} = useForm()
  const {isSubmitting} = formState

  const numberOfSong = 20
  
  let inputPreviewForm = []
  for (let i = 1; i <= numberOfSong; i++){
    inputPreviewForm.push({ name: "name" + i, audioRef : "preview"+i}) //preview1, preview2...
  }
  
  let count = inputPreviewForm.length-inputPreviewForm.length; // = 0 

    const onSubmit = async (formAnswers) => {
      let imageName
      let listSongName=[]

      for (let i = 1; i<=numberOfSong; i++){
        let songName
        let titleSong
        listSongName.push({name: titleSong, path: songName})
      }
      // let listSongName =[songName1,songName2,songName3,songName4]
      
      let listPreview = [
        { name: formAnswers.name1, path: formAnswers.preview1 },
        { name: formAnswers.name2, path: formAnswers.preview2 },
        { name: formAnswers.name3, path: formAnswers.preview3 },
        { name: formAnswers.name4, path: formAnswers.preview5 },
        { name: formAnswers.name6, path: formAnswers.preview6 },
        { name: formAnswers.name7, path: formAnswers.preview7 },
        { name: formAnswers.name8, path: formAnswers.preview8 },
        { name: formAnswers.name9, path: formAnswers.preview9 },
        { name: formAnswers.name10, path: formAnswers.preview10 },
        { name: formAnswers.name11, path: formAnswers.preview11 },
        { name: formAnswers.name12, path: formAnswers.preview12 },
        { name: formAnswers.name13, path: formAnswers.preview13 },
        { name: formAnswers.name14, path: formAnswers.preview14 },
        { name: formAnswers.name15, path: formAnswers.preview15 },
        { name: formAnswers.name16, path: formAnswers.preview16 },
        { name: formAnswers.name17, path: formAnswers.preview17 },
        { name: formAnswers.name18, path: formAnswers.preview18 },
        { name: formAnswers.name19, path: formAnswers.preview19 },
        { name: formAnswers.name20, path: formAnswers.preview20 },
      ];

      // let listPreview =
      // [
      //   formAnswers.preview1,
      //   formAnswers.preview2,
      //   formAnswers.preview3,
      //   formAnswers.preview4,
      //   formAnswers.preview5,
      //   formAnswers.preview6,
      //   formAnswers.preview7,
      //   formAnswers.preview8,
      //   formAnswers.preview9,
      //   formAnswers.preview10,
      //   formAnswers.preview11,
      //   formAnswers.preview12,
      //   formAnswers.preview13,
      //   formAnswers.preview14,
      //   formAnswers.preview15,
      //   formAnswers.preview16,
      //   formAnswers.preview17,
      //   formAnswers.preview18,
      //   formAnswers.preview19,
      //   formAnswers.preview20
      // ]
     

        
      
      for (let i = 0; i < listSongName.length; i++){
        if(listPreview[i][0]==undefined){
          listSongName[i].path="default";
          listSongName[i].name="default";
        }else{
          listSongName[i].path = listPreview[i].path[0].name // name of file
          listSongName[i].name = listPreview[i].name
        }
        console.log(listPreview[i],"coucou")
        console.log(listPreview[i].name,"1")
        console.log(listPreview[i].path[0].name, "cul")
   
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
                  {     preview1: listSongName[0],
                        preview2:  listSongName[1],
                        preview3:  listSongName[2],
                        preview4:  listSongName[3],
                        preview5:  listSongName[4],
                        preview6:  listSongName[5],
                        preview7:  listSongName[6],
                        preview8:  listSongName[7],
                        preview9:  listSongName[8],
                        preview10: listSongName[9],
                        preview11: listSongName[10],
                        preview12: listSongName[11],
                        preview13: listSongName[12],
                        preview14: listSongName[13],
                        preview15: listSongName[14],
                        preview16: listSongName[15],
                        preview17: listSongName[16],
                        preview17: listSongName[17],
                        preview18: listSongName[18],
                        preview19: listSongName[19],
                        preview20: listSongName[20]
                  }
                    
                  },
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

            const previews = 
            [
            formAnswers.preview1[0],
            formAnswers.preview2[0],
            formAnswers.preview3[0],
            formAnswers.preview4[0],
            formAnswers.preview5[0],
            formAnswers.preview6[0],
            formAnswers.preview7[0],
            formAnswers.preview8[0],
            formAnswers.preview9[0],
            formAnswers.preview10[0],
            formAnswers.preview11[0],
            formAnswers.preview12[0],
            formAnswers.preview13[0],
            formAnswers.preview14[0],
            formAnswers.preview15[0],
            formAnswers.preview16[0],
            formAnswers.preview17[0],
            formAnswers.preview18[0],
            formAnswers.preview19[0],
            formAnswers.preview20[0]
            ]

            const routes = [];
            for (let i = 1; i <= numberOfSong; i++){
              routes.push("uploadSong"+i) //preview1, preview2...
            }
            for(let i = 0; i < previews.length; i++){
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

    // MERCH ENCORE A FAIRE 
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
                  <option value="Merch">Merch</option>
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
                <h2>Face A</h2>
                {
                 inputPreviewForm.map((insertForm)=>{
                   count += 1
                   
                    return (
                      <>
                        {count == 11 ? (
                          <>
                          <hr/>
                          <h2>Face B</h2>
                          </>
                        ):(
                          <></>
                        )}
                        <input
                        name={insertForm.name}
                        type="text"
                        placeholder={"Preview " + count}
                        ref={register({ })}
                />
                        <input
                        name={insertForm.audioRef}
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