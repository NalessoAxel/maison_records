import React, {useContext} from 'react'
import {useForm} from 'react-hook-form'
import axios from "axios"

const ModalVinylForm = () => {
    const {register, handleSubmit, errors} = useForm()

    const onSubmit = async (formAnswers) => {

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
                        defaultValue={""}
                        type="text"
                        ref={register({
                          required: true
                        })}
                        /> 
                        
                        <label>Your last name</label>
                        <input 
                        name="last_nameBilling"
                        defaultValue={""}
                        type="text"
                        ref={register({
                          required: true
                        })}
                        /> 
                        
                        <label>Street Name</label>
                        <input 
                        name="streetBilling"
                        defaultValue = {""}
                        type="text"
                        ref={register({
                          required: true
                        })}
                        /> 
                         <label>N°</label>
                        <input 
                        name="numberBilling"
                        defaultValue = {""}
                        type="number"
                        ref={register({
                          required: true
                        })}
                        /> 
                        <label>Postcode/zip</label>
                        <input 
                        name="zipBilling"
                        defaultValue = {""}
                        type="number"
                        ref={register({
                          required: true
                        })}
                        /> 
                        <label>Town/city</label>
                        <input 
                        name="cityBilling"
                        defaultValue = {""}
                        type="text"
                        ref={register({
                          required: true
                        })}
                        /> 
                        <label>Your Email
                         <input 
                         name="email"
                         defaultValue={""}
                         type="text" 
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

export default ModalVinylForm

