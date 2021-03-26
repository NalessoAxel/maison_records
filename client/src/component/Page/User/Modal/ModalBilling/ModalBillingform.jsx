import React from 'react'
import {useForm} from 'react-hook-form'

const ModalBillingform = () => {
    const {register, handleSubmit, errors} = useForm()
    const onSubmit = (data) => {
        console.log(data)
    }
    return (
        <>
            <div className="modalBillingForm">
                <h1>Billing Adress</h1>
                <div className="modalInput">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label>Your first name</label>
                        <input 
                         name="firstName"
                        placeholder='first name'
                        ref={register({
                          required: true
                        })}
                        /> 
                        
                        <label>Your last name</label>
                        <input 
                        name="lastName"
                        placeholder='last name'
                        type="text"
                        ref={register({
                          required: true
                        })}
                        /> 
                        
                        <label>Companie (optional)</label>
                        <input 
                        name="lastName"
                        placeholder='companie name'
                        type="text"
                        ref={register({
                          required: true
                        })}
                        /> 
                        
                        <label>Street Name</label>
                        <input 
                        name="lastName"
                        placeholder='Rue Franz Merjay'
                        type="text"
                        ref={register({
                          required: true
                        })}
                        /> 
                         <label>N°</label>
                        <input 
                        name="streetNumber"
                        placeholder='23'
                        type="number"
                        ref={register({
                          required: true
                        })}
                        /> 
                        <label>Postcode/zip</label>
                        <input 
                        name="zip"
                        placeholder='1040'
                        type="number"
                        ref={register({
                          required: true
                        })}
                        /> 
                        <label>Town/city</label>
                        <input 
                        name="city"
                        placeholder='Brussels'
                        type="text"
                        ref={register({
                          required: true
                        })}
                        /> 
                        <label>Town/city</label>
                        <input 
                        name="city"
                        placeholder='Brussels'
                        type="text"
                        ref={register({
                          required: true
                        })}
                        />
                        <label>Your Email
                         <input 
                         name="email"
                         placeholder='your email here'
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
                        name="zip"
                        placeholder='+32 (0)4 65 43 42 52'
                        type="number"
                        ref={register({
                          required: true
                        })}
                        /> 
                        <input type="submit"/>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ModalBillingform
