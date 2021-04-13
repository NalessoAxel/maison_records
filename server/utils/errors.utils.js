module.exports.signUpErrors = (err) => {
    let errors = { email: '', password: ''}

    if(err.message.includes('email'))
        errors.email = "Incorrect email or already registered"
    
    if(err.message.includes('password'))
        errors.password = "The password must be 6 or more characters"

    if(err.code === 1100 && Object.keys(err.keyValue)[0].includes('email'))
    errors.email = "Email already registered"

    return errors
}

 // erreur de connexion 
module.exports.signInErrors = (err) => {
    let errors = { email : '', password: '' }

    if(err.message.includes('email'))
        errors.email = "Email or password unknown"
    
    if(err.message.includes('password'))
        errors.password = "Email or password unknown"

    return errors
}