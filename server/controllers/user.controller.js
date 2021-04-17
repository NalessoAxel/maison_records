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
        first_nameShipping,
        last_nameShipping,
        streetShipping,
        numberShipping,
        zipShipping,
        cityShipping,
        phonenumberShipping,
        first_nameBilling,
        last_nameBilling,
        streetBilling,
        numberBilling,
        zipBilling,
        cityBilling, 
        password,
        newPassword
    } = req.body
    
    // let essai = Object.entries(req.body)
    // console.log("essai", essai)
    let changes = {}
    
    console.log("reqbody2", req.body)

    const request = async (changes)=>{   
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
                if (err) return res.status(403).json({
                    message: err
                }); 
            }
        )
    } catch (err) {
        return res.status(403).json({message: err}); //renvoi json car bdd en json
    }
}

if (password) {  
     
    UserModel.findById(req.params.id, async (err,docs) => {
        const compare = await bcrypt.compare(password, docs.password); 
        console.log("le resultat est : " , compare)
        if(compare){
            let hashing = async () => {
                let passwordHash = await bcrypt.hash(newPassword, 10)
                changes.password = passwordHash;
                request(changes)
            }
            hashing();
        }else{
            return res.status(403).json({message: "error"}); 
            
        }
    })
} else if (streetShipping) {

     changes = {
            adress_shipping:
            {
                first_nameShipping,
                last_nameShipping,
                streetShipping,
                numberShipping,
                zipShipping,
                cityShipping,
                phonenumberShipping
            }
        }
    request(changes)
    
} else if (streetBilling) {
    changes = {
            adress_billing: 
            {
                first_nameBilling,
                last_nameBilling,
                streetBilling,
                numberBilling,
                zipBilling,
                cityBilling
            }
    }
    request(changes)
} else if (first_name){
    console.log("test")
    changes = {
        first_name,
        last_name,
        email
    }
    request(changes)
}
}

 