import React, {useState} from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import axios from 'axios';


const LogIn = () => {
  const {register, handleSubmit, formState, errors} = useForm()
  const {isSubmitting} = formState

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('')
  
  const onSubmit = async (formAnswers) => {
    console.log(formAnswers)

    await axios({
      method: "post",
      url: `${process.env.REACT_APP_API_URL}api/user/login`,
      withCredentials: true,
      data: formAnswers
    })
    .then((res)=>{
      if(res.data.erros){
        setEmailError(res.data.erros.email);
        setPasswordError(res.data.erros.password);
      }
      if (res.data.admin){
        window.location = '/AdminPage'
      }else{
        window.location = '/New' // A MODIFIER SI ON VEUT 
        console.log(res.data);
      }
    })
    .catch((err)=>{
      console.log(err);
    })

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
                // pattern: {
                //   value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                // },
                required: true})}
             /> 
             {errors.email && <span className="error">Email invalid!</span>}
             <div>{ emailError }</div>
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
        {errors.password && <span className="error">Wrong password</span>}
        <div>{ passwordError }</div>
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