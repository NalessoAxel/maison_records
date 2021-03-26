import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import UserHeader from './UserHeader'


const LogIn = () => {
  const {register, handleSubmit, formState, errors} = useForm()
  const {isSubmitting} = formState

  const onSubmit = (data) => {
    console.log(data)
  }

    return (
        <>
        <UserHeader />
      <div id="ChangeUserInfos">
        <h1>Your Personnal Infos</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="loginGroup">
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
          <label>Enter your email
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
           </label>
           </div>
           <div className="loginGroup">
         
        </div>
        <div className="loginCheckbox">
            <input className="checkbox" type="checkbox" name="rememberMe"/>
            <p>Remember me</p>
        </div>
        <input disabled={isSubmitting} type="submit" value="Change Details"/>
      </form>

      <div id="changePassword">
        <h1>Register your account</h1>
          <form className="userCreate" onSubmit={handleSubmit(onSubmit)}>
            
            <div className="createUserDetails">
              
              <label>Current Password 
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
        <label>New password
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
        <label>Confirm new password
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
            <input type="submit" value="Change Password"/>
          </form>
          
      </div>
      
      </div>
      </>
    )
  }


export default LogIn