import React from 'react'
import { useForm } from 'react-hook-form'

const Register = () => {
  const {register, handleSubmit, errors} = useForm({
  
  })



  const onSubmit = (data) => {
    console.log(data)
  }
    return (
      <div id="register">
        <h1>Register your account</h1>
          <form className="userCreate" onSubmit={handleSubmit(onSubmit)}>
            <div className="createUserDetails">
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
            </div>
            <div className="createUserDetails">
              <label>Your first name
                <input 
                 name="firstName"
                placeholder='first name'
                ref={register({
                  required: true
                })}
                /> 
                </label>
            </div>
            <div className="createUserDetails">
                <label>Your last name
                <input 
                name="lastName"
                placeholder='last name'
                type="text"
                ref={register({
                  required: true
                })}
                /> 
                </label>
            </div>
            <div className="createUserDetails">
              
              <label>Enter your password 
        <input 
        type="password"
        name="password"
        placeholder='your password' 
        ref={register
          ({
            // pattern: {
            //   value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/
            // },
            // min: {
            //   value: 8
            // },
            required: true})
          }
        />
        {errors.password && <span className="error">Password is too short, 8 characters minimum!</span>}
        </label>
            </div> 
            <input type="submit"/>
          </form>
          
      </div>
    )
  }


export default Register
