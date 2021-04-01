// check token is existant
const jwt = require('jsonwebtoken');
const UserModel = require('../models/user.model');

// check user's token to see if we know him 
module.exports.checkUser = (req, res, next) => {
    const token = req.cookies.jwt;  // cookie.jwt = same thing to "req.body"
    if(token) {
        jwt.verify(token, process.env.TOKEN_SECRET, async (err, decodedToken)=>{
            if(err){
                res.locals.user = null; // res.locals = temporary parameter
                res.cookie('jwt', '', { maxAge: 1}); //delete wrong cookie
                next();
            }else {
                let user = await UserModel.findById(decodedToken.id);
                res.locals.user = user;
                next();
            }
        })
    }else {  // no token ?
        res.locals.user = null; 
        next();
    }
}

// middleware to authentification first time 
// verify if user is know on db
module.exports.requireAuth = (req, res, next) => {
    const token = req.cookies.jwt;
    if (token) {
        jwt.verify(token, process.env.TOKEN_SECRET, async (err, decodedToken) => {
            if (err) {
                console.log(err); // no next() if err we stop 
                res.send(200).json('No token')
            }else {
                console.log(decodedToken.id);
                next();
            }
        });
    } else {
        console.log('No token');
    }
};
