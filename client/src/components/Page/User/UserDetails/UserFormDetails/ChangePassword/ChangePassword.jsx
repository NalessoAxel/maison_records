import React, { useContext, useState , useEffect} from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import UserHeader from '../../../UserHeader'
import axios from 'axios'
import { UidContext } from '../../../../../AppContext';


const ChangePassword = () => {

  const [formSubmit, setFormSubmit] = useState(false);
  const {register, handleSubmit, formState, errors} = useForm()
  const {isSubmitting} = formState
  // const [confirmNewPassword, setconfirmNewPassword] = useState("")
  const [wrongPassword, setWrongPassword] = useState("")

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
        // window.location=""
        // setconfirmNewPassword("Password changed successfully")
      } catch(err) {
        setWrongPassword("Unknown password")
      } 
  
  };

  return (
    <>
    {formSubmit ? (
        <h3>Password changed successfully</h3>
        ) : (
    
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
            <div className="error">{wrongPassword}</div>

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
       

      
        )}
    </>
  );
  }


export default ChangePassword