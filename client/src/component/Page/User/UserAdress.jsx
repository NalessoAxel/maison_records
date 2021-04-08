import React, { useContext, useState , useEffect} from 'react'
import UserHeader from './UserHeader'
import LogicModal from './Modal/LogicModal'
import ModalBilling from './Modal/ModalBilling/ModalBilling'
import ModalShipping from './Modal/ModalShipping/ModalShipping'
import { UidContext } from '../../AppContext';
import axios from 'axios'


const UserAdress = () => {
    // console.log(`
    //       ▄▀▀▄                ▄▀▀▄
    //      ▐▒▒▒▒▌              ▌▒▒▒▒▌
    //      ▌▒▒▒▒▐             ▐▒▒▒▒▒▐
    //     ▐▒▒▒▒▒▒▌─▄▄▄▀▀▀▀▄▄▄─▌▒▒▒▒▒▒▌
    //    ▄▌▒▒▒▒▒▒▒▀▒▒▒▒▒▒▒▒▒▒▀▒▒▒▒▒▒▐
    //  ▄▀▒▐▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▌
    // ▐▒▒▒▌▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▐
    // ▌▒▒▌▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▌
    // ▒▒▐▒▒▒▒▒▒▒▒▒▄▀▀▀▀▄▒▒▒▒▒▄▀▀▀▀▄▒▒▐
    // ▒▒▌▒▒▒▒▒▒▒▒▐▌ ▄▄ ▐▌▒▒▒▐▌ ▄▄ ▐▌▒▒▌
    // ▒▐▒▒▒▒▒▒▒▒▒▐▌▐█▄▌▐▌▒▒▒▐▌▐█▄▌▐▌▒▒▐
    // ▒▌▒▒▒▒▒▒▒▒▒▐▌ ▀▀ ▐▌▒▒▒▐▌ ▀▀ ▐▌▒▒▒▌
    // ▒▌▒▒▒▒▒▒▒▒▒▒▀▄▄▄▄▀▒▒▒▒▒▀▄▄▄▄▀▒▒▒▒▐
    // ▒▌▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▄▄▄▒▒▒▒▒▒▒▒▒▒▒▐
    // ▒▌▒▒▒▒▒▒▒▒▒▒▒▒▀▒▀▒▒▒▀▒▒▒▀▒▀▒▒▒▒▒▒▐
    // ▒▌▒▒▒▒▒▒▒▒▒▒▒▒▒▀▒▒▒▄▀▄▒▒▒▀▒▒▒▒▒▒▒▐
    // ▒▐▒▒▒▒▒▒▒▒▒▒▀▄▒▒▒▄▀▒▒▒▀▄▒▒▒▄▀▒▒▒▒▐
    // ▒▓▌▒▒▒▒▒▒▒▒▒▒▒▀▀▀▒▒▒▒▒▒▒▀▀▀▒▒▒▒▒▒▐
    // ▒▓▓▌▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▌
    // ▒▒▓▐▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▌
    // ▒▒▓▓▀▀▄▄▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▐
    // ▒▒▒▓▓▓▓▓▀▀▄▄▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▄▄▀▀▒▌
    // ▒▒▒▒▒▓▓▓▓▓▓▓▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▒▒▒▒▒▐
    // ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▌
    // ▒▒▒▒▒▒▒█▒█▒█▀▒█▀█▒█▒▒▒█▒█▒█▒▒▒▒▒▒▐
    // ▒▒▒▒▒▒▒█▀█▒█▀▒█▄█▒▀█▒█▀▒▀▀█▒▒▒▒▒▒▐
    // ▒▒▒▒▒▒▒▀▒▀▒▀▀▒▀▒▀▒▒▒▀▒▒▒▀▀▀▒▒▒▒▒▒▐
    // █▀▄▒█▀▄▒█▀▒█▀█▒▀█▀▒█▒█▒█▒█▄▒█▒▄▀▀▐
    // █▀▄▒█▀▄▒█▀▒█▄█▒▒█▒▒█▀█▒█▒█▀██▒█▒█▐
    // ▀▀▒▒▀▒▀▒▀▀▒▀▒▀▒▒▀▒▒▀▒▀▒▀▒▀▒▒▀▒▒▀▀▐
    // ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▐`
    // );

    const {revel, toggle} = LogicModal()
    const {uid} = useContext(UidContext)
    
    const [loading, setLoading] = useState(true);
    const [formValue, setFormValue] = useState({});

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
        {uid ? (
            <>
                {!uid.admin ? (<>
                <UserHeader />
                <div className="adress">
                    <div className="billingAdress">
                        <div className="title">
                            <h3>Billing adress</h3>
                            <button onClick={toggle}>Edit</button>
                            <ModalBilling
                                revel={revel}
                                cache={toggle}
                            />
                        </div>
                        <div className="userBillingAdress">
                            <p>{formValue.first_name} {formValue.last_name}</p>
                            <p>{formValue.adress_billing.street} {formValue.adress_billing.number}</p>
                            <p>{formValue.adress_billing.zip} {formValue.adress_billing.city}</p>
                            <p>Belgium</p>
                        </div>
                    </div>
                    <div className="shippingAdress">
                        <div className="title">
                            <h3>Shipping adress</h3>
                            <button onClick={toggle}>Edit</button>
                            <ModalShipping
                                revel={revel}
                                cache={toggle}
                            />
                        </div>
                        <div className="userShippingAdress">
                            <p>{formValue.first_name} {formValue.last_name}</p>
                            <p>{formValue.adress_shipping.street} {formValue.adress_shipping.number}</p>
                            <p>{formValue.adress_shipping.zip} {formValue.adress_shipping.city}</p>
                            <p>Belgium</p>
                        </div>
                    </div>
                </div>
            </>) : (
                <p>You're an admin so not supposed to be here</p>
            )}
            </>
        ) : (
            <p>Please login if you're attempting to reach your profile.</p>
        )}
        
        </>
):(  <p>loading</p>)
}
   </>) 
}

export default UserAdress
