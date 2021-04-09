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

//object.attributeTwo = testBoolean ? "attributeTwo" : "attributeTwoToo"

module.exports.updateUser = async (req, res) => {
    if(!ObjectID.isValid(req.params.id))
        return res.status(400).send('ID unknown : ' + req.params.id)

  let changes = {}
  
    const {
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
        cityBilling
    } = req.body

{(req.body.password) ? (changes.password = req.body.password
    // async function (next) {
    //     changes.password = await bcrypt.hash(req.body.password, 10);
    //     next()}
):(
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
                },
                adress_billing: 
                {
                    street: streetBilling,
                    number: numberBilling,
                    zip: zipBilling,
                    city: cityBilling
                }
            }
)}
    try {
        await UserModel.findOneAndUpdate({ _id: req.params.id },  
            {
                $set: changes
            }, 
            {new: true, upsert: true, setDefaultsOnInsert: true},
            (err, docs) => {
                if (!err) {
                    docs.save();
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
};

