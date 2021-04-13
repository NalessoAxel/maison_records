const UserModel = require('../models/user.model');
const jwt = require('jsonwebtoken');
const { signUpErrors, signInErrors } = require('../utils/errors.utils');

//function pour token de jwt
const maxAge = 1 * 24 * 60 * 60 * 1000; // 1 jours de validité (3, 4, 5... jours)
const createToken = (id) => {
    return jwt.sign({id}, process.env.TOKEN_SECRET, {
      expiresIn: maxAge
    })
};


// Create new user
module.exports.signUp = async (req, res)=>{
    const {email, first_name, last_name, password, admin} = req.body
    console.log(req.body);

    try {
        const user = await UserModel.create({email, first_name, last_name, password, admin});
        res.status(201).json({ userMessage : user._id})    
    }
    catch(err) {
        const errors = signUpErrors(err);
        res.status(400).json({ errors })
    }
}


// Function connexion for registered user 
module.exports.signIn = async (req, res) => {
    const { email, password } = req.body

    try{
        const user = await UserModel.login(email, password);
        const token = createToken(user._id);
        res.cookie('jwt', token, {httpOnly: true, maxAge:maxAge});
        res.status(200).json({user:user._id, admin: user.admin});  // recupéré le status de l'admin
    }
    catch (err) {
        const errors = signInErrors(err);
        res.status(401).json({ errors })
    }
}

// function for deconnection
module.exports.logout = (req, res) => {
    res.cookie('jwt', '', { maxAge: 1 }); // 1milliSeconde
    res.redirect('/');
}