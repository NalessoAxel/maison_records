const UserModel = require('../models/user.model'); 
const ObjectID = require('mongoose').Types.ObjectId; 
const bcrypt = require('bcrypt');

module.exports.getAllUsers = async (req, res) => {
    const users = await UserModel.find().select('-password'); 
    res.status(200).json(users); 
}

module.exports.userInfo = (req, res)=>{
    if(!ObjectID.isValid(req.params.id))
        return res.status(400).send('ID unknown : ' +req.params.id)
    
    UserModel.findById(req.params.id, (err,docs) => {
        if(!err) res.send(docs);
        else console.log('ID unknow : ' + err);
    }).select('-password')
};

module.exports.updateUser = async (req, res) => {
    // console.log("ceci est la req",req)
    if(!ObjectID.isValid(req.params.id))
        return res.status(400).send('ID unknown : ' + req.params.id)

    const {    /// const firstname : req.body.firstname, const lastname : req.body.lastname,... 
        first_name,
        last_name,
        email,
        streetShipping,
        numberShipping,
        zipShipping,
        cityShipping,
        streetBilling,
        numberBilling,
        zipBilling,
        cityBilling, 
        password,
        newPassword
    } = req.body

  let changes = {}
    console.log("ceci est le password", password)
let ready = false;  // 

if (password) {
    // let passwordHash = await bcrypt.hash(password, 10)
    //  console.log("ceci est le passwordHash", passwordHash)
    
    UserModel.findById(req.params.id, async (err,docs) => {
        if (!err) {
           const compare = await bcrypt.compare( password, docs.password); 
           console.log("bdd password hash : ", docs.password)
           console.log("compared = ", compare)
           if (compare){
               changes.password = await bcrypt.hash(newPassword, 10)
               ready = true
               console.log("changes?",changes.password)
           }  
        }
        else {console.log('ID unknow : ' + err);}
    })
   
} else if (streetShipping) {
     changes = {
            first_name,
            last_name,
            email,
            adress_shipping:
            {
                street: streetShipping,
                number: numberShipping,
                zip: zipShipping,
                city: cityShipping
            }
        }
    ready = true
} else {
    changes = {
            first_name,
            last_name,
            email,
            adress_billing: 
            {
                street: streetBilling,
                number: numberBilling,
                zip: zipBilling,
                city: cityBilling
            }
    }
ready = true
}

console.log('this is changes full ', changes)
if (ready){ 
    try {
        await UserModel.findOneAndUpdate({ _id: req.params.id },  
            {
                $set: changes
            }, 
            {new: true, upsert: true, setDefaultsOnInsert: true},
            (err, docs) => {
                if (!err) {
                    // docs.save();
                    return res.send(docs);
                }
                if (err) return res.status(500).json({
                    message: err
                });
               
            }
        )
    } catch (err) {
        return res.status(500).json({message: err}); //renvoi json car bdd en json
    }
}
}

