import React, {useContext} from 'react'
import {useForm} from 'react-hook-form'
import { UidContext } from '../../../../AppContext';
import axios from "axios"

const ModalShippingform = () => {
  const { register, handleSubmit, errors } = useForm();
  const { uid } = useContext(UidContext);
  
  const onSubmit = async (formAnswers) => {
    
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
  };

  return (
    <>
          <div className="modalBillingForm">
            <h1>Shipping Adress</h1>
            <div className="modalInput">
              <form onSubmit={handleSubmit(onSubmit)}>
                <label>Your first name</label>
                <input
                  name="first_nameShipping"
                  defaultValue={uid.adress_shipping.first_nameShipping}
                  ref={register({
                    required: true,
                  })}
                />

                <label>Your last name</label>
                <input
                  name="last_nameShipping"
                  defaultValue={uid.adress_shipping.last_nameShipping}
                  type="text"
                  ref={register({
                    required: true,
                  })}
                />
                <label>Street Name</label>
                <input
                  name="streetShipping"
                  defaultValue = {uid.adress_shipping.streetShipping}
                  type="text"
                  ref={register({
                    required: true,
                  })}
                />
                <label>N°</label>
                <input
                  name="numberShipping"
                  defaultValue = {uid.adress_shipping.numberShipping}
                  type="number"
                  ref={register({
                    required: true,
                  })}
                />
                <label>Postcode/zip</label>
                <input
                  name="zipShipping"
                  defaultValue = {uid.adress_shipping.zipShipping}
                  type="number"
                  ref={register({
                    required: true,
                  })}
                />
                <label>Town/city</label>
                <input
                  name="cityShipping"
                  defaultValue = {uid.adress_shipping.cityShipping}
                  type="text"
                  ref={register({
                    required: true,
                  })}
                />
                <label>
                  Your Email
                  <input
                    name="email"
                    defaultValue={uid.email}
                    type="text"
                    ref={register({
                      pattern: {
                        value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                      },
                      required: true,
                    })}
                  />
                  {errors.email && (
                    <span className="error">Email invalid!</span>
                  )}
                </label>
                <label>Phone Number</label>
                <input
                  name="phonenumberShipping"
                  defaultValue = {uid.adress_shipping.phonenumberShipping}
                  type="number"
                  ref={register({
                  })}
                />
                <br/>
                <input type="submit" />
              </form>
            </div>
          </div>
        </>
  );
}
export default ModalShippingform
