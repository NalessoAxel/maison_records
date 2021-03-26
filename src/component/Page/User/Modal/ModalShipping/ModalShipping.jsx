import React from 'react'
import ModalShippingForm from './ModalShippingForm'


const ModalShipping= ({revel, cache}) => revel ? (

    <React.Fragment>
        <div className="overlayModal">
            <div className="wrapperModal">
                <div className="modal">
                    <button type="button" onClick={cache}>
                        <span>&times;</span>
                    </button>
                    
                    <ModalShippingForm />
                </div>
            </div>
        </div>
    </React.Fragment>

) : null

export default ModalShipping