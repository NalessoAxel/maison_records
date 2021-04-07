import React, {useState , useContext, useEffect} from 'react'
import {useForm} from 'react-hook-form'
import { UidContext } from '../../../../AppContext';
import axios from "axios"

const ModalShippingform = () => {
    const {register, handleSubmit, errors} = useForm()
    const { uid } = useContext(UidContext);

    const [formValue, setFormValue]= useState([]) 
    // test pour push
    
    const onSubmit = async (formAnswers) => {
        console.log(formAnswers)
        try {
            const res = await axios({
                method:"PATCH",
                url: `${process.env.REACT_APP_API_URL}api/user/update/`+ uid.id,
                withCredentials: true,
                data: formAnswers
            })
        }
        catch(err){
            console.log(err);
        }
    }

    const [laValue, set_laValue]= useState({}) 


    const [first_nameValue, setFirst_nameValue]= useState('') 
    const [last_nameValue, setLast_nameValue]= useState('') 
    const [streetValue, setStreetValue]= useState('') 
    const [numberValue, setNumberValue]= useState('') 
    const [zipValue, setZipValue]= useState('') 
    const [cityValue, setCityValue]= useState('') 
    const [emailValue, setEmailValue]= useState('') 

  
    const getInfo = async () => {
       try {
        const res = await axios({
        method:"get",
        url: `${process.env.REACT_APP_API_URL}api/user/`+ uid.id,
        withCredentials: true,
      })
      // set_laValue(res.data)
      // console.log(res.data)   
      // setFirst_nameValue(res.data.first_name)   
      // setLast_nameValue(res.data.last_name)   
      // setStreetValue(res.data.adress_shipping.street)   
      // setNumberValue(res.data.adress_shipping.number)   
      // setZipValue(res.data.adress_shipping.zip)   
      // setCityValue(res.data.adress_shipping.city)  
      // setEmailValue(res.data.email) 
       }
       catch(err){
        console.log(err);
    }
    }

    useEffect(() => {
      getInfo()
 
    }, []) 
    
    

    return (
        <>
    
            
            <div className="modalBillingForm">
                <h1>Shipping Adress</h1>
                <div className="modalInput">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label>Your first name</label>
                        <input 
                         name="first_name"
                        
                        defaultValue = {first_nameValue}
                        ref={register({
                          required: true
                        })}
                        /> 
                        
                        <label>Your last name</label>
                        <input 
                        name="last_name"
                        
                        defaultValue = {last_nameValue}
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
                        defaultValue = {streetValue}
                        type="text"
                        ref={register({
                          required: true
                        })}
                        /> 
                         <label>N°</label>
                        <input 
                        name="number"
                        defaultValue = {numberValue}
                        type="number"
                        ref={register({
                          required: true
                        })}
                        /> 
                        <label>Postcode/zip</label>
                        <input 
                        name="zip"
                        defaultValue = {zipValue}
                        type="number"
                        ref={register({
                          required: true
                        })}
                        /> 
                        <label>Town/city</label>
                        <input 
                        name="city"
                        defaultValue = {cityValue}
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
                         defaultValue = {emailValue}
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
                        // value = {formValue.phonenumber}
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
