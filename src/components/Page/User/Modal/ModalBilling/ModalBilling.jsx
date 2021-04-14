import React from 'react'

import ModalBillingform from './ModalBillingform'



const ModalBilling = ({revel, cache}) => revel ? (

    <React.Fragment>
        <div className="overlayModal">
            <div className="wrapperModal">
                <div className="modal">
                    <button type="button" onClick={cache}>
                        <span>&times;</span>
                    </button>
                    <ModalBillingform />
                    
                </div>
            </div>
        </div>
    </React.Fragment>

) : null

export default ModalBilling