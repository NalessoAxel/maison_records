import React, {useState, useEffect, useContext} from 'react'
import { useForm} from 'react-hook-form'
import { UidContext } from '../../../../../AppContext';
import axios from "axios"


const ChangeInfos = () => {
    const {register, handleSubmit, formState, errors} = useForm()
    const {isSubmitting} = formState
    const [formValue, setFormValue] = useState({});
    const { uid } = useContext(UidContext);

    const [loading, setLoading] = useState(true);

    const onSubmit = async (formAnswers) => {
      try{
        const res = await ({
          method: "patch",
          url: `${process.env.REACT_APP_API_URL}api/user/update/` + uid.id,
          withCredentials: true,
          data: formAnswers,
        })
        console.log(formAnswers)
        console.log(uid)
      } catch (err){
        console.log(err)
      }
      
    }

    useEffect(() => {
      const getInfo = async () => {
        try {
          const res = await axios({
            method: "get",
            url: `${process.env.REACT_APP_API_URL}api/user/` + uid.id,
            withCredentials: true,
          });
          setFormValue(res.data);
          setLoading(false);

        } catch (err) {
          console.log(err);
        }
      };
      getInfo();
    }, []);
  
    
  
    return (
        <>
                {!loading ? (
                  <div id="changeUserInfos">
                  <h1>Your Personnal Infos</h1>
                  <form onSubmit={handleSubmit(onSubmit)}>
                   <label>Your first name</label>
                     <input 
                      name="first_name"
                      defaultValue={formValue.first_name}
                     ref={register({
                       required: true
                     })}
                     /> 
                     
               
                     <label>Your last name</label>
                     <input 
                     name="last_name"
                     defaultValue={formValue.last_name}
                     type="text"
                     ref={register({
                       required: true
                     })}
                     /> 
               <label>Enter your email</label>
                 <input 
                 type="text"
                 name="email"
                 defaultValue={formValue.email} 
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
                ) : (
                  <p>Loading ... </p>
                )}
                    
            
        </>
    )
}

export default ChangeInfos