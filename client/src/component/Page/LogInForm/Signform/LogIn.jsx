import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'


const LogIn = () => {
  const {register, handleSubmit, formState, errors} = useForm()
  const {isSubmitting} = formState

  const onSubmit = (data) => {
    console.log(data)
  }

    return (
      <div id="login">
        <h1>Login</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="loginGroup">
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
           
            required: true})}
        />
        {errors.password && <span className="error">You need a password</span>}
        </label>
        </div>
        <div className="loginCheckbox">
            <input className="checkbox" type="checkbox" name="rememberMe"/>
            <p>Remember me</p>
        </div>
        <input disabled={isSubmitting} type="submit"/>
      </form>
     
      <p>
        <Link to="/resetPassword">
          Reset your password
        </Link>
      </p>
      </div>
    )
  }


export default LogIn