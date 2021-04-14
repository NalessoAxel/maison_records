import React, { useState, useContext, useEffect } from 'react'
import Modal from 'react-modal'
import ModalShippingform from './ModalShippingForm'
import { UidContext } from '../../../../AppContext';
import axios from "axios"


const ModalShipping = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const { uid } = useContext(UidContext);
    const [formValue, setFormValue] = useState({});

    const [loading, setLoading] = useState(true);

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
        <div className="adress">
               
               
               <div className="shippingAdress">
               <div className="title">
                   <h3>Shipping adress</h3>
                   <button onClick={() => setModalIsOpen(true) }>Edit</button>
                   <Modal 
                   style={{
                    overlay: {
                        backgroundColor: 'rgba(0,0,0,0.5)',
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        left: 0,
                        bottom: 0,
                        overflow: 'hidden',
                    },
                    content: {
                        display: 'flex',
                        flexDirection: 'column',
                        width: '306px',
                        height: '650px',
                        backgroundColor: '#C4C4C4',
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        overflow: 'hidden',
                    }
                }}
                   isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
                   <div className="overlayModal">
               <div className="wrapperModal">
               <div className="modal">
               <button type="button" onClick={() => setModalIsOpen(false)}>
                   <span>&times;</span>
               </button>
               
               <ModalShippingform />
               
               </div>
               </div>
               </div>
                   </Modal>
               </div>
               {!loading ? (
                   <div className="userShippingAdress">
                   <p>{formValue.adress_shipping.first_nameShipping} {formValue.adress_shipping.last_nameShipping}</p>
                   <p>{formValue.adress_shipping.streetShipping} {formValue.adress_shipping.numberShipping} </p>
                   <p>{formValue.adress_shipping.zipShipping} {formValue.adress_shipping.cityShipping}</p>
                   <p>Belgium</p>
                   </div>
                ) : (
                    <p>Loading ... </p>
                ) }
               </div>
               </div>
        </>
    )
}

export default ModalShipping



