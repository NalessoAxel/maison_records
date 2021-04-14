import React, {useState , useContext, useEffect} from 'react'
import {useForm} from 'react-hook-form'
import { UidContext } from '../../../../AppContext';
import axios from "axios"

const ModalBillingform = () => {
    const {register, handleSubmit, errors} = useForm()
    const { uid } = useContext(UidContext);
    const [formValue, setFormValue] = useState({});
    const [loading, setLoading] = useState(true);

    const onSubmit = async (formAnswers) => {
        console.log(formAnswers)
        try {
          const res = await axios({
            method: "patch",
            url: `${process.env.REACT_APP_API_URL}api/user/update/` + uid.id,
            withCredentials: true,
            data: formAnswers,
          });
          window.location =""  // reload page 
        } catch (err) {
          console.log(err);
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
          console.log(res.data);
        } catch (err) {
          console.log(err);
        }
      };
      getInfo();
    }, []);


    return (
        <>
        {!loading ? (
          <>
            <div className="modalBillingForm">
                <h1>Billing Adress</h1>
                <div className="modalInput">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label>Your first name</label>
                        <input 
                        name="first_nameBilling"
                        defaultValue={formValue.first_nameBilling}
                        ref={register({
                          required: true
                        })}
                        /> 
                        
                        <label>Your last name</label>
                        <input 
                        name="last_nameBilling"
                        defaultValue={formValue.last_nameBilling}
                        type="text"
                        ref={register({
                          required: true
                        })}
                        /> 
                        
                        <label>Companie (optional)</label>
                        <input 
                        name="companie"
                         // value = {formValue.companie}
                        type="text"
                        ref={register({
                          // required: true
                        })}
                        /> 
                        
                        <label>Street Name</label>
                        <input 
                        name="streetBilling"
                        defaultValue = {formValue.adress_billing.streetBilling}
                        type="text"
                        ref={register({
                          required: true
                        })}
                        /> 
                         <label>N°</label>
                        <input 
                        name="numberBilling"
                        defaultValue = {formValue.adress_billing.numberBilling}
                        type="number"
                        ref={register({
                          required: true
                        })}
                        /> 
                        <label>Postcode/zip</label>
                        <input 
                        name="zipBilling"
                        defaultValue = {formValue.adress_billing.zipBilling}
                        type="number"
                        ref={register({
                          required: true
                        })}
                        /> 
                        <label>Town/city</label>
                        <input 
                        name="cityBilling"
                        defaultValue = {formValue.adress_billing.cityBilling}
                        type="text"
                        ref={register({
                          required: true
                        })}
                        /> 
                        <label>Your Email
                         <input 
                         name="email"
                         defaultValue={formValue.email}
                         type="tesxt" 
                         ref={register
                           ({
                             pattern: {
                               value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                             },
                             required: true})}
                         /> 
                         {errors.email && <span className="error">Email invalid!</span>}
                         </label>
                         <label>Phone Number</label>
                        <input 
                        name="phonenumber"
                        value = {formValue.phonenumber}
                        type="number"
                        ref={register({
                          // required: true
                        })}
                        /> 
                        <input type="submit"/>
                    </form>
                </div>
            </div>
        </>
        ) : ( 
          <p>loading</p>
        )}
      </>
    )
}

export default ModalBillingform
