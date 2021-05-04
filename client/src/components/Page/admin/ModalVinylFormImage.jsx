import React, { useContext, useState} from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const ModalVinylFormImage = (props) => {
  const { register, handleSubmit, errors } = useForm();
  const { product } = props;
  const [checkSubmit, setCheckSubmit] = useState("")
  
  const onSubmit = async (formAnswers) => {
    
    console.log(checkSubmit)
    
    try {
      const res = await axios({
        method: "patch",
        url: `${process.env.REACT_APP_API_URL}api/vinyl/updateImage/` + product._id,
        withCredentials: true,
        data: formAnswers,
      });
      
      const imageToUpload = new FormData();
      imageToUpload.append("image",formAnswers.image[0])
      // Fake form = {image: formAnwsers.image(name in form)[0]}
      
      const resUpdateImage = await axios({
        method: "post",
        url: `${process.env.REACT_APP_API_URL}api/vinyl/upload/`,
        withCredentials: true,
        headers: { "Content-Type": "multipart/form-data" },
        data: imageToUpload
      });
      setCheckSubmit("Successfully")
      
    } catch (err) {
      console.log(err);
    }
  };
  

  return (
    <>
      <div className="modalBillingForm">
        <h1 style={{textAlign: "center"}}>EDIT IMAGE </h1>
        <div style={{display:'flex', justifyContent:"center"}}>
        <img src={`${process.env.REACT_APP_API_URL}images/${product.image}.png`}  alt=""></img>
        </div>
         
        <div className="modalInput">
          <form onSubmit={handleSubmit(onSubmit)}>
            <label>Image</label>
            <input
              name="image"
              type="file"
              ref={register({
              })}
            />

            <br />
            <input type="submit" value="Upload image"/>
          </form>
            <div>{checkSubmit}</div>
        </div>
      </div>
    </>
  );
};

export default ModalVinylFormImage;
