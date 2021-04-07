const UserModel = require('../models/user.model'); 
const ObjectID = require('mongoose').Types.ObjectId; 



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
    if(!ObjectID.isValid(req.params.id))
        return res.status(400).send('ID unknown : ' +req.params.id)
    
    try{
        await UserModel.findOneAndUpdate(
            {_id: req.params.id},
            {
                $set:{
                    first_name: req.body.first_name,
                    last_name: req.body.last_name,
                    email : req.body.email,
                    password: req.body.password,
                    adress_shipping: 
                    {
                    street: req.body.street,
                    number: req.body.number,
                    zip: req.body.zip,
                    city: req.body.city
                    },
                    adress_billing: 
                    {
                    street: req.body.street,
                    number: req.body.number,
                    zip: req.body.zip,
                    city: req.body.city
                    }
                }
            },
            { new: true, upsert: true, setDefaultsOnInsert: true },
            (err, docs) => {
                if(!err) return res.send(docs);
                if(err) return res.status(500).json({message: err});
            }
        )
    } catch (err) {
        return res.status(500).json({message: err}); //renvoi json car bdd en json
     }
};

// update + delete