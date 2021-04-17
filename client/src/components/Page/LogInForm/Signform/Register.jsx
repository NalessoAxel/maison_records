import React, { useLayoutEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios';

const Register = () => {
    const [formSubmit, setFormSubmit] = useState(false);
    const [emailError, setEmailError] = useState('');
    

  const {register, handleSubmit, formState, errors} = useForm()
  const {isSubmitting} = formState
  
  const onSubmit = async (formAnswers) => {
    
    try {
      const res = await axios({
        method: "post",
        url: `${process.env.REACT_APP_API_URL}api/user/register`,
        withCredentials:true,
        data: formAnswers
      })
      setFormSubmit(true)
    } catch(err) {
      setEmailError('Incorrect email or already registered')
    }
        
  }
  
  
    return (
      <>
      {formSubmit ? (
        <h3>Welcome to Maison Records - please log in</h3>
        ) : (
          <div id="register">
        <h1>Register your account</h1>
          <form className="userCreate" onSubmit={handleSubmit(onSubmit)}>  
          {/* handlesubmit renvoi un obj json de onSubmit*/}
            <div className="createUserDetails">
              <label>Your Email
                <input 
                name="email"
                // name = meme nom que bdd
                placeholder='your email here'
                type="text" 
                ref={register
                  ({
                
                    required: true})}
                /> 
                <div className="error">{ emailError }</div>
                </label>
            </div>
            <div className="createUserDetails">
              <label>Your first name
                <input 
                 name="first_name"
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
                name="last_name"
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
            //   value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}$/
            // },
            min: {
              value: 6
            },
            required: true})
          }
        />
        {errors.password && <span className="error">Password must contain at least 6 charachers and 1 capital letter </span>}
      
        </label>
            </div> 
            <input disabled={isSubmitting} type="submit"/>
          </form>
          
      </div>

        )}
      </>
    )
  }


export default Register
