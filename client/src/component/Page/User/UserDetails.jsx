import React, { useContext, useState , useEffect} from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import UserHeader from './UserHeader'
import axios from 'axios'
import { UidContext } from '../../AppContext';


const LogIn = () => {

  const [formSubmit, setFormSubmit] = useState(false);
  const {register, handleSubmit, formState, errors} = useForm()
  const {isSubmitting} = formState
  // const [confirmNewPassword, setconfirmNewPassword] = useState("")

  const {uid} = useContext(UidContext)

  const onSubmit = async (formAnswers) => {
      
      try {
        const res = await axios({
          method: "patch",
          url: `${process.env.REACT_APP_API_URL}api/user/update/` + uid.id,
          withCredentials: true,
          data: formAnswers,
        })
        setFormSubmit(true)
        // setconfirmNewPassword("Password changed successfully")
      } catch (err) {
        console.log(err);
      } 
  
  };

  return (
    <>
    {formSubmit ? (
        <h3>Password changed successfully</h3>
        ) : (
          <>
      <UserHeader />
      <div id="userInfosChange">
        <div id="changeUserInfos">
          <h1>Your Personnal Infos</h1>
          {/* <form onSubmit={handleSubmit(onSubmit)}>
            
           
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
    </form> */}


        </div>
        <div id="changePassword">
          <h1>Modify your password</h1>
          <form className="userCreate" onSubmit={handleSubmit(onSubmit)}>
              {/* <form className="userCreate" onSubmit={handleSubmit(onSubmit)}> */}

            <label>Current Password</label>
            <input
              type="password"
              name="password"
              placeholder="your password"
              ref={register({
                // pattern: {
                //   value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/
                // },
                // min: {
                //   value: 8
                // },
                required: true,
              })}
            />
            {errors.password && (
              <span className="error">
                Password is too short, 8 characters minimum!
              </span>
            )}

            <label>New password </label>
            <input
              type="password"
              name="newPassword"
              placeholder="your password"
              ref={register({
                // pattern: {
                //   value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/
                // },
                // min: {
                //   value: 8
                // },
                required: true,
              })}
            />
            {errors.password && (
              <span className="error">
                Password is too short, 8 characters minimum!
              </span>
            )}

            {/* <label>Confirm new password</label>
            <input
              type="password"
              name="confirmNewPassword"
              placeholder="your password"
              ref={register({
                // pattern: {
                //   value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/
                // },
                // min: {
                //   value: 8
                // },
                required: true,
              })}
            /> */}
            {errors.password && (
              <span className="error">
                Password is too short, 8 characters minimum!
              </span>
            )}

              <input disabled={isSubmitting} 
                type="submit" 
                value="Change password" />
              </form> 
              {/* <h3>{confirmNewPassword}</h3> */}

        </div>
      </div>
      </>
        )}
    </>
  );
  }


export default LogIn