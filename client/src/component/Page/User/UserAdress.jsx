import React from 'react'
import UserHeader from './UserHeader'

import ModalBilling from './Modal/ModalBilling/ModalBilling'
import ModalShipping from './Modal/ModalShipping/ModalShipping'



const UserAdress = () => {

    

    return (
        <>
        <UserHeader />
            <div className="adress">
            
            <ModalBilling />
            <ModalShipping />
            </div>
        </>
    )
}

export default UserAdress
