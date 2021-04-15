import React, {useContext} from 'react'
import {useForm} from 'react-hook-form'
import { UidContext } from '../../../../AppContext';
import axios from "axios"

const ModalBillingform = () => {
    const {register, handleSubmit, errors} = useForm()
    const { uid } = useContext(UidContext);
  
    const onSubmit = async (formAnswers) => {
        try {
          const res = await axios({
            method: "patch",
            url: `${process.env.REACT_APP_API_URL}api/user/update/` + uid.id,
            withCredentials: true,
            data: formAnswers,
          });
          window.location =""  // reload page 
        } catch (err) {
          console.log(err);

        }
    }

    return (
        <>
            <div className="modalBillingForm">
                <h1>Billing Adress</h1>
                <div className="modalInput">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label>Your first name</label>
                        <input 
                        name="first_nameBilling"
                        defaultValue={uid.adress_billing.first_nameBilling}
                        ref={register({
                          required: true
                        })}
                        /> 
                        
                        <label>Your last name</label>
                        <input 
                        name="last_nameBilling"
                        defaultValue={uid.adress_billing.last_nameBilling}
                        type="text"
                        ref={register({
                          required: true
                        })}
                        /> 
                        
                        <label>Street Name</label>
                        <input 
                        name="streetBilling"
                        defaultValue = {uid.adress_billing.streetBilling}
                        type="text"
                        ref={register({
                          required: true
                        })}
                        /> 
                         <label>N°</label>
                        <input 
                        name="numberBilling"
                        defaultValue = {uid.adress_billing.numberBilling}
                        type="number"
                        ref={register({
                          required: true
                        })}
                        /> 
                        <label>Postcode/zip</label>
                        <input 
                        name="zipBilling"
                        defaultValue = {uid.adress_billing.zipBilling}
                        type="number"
                        ref={register({
                          required: true
                        })}
                        /> 
                        <label>Town/city</label>
                        <input 
                        name="cityBilling"
                        defaultValue = {uid.adress_billing.cityBilling}
                        type="text"
                        ref={register({
                          required: true
                        })}
                        /> 
                        <label>Your Email
                         <input 
                         name="email"
                         defaultValue={uid.email}
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
                        <br/>
                        <input type="submit"/>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ModalBillingform
