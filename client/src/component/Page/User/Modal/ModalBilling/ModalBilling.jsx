import React, { useState, useContext, useEffect} from 'react'
import Modal from 'react-modal'
import ModalBillingform from './ModalBillingform'
import { UidContext } from '../../../../AppContext';
import axios from 'axios'


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
            <div className="billingAdress">
                <div className="title">
                    <h3>Billing adress</h3>
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
                                        <ModalBillingform />
                                </div>
                            </div>
                        </div>
                    </Modal>
                </div>
                {!loading ? (
                    <div className="userBillingAdress">
                    <p>{formValue.adress_billing.first_nameBilling} {formValue.adress_billing.last_nameBilling}</p>
                    <p>{formValue.adress_billing.streetBilling} {formValue.adress_billing.numberBilling}</p>
                    <p>{formValue.adress_billing.zipBilling} {formValue.adress_billing.cityBilling}</p>
                    <p>Belgium</p>
                    </div>
                ) : (
                    <p>Loading ... </p>
                )}
            </div>
        </>
    )
}

export default ModalShipping



