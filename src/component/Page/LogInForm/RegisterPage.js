import React from 'react'
import LogIn from './Signform/LogIn'
import Register from './Signform/Register'

const RegisterPage = () => {
    return(
        <>
        <div className="registerForm">
        <LogIn />
        <Register />
        </div>
        </>
    )
}

export default RegisterPage