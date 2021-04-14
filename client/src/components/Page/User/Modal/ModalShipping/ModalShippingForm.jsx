import React, {useState , useContext, useEffect} from 'react'
import {useForm} from 'react-hook-form'
import { UidContext } from '../../../../AppContext';
import axios from "axios"

const ModalShippingform = () => {
  const { register, handleSubmit, errors } = useForm();
  const { uid } = useContext(UidContext);
  const [formValue, setFormValue] = useState({});
  const [loading, setLoading] = useState(true);

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
        <>
          <div className="modalBillingForm">
            <h1>Shipping Adress</h1>
            <div className="modalInput">
              <form onSubmit={handleSubmit(onSubmit)}>
                <label>Your first name</label>
                <input
                  name="first_nameShipping"
                  defaultValue={formValue.adress_shipping.first_nameShipping}
                  ref={register({
                    required: true,
                  })}
                />

                <label>Your last name</label>
                <input
                  name="last_nameShipping"
                  defaultValue={formValue.adress_shipping.last_nameShipping}
                  type="text"
                  ref={register({
                    required: true,
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
                  name="streetShipping"
                  defaultValue = {formValue.adress_shipping.streetShipping}
                  type="text"
                  ref={register({
                    required: true,
                  })}
                />
                <label>N°</label>
                <input
                  name="numberShipping"
                  defaultValue = {formValue.adress_shipping.numberShipping}
                  type="number"
                  ref={register({
                    required: true,
                  })}
                />
                <label>Postcode/zip</label>
                <input
                  name="zipShipping"
                  defaultValue = {formValue.adress_shipping.zipShipping}
                  type="number"
                  ref={register({
                    required: true,
                  })}
                />
                <label>Town/city</label>
                <input
                  name="cityShipping"
                  defaultValue = {formValue.adress_shipping.cityShipping}
                  type="text"
                  ref={register({
                    required: true,
                  })}
                />
                <label>
                  Your Email
                  <input
                    name="email"
                    defaultValue={formValue.email}
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
                  name="phonenumber"
                  value = {formValue.phonenumber}
                  type="number"
                  ref={register({
                    // required: true,
                  })}
                />
                <input type="submit" />
              </form>
            </div>
          </div>
        </>
      ) : (
        <p>loading</p>
      )}
    </>
  );
}
export default ModalShippingform
