const UserModel = require('../models/user.model');
const { signUpErrors, signInErrors } = require('../utils/errors.utils');

module.exports.signUp = async (req, res)=>{
    const {email, first_name, last_name, password} = req.body

    try {
        const user = await UserModel.create({email, first_name, last_name, password});
        res.status(201).json({ userMessage : user._id})
        const validate= "profil created beeetch"
    }
    catch(err) {
        const errors = signUpErrors(err);
        res.status(201).json({ errors })
    }
}