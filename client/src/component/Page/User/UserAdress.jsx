import React, { useContext, useState } from 'react'
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

    // if(loading){ 
    //     return <h3> Loading ...  </h3> }
    



    
    return (
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
                            <p>Hola FLO</p>
                            <p>Avenue Ducpétiaux 30</p>
                            <p>1060 Saint Gilles</p>
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
                            <p>bliblibly</p>
                            <p>Avenue Ducpétiaux 30</p>
                            <p>1060 Saint Gilles</p>
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
    )
}

export default UserAdress
