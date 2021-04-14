import React from 'react'
import { useForm } from 'react-hook-form'


const ChangePassword = () => {

    const {register, handleSubmit, formState, errors} = useForm()
    const {isSubmitting} = formState
    const onSubmit = (data) => {
      console.log(data)
    }
    return (
        <>
            <div id="changePassword">
                <h1>Change Your Password</h1>
                    <form  onSubmit={handleSubmit(onSubmit)}>
                    <label>Current Password</label> 
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
            
              <label>New password  </label>
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
              
              <label>Confirm new password</label>
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
          
                  
                  <input disabled={isSubmitting} type="submit" value="Change Password"/>
                </form>
                
                </div>
        
            

        </>
    )
}

export default ChangePassword
