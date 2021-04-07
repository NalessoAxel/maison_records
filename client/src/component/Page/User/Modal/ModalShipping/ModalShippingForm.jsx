import React, {useState , useContext} from 'react'
import {useForm} from 'react-hook-form'
import { UidContext } from '../../../../AppContext';
import axios from "axios"

const ModalShippingform = () => {
    const {register, handleSubmit, errors} = useForm()
    const { uid } = useContext(UidContext);

    const [formValue, setFormValue]= useState([])
    
    const onSubmit = async (formAnswers) => {
        console.log(formAnswers)
        try {
            const res = await axios({
                method:"PUT",
                url: `${process.env.REACT_APP_API_URL}api/user/`+ uid.id,
                withCredentials: true,
                data: formAnswers
            })
        }
        catch(err){
            console.log(err);
        }
    }
  
    const getInfo = async () => {
       try {
            const res = await axios({
            method:"get",
            url: `${process.env.REACT_APP_API_URL}api/user/`+ uid.id,
            withCredentials: true,
      })
      setFormValue(res.data)
      // console.log(formValue.adress_shipping.street)      
       }
       catch(err){
        console.log(err);
    }
    }
    getInfo()
    

    return (
        <>
    
            
            <div className="modalBillingForm">
                <h1>Shipping Adress</h1>
                <div className="modalInput">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label>Your first name</label>
                        <input 
                         name="first_name"
                        
                        value = {formValue.first_name}
                        ref={register({
                          required: true
                        })}
                        /> 
                        
                        <label>Your last name</label>
                        <input 
                        name="last_name"
                        
                        value = {formValue.last_name}
                        type="text"
                        ref={register({
                          required: true
                        })}
                        /> 
                        
                        <label>Companie (optional)</label>
                        <input 
                        name="companie"
                        
                        // value = {formValue.companie}
                        type="text"
                        ref={register({
                          // required: true
                        })}
                        /> 
          
                        <label>Street Name</label>
                        <input 
                        name="street"
                        // value = {formValue.adress_shipping.street}
                        type="text"
                        ref={register({
                          required: true
                        })}
                        /> 
                         <label>N°</label>
                        <input 
                        name="number"
                        // value = {formValue.adress_shipping.number}
                        type="number"
                        ref={register({
                          required: true
                        })}
                        /> 
                        <label>Postcode/zip</label>
                        <input 
                        name="zip"
                        // value = {formValue.adress_shipping.zip}
                        type="number"
                        ref={register({
                          required: true
                        })}
                        /> 
                        <label>Town/city</label>
                        <input 
                        name="city"
                        // value = {formValue.adress_shipping.city}
                        type="text"
                        ref={register({
                          required: true
                        })}
                        /> 
                        {/* <label>Town/city</label>
                        <input 
                        name="city"
                        placeholder='Brussels'
                        type="text"
                        ref={register({
                          required: true
                        })}
                        /> */}
                        <label>Your Email
                         <input 
                         name="email"
                        value = {formValue.email}
                         type="tesxt" 
                         ref={register
                           ({
                             pattern: {
                               value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                             },
                             required: true})}
                         /> 
                         {errors.email && <span className="error">Email invalid!</span>}
                         </label>
                         <label>Phone Number</label>
                        <input 
                        name="phonenumber"
                        value = {formValue.phonenumber}
                        type="number"
                        ref={register({
                          required: true
                        })}
                        /> 
                        <input  type="submit"/>
                    </form>
                </div>
            </div>
      
        </>
    )
}                   

export default ModalShippingform
