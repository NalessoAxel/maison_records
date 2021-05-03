import React, {useState} from 'react'
import {useForm} from 'react-hook-form'
import AdminHeader from './AdminHeader'
import axios from "axios"



const AddReference = (props) => {
  const {register, handleSubmit,formState, errors} = useForm()
  // const {isSubmitting} = formState
  const {numberOfPreviews} = props

 
  
  let listSongName = [];
  let listSongFiles =[];
  for (let i = 1; i <= numberOfPreviews; i++) {
    listSongName.push({ name: "default", path: "default" });
    listSongFiles.push("")
  }

  const [listSongNameHook, setListSongNameHook] = useState(listSongName);
  const [listOfFilesSongs, setListOfFilesSongs] = useState(listSongFiles);
  
  // function for DB -> geré les noms dans la db 
  const fillListSongNameHook = (value, i, type) => {
      const newValues = [...listSongNameHook]
      if (type == "name"){newValues[i].name = value}
      else {newValues[i].path = value}
      return setListSongNameHook(newValues)
    }

    // function for multer -> géré l'envoi de notre file 
  const songToMulter = (file, i)=>{
      const newValues = [...listOfFilesSongs];
      newValues[i] = file
      return setListOfFilesSongs(newValues)
  }
 
  const onSubmit = async (formAnswers) => {

    let imageName    
    // console.log(listSongNameHook,'state evolution');
    
    {(formAnswers.image[0]==undefined) ? (imageName="default") : (imageName =formAnswers.image[0].name)}
    console.log(formAnswers , "ici");

      try {
        const resAddRef = await axios({
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
            audio: listSongNameHook
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

            const routes = [];
            for (let i = 1; i <= numberOfPreviews; i++){
              routes.push("uploadSong"+i) //preview1, preview2...
            }
            for(let i = 0; i < listOfFilesSongs.length; i++){
              const songToUpload = new FormData();
              songToUpload.append("song", listOfFilesSongs[i])
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

  const [hiding,setHiding] = useState();

  const merchForm = (value) => {
    if (value == "Merch") {
      setHiding("none")
    } else{ 
      setHiding("block")
    }
  }  


    return (
      
      <>
        <AdminHeader />
        <div className="referenceWrapper">
          <h1>Add a reference</h1>
          <div className="formWrapper">
            <form
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="containerRight">
                <label>Choose an option</label>
                <select name="product_type" onChange={(e)=>merchForm(e.target.value)} ref={register({ })}>
                  <option value="New">New</option>
                  <option value="Second hand">Second hand</option>
                  <option value="Merch">Merch</option>
                </select>
                <label>Title</label>
                <input
                  name="title"
                  type="text"
                  defaultValue="default"
                  placeholder="Title"
                  ref={register({ })}
                  />
                <label>Artist name</label>
                <input
                  name="artist_name"
                  type="text"
                  defaultValue="default"
                  placeholder="Artiste name"
                  ref={register({ })}
                  style={{display: hiding}}
                />
                <label>label</label>
                <input
                  name="label"
                  type="text"
                  defaultValue="default"
                  placeholder="label"
                  ref={register({ })}
                />
                <label>Cat number</label>
                <input
                  name="catNumber"
                  type="text"
                  ref={register({ })}
                  defaultValue="default"
                  placeholder="CatNumber"
                  
                />
                <label>Year</label>
                <input
                  name="year"
                  type="text"
                  ref={register({ })}
                  defaultValue="1000"
                  placeholder="1990"
                />
                <label>Country</label>
                <input
                  name="country"
                  type="text"
                  ref={register({ })}
                  defaultValue="default"
                  placeholder="Country"
                />
                <label>Style</label>
                <input
                  name="style"
                  type="text"
                  ref={register({ })}
                  defaultValue="default"
                  placeholder="Style"
                />
                <label>Format</label>
                <input
                  name="format"
                  type="text"
                  ref={register({ })}
                  defaultValue="default"
                  placeholder="Format"
                />
                <label>Description</label>
                <input
                  name="description"
                  type="text"
                  ref={register({ })}
                  defaultValue="default"
                  placeholder="Description"
                />
              </div>
              <div className="containerLeft">
                <label>Price</label>
                <input
                  name="price"
                  type="text"
                  ref={register({ })}
                  defaultValue="1000"
                  placeholder="10"
                />
                <label>Quantity</label>
                <input
                  name="quantity"
                  type="text"
                  ref={register({ })}
                  defaultValue="1000"
                  placeholder="10"
                />
                <label>Image</label>
                <input
                  name="image"
                  type="file"
                  ref={register({})}
                />
                <h2>Previews of the vinyl</h2>
                {listSongName.map((x, i)=>{ // obligation de deux arguments pour le map, x on ne l'utilise pas
                    return (
                      <>
                        <input
                        name="previewName"
                        onChange={e=>{fillListSongNameHook(e.target.value, i, "name")}}
                        type="text"
                        placeholder={"Preview " + (i+1)}
                        ref={register({ })}
                />
                        <input
                        name='previewPath'
                        onChange={e=>{fillListSongNameHook(e.target.files[0].name, i, "path"); songToMulter(e.target.files[0], i)}}
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
                // disabled={isSubmitting}
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