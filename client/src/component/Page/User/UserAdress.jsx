import React from 'react'
import UserHeader from './UserHeader'
import LogicModal from './Modal/LogicModal'
import ModalBilling from './Modal/ModalBilling/ModalBilling'
import ModalShipping from './Modal/ModalShipping/ModalShipping'


const UserAdress = () => {
    console.log(`
    ──────────────────────────────────
    ──────▄▀▀▄────────────────▄▀▀▄────
    ─────▐▒▒▒▒▌──────────────▌▒▒▒▒▌───
    ─────▌▒▒▒▒▐─────────────▐▒▒▒▒▒▐───
    ────▐▒▒▒▒▒▒▌─▄▄▄▀▀▀▀▄▄▄─▌▒▒▒▒▒▒▌──
    ───▄▌▒▒▒▒▒▒▒▀▒▒▒▒▒▒▒▒▒▒▀▒▒▒▒▒▒▐───
    ─▄▀▒▐▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▌───
    ▐▒▒▒▌▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▐───
    ▌▒▒▌▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▌──
    ▒▒▐▒▒▒▒▒▒▒▒▒▄▀▀▀▀▄▒▒▒▒▒▄▀▀▀▀▄▒▒▐──
    ▒▒▌▒▒▒▒▒▒▒▒▐▌─▄▄─▐▌▒▒▒▐▌─▄▄─▐▌▒▒▌─
    ▒▐▒▒▒▒▒▒▒▒▒▐▌▐█▄▌▐▌▒▒▒▐▌▐█▄▌▐▌▒▒▐─
    ▒▌▒▒▒▒▒▒▒▒▒▐▌─▀▀─▐▌▒▒▒▐▌─▀▀─▐▌▒▒▒▌
    ▒▌▒▒▒▒▒▒▒▒▒▒▀▄▄▄▄▀▒▒▒▒▒▀▄▄▄▄▀▒▒▒▒▐
    ▒▌▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▄▄▄▒▒▒▒▒▒▒▒▒▒▒▐
    ▒▌▒▒▒▒▒▒▒▒▒▒▒▒▀▒▀▒▒▒▀▒▒▒▀▒▀▒▒▒▒▒▒▐
    ▒▌▒▒▒▒▒▒▒▒▒▒▒▒▒▀▒▒▒▄▀▄▒▒▒▀▒▒▒▒▒▒▒▐
    ▒▐▒▒▒▒▒▒▒▒▒▒▀▄▒▒▒▄▀▒▒▒▀▄▒▒▒▄▀▒▒▒▒▐
    ▒▓▌▒▒▒▒▒▒▒▒▒▒▒▀▀▀▒▒▒▒▒▒▒▀▀▀▒▒▒▒▒▒▐
    ▒▓▓▌▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▌
    ▒▒▓▐▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▌─
    ▒▒▓▓▀▀▄▄▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▐──
    ▒▒▒▓▓▓▓▓▀▀▄▄▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▄▄▀▀▒▌─
    ▒▒▒▒▒▓▓▓▓▓▓▓▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▒▒▒▒▒▐─
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▌
    ▒▒▒▒▒▒▒█▒█▒█▀▒█▀█▒█▒▒▒█▒█▒█▒▒▒▒▒▒▐
    ▒▒▒▒▒▒▒█▀█▒█▀▒█▄█▒▀█▒█▀▒▀▀█▒▒▒▒▒▒▐
    ▒▒▒▒▒▒▒▀▒▀▒▀▀▒▀▒▀▒▒▒▀▒▒▒▀▀▀▒▒▒▒▒▒▐
    █▀▄▒█▀▄▒█▀▒█▀█▒▀█▀▒█▒█▒█▒█▄▒█▒▄▀▀▐
    █▀▄▒█▀▄▒█▀▒█▄█▒▒█▒▒█▀█▒█▒█▀██▒█▒█▐
    ▀▀▒▒▀▒▀▒▀▀▒▀▒▀▒▒▀▒▒▀▒▀▒▀▒▀▒▒▀▒▒▀▀▐
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▐`
    );

    const {revel, toggle} = LogicModal()

    return (
        <>
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
                    <p>Axel Nalesso</p>
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
                    <p>Axel Nalesso</p>
                    <p>Avenue Ducpétiaux 30</p>
                    <p>1060 Saint Gilles</p>
                    <p>Belgium</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserAdress
