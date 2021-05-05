import React, {useState} from "react";
import { useForm } from "react-hook-form";
import axios from "axios";


const ModalVinylFormSong = (props) => {
    const { register, handleSubmit, errors } = useForm();
    const { product, numberOfPreviews} = props;

    let listSongName = [];
    let listSongFiles =[];

   
    for (let i = 0; i < numberOfPreviews; i++) {
      listSongName.push({ name: product.audio[i].name, path: product.audio[i].path });
      listSongFiles.push("");
    }

    const [listSongNameHook, setListSongNameHook] = useState(listSongName);
    const [listOfFilesSongs, setListOfFilesSongs] = useState(listSongFiles); // array with files = multer
    const [checkSubmit, setCheckSubmit] = useState("")
    
    // function for DB -> geré les noms dans la db 
    const fillListSongNameHook = (value, i, type) => {
        const newValues = [...listSongNameHook]
        if (type == "name"){newValues[i].name = value}
        else {newValues[i].path = "changeName"}
        return setListSongNameHook(newValues)
      }

      // function for multer -> géré l'envoi de notre file 
    const songToMulter = (file, i)=>{
        const newValues = [...listOfFilesSongs];
        newValues[i] = file
        return setListOfFilesSongs(newValues)
    }

    // console.log('listOfFilesSongs:', listOfFilesSongs)
    // console.log('listSongNameHook:', listSongNameHook)
    

  const onSubmit = async (formAnswers) => {
    
    let routes =   [];
    for (let i =1; i <=numberOfPreviews; i++){
      routes.push("uploadSong"+i)
    }

      const res = await axios({
        method: "patch",
        url:`${process.env.REACT_APP_API_URL}api/vinyl/updateSong/` + product._id,
        withCredentials: true,
        data: listSongNameHook,
      }); 

      for(let i = 0 ; i < numberOfPreviews; i++){
        const songToUpload = new FormData();
        songToUpload.append("song", listOfFilesSongs[i])
        const resUploadAudio = await axios({
          method: "post",
          url: `${process.env.REACT_APP_API_URL}api/vinyl/${routes[i]}/`,
          withCredentials: true,
          headers: { "Content-Type": "multipart/form-data" },
          data: songToUpload,
        });
        // console.log(resUploadAudio, "song to upload");
    }
    setCheckSubmit("Successfully")
  };

    return(
      <>
      {product.product_type !== "Merch" ? (<>
        <div className="modalBillingForm">
        <h1 style={{textAlign: "center"}}>EDIT SONG </h1>
        <div style={{display:'flex', justifyContent:"center"}}>
        </div>
         
        <div >
          <form onSubmit={handleSubmit(onSubmit)}>
            {listSongName.map((x,i)=> { 
              return (<>
                  <input
                    name="previewName"
                    onChange={e=>{fillListSongNameHook(e.target.value, i, "name")}}
                    type="text"
                    placeholder={product.audio[i].name}
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
              </>)
            })}

            <br />
            <input type="submit" value="Upload song"/>
          </form>
          <div>{checkSubmit}</div>
        </div>
      </div>

      </>) : (<></>)}

      </>
    )
}

export default ModalVinylFormSong;