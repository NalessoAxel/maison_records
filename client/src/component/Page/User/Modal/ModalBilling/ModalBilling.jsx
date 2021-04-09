import React, { useState} from 'react'
import Modal from 'react-modal'
import ModalBillingform from './ModalBillingform'
const ModalShipping = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false)
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
                <div className="userBillingAdress">
               <p>Axel Nalesso</p>
               <p>Avenue Ducpétiaux 30</p>
               <p>1060 Saint Gilles</p>
               <p>Belgium</p>
               </div>
               
            </div>
        </>
    )
}

export default ModalShipping



