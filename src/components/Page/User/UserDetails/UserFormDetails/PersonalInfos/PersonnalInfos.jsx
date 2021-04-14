import React from 'react'
import { useForm } from 'react-hook-form'


const ChangeInfos = () => {
    const {register, handleSubmit, formState, errors} = useForm()
    const {isSubmitting} = formState
  
    const onSubmit = (data) => {
      console.log(data)
    }
  
    return (
        <>
                
                    <div id="changeUserInfos">
                        <h1>Your Personnal Infos</h1>
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
                     <label>Enter your email</label>
                       <input 
                       type="text"
                       name="email"
                       placeholder='your email here' 
                       ref={register
                         ({
                           pattern: {
                             value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                           },
                           required: true})}
                        /> 
                        {errors.email && <span className="error">Email invalid!</span>}
                    <input disabled={isSubmitting} type="submit" value="Change Details"/>
                </form>
                </div>
            
        </>
    )
}

export default ChangeInfos
