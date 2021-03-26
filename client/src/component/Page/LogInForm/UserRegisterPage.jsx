import React from 'react'
import LogIn from './Signform/LogIn'
import Register from './Signform/Register'

const UserRegisterPage = () => {
    return(
        <>
        <div className="registerForm">
        <LogIn />
        <Register />
        </div>
        </>
    )
}

export default UserRegisterPage