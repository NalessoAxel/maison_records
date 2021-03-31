import React, { useLayoutEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios';

const Register = () => {
    
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

  const {register, handleSubmit, errors} = useForm({
    
  })
  
  const onSubmit = async (formAnswers) => {
    
    // console.log(formAnswers) // renvoi un obj json

    await axios({
      method: "post",
      url: `${process.env.REACT_APP_API_URL}api/user/register`,
      withCredentials:true,
      data: formAnswers // = email: formAnswer.email..
    })

      .then((res)=>{
      if(res.data.errors){
        console.log(res.data.errors);
        setEmailError(res.data.errors.email);
        setPasswordError(res.data.errors.password);
      }
    })
      .catch((err)=>console.log(err));
  }
  
    return (
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
                    pattern: {
                      value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                    },
                    required: true})}
                /> 
                {errors.email && <span className="error">Email invalid!</span>}
                <div>{ emailError }</div>
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
            //   value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/
            // },
            // min: {
            //   value: 8
            // },
            required: true})
          }
        />
        {errors.password && <span className="error">Password is too short, 8 characters minimum!</span>}
            <div>{ passwordError }</div>
        </label>
            </div> 
            <input type="submit"/>
          </form>
          
      </div>
    )
  }


export default Register
