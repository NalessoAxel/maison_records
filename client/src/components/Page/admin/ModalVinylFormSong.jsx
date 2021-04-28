import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";


const ModalVinylFormSong = (props) => {
    const { register, handleSubmit, errors } = useForm();
    const { product } = props;


const onSubmit = async (formAnswers) => {
    const previews = [formAnswers.preview1[0], formAnswers.preview2[0], formAnswers.preview3[0], formAnswers.preview4[0]]
    const routes =   ["uploadSong1", "uploadSong2", "uploadSong3", "uploadSong4"];
    let path =      [product.audio.preview1.path, product.audio.preview2.path,product.audio.preview3.path,product.audio.preview4.path]

    
 for(let i = 0 ; i < previews.length; i++){
    if (previews[i] !== undefined){
        if (path[i] === "default") {
            path[i]="changeName"
        } //ChangeName in VinylController
      } 
    }
      
        const res = await axios({
        method: "patch",
        url: `${process.env.REACT_APP_API_URL}api/vinyl/updateSong/` + product._id,
        withCredentials: true,
        data: path,  
    }) 


 
      for(let i = 0 ; i < previews.length; i++){
        const songToUpload = new FormData();
        songToUpload.append("song", previews[i])
        const resUploadAudio = await axios({
          method: "post",
          url: `${process.env.REACT_APP_API_URL}api/vinyl/${routes[i]}/`,
          withCredentials: true,
          headers: { "Content-Type": "multipart/form-data" },
          data: songToUpload,
        });
        console.log(resUploadAudio, "song to upload");
    }
    // window.location =""
};

    return(
      <>
        <div className="modalBillingForm">
        <h1 style={{textAlign: "center"}}>EDIT SONG </h1>
        <div style={{display:'flex', justifyContent:"center"}}>
        </div>
         
        <div >
          <form onSubmit={handleSubmit(onSubmit)}>
      
            <div>{product.audio.preview1.name}</div>

            <input
              name="preview1"
              type="file"
              ref={register({
              })}   
            />

         
            <div>{product.audio.preview2.name}</div>
            <input 
              name="preview2"
              type="file"
              ref={register({
              })}
            />
            <div>{product.audio.preview3.name}</div>

            <input
              name="preview3"
              type="file"
              placeholder="test"
              ref={register({
              })}
            />
            <div>
            <div>{product.audio.preview4.name}</div>

            <input
              name="preview4"
              type="file"
              ref={register({
              })}
            />
            </div>

            <br />
            <input type="submit" value="Upload song"/>
          </form>
        </div>
      </div>
      </>
    )
}

export default ModalVinylFormSong;