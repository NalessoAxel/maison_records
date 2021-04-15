import React, {useContext, useState} from 'react'
import { useForm} from 'react-hook-form'
import { UidContext } from '../../../../../AppContext';
import axios from "axios"


const ChangeInfos = () =>  {
    const {register, handleSubmit, formState, errors} = useForm()
    const {isSubmitting} = formState

    const [formSubmit, setFormSubmit] = useState(false);
    const { uid } = useContext(UidContext);
    
    const onSubmit = async (formAnswers) => {
      try{
        const res = await axios({
          method: "patch",
          url:`${process.env.REACT_APP_API_URL}api/user/update/`+uid.id,
          withCredentials: true,
          data: formAnswers,
        });
        setTimeout(() => {
          window.location = ''
        }, 1500);
        
        setFormSubmit(true)

      } catch (err){
        console.log(err)
      }
      
    }
   
    return ( 
        <>
      {formSubmit ? (
          <h3>Your personnal infos changed successfully</h3>
        ) : (               
                  <div id="changeUserInfos">
                  <h1>Your Personnal Infos</h1>
                  <form onSubmit={handleSubmit(onSubmit)}>
                   <label>Your first name</label>
    
                     <input 
                      name="first_name"
                      defaultValue={uid.first_name}
                     ref={register({
                       required: true
                     })}/>

                     <label>Your last name</label>
                     <input 
                     name="last_name"
                     defaultValue={uid.last_name}
                     type="text"
                     ref={register({
                       required: true
                     })}
                     /> 
               <label>Enter your email</label>
                 <input 
                 type="text"
                 name="email"
                 defaultValue={uid.email} 
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
              
        )}     
            
        </>
    )
}

export default ChangeInfos