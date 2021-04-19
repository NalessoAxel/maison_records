const VinylModel = require ('../models/vinyl.model');
const ObjectID = require('mongoose').Types.ObjectId;


module.exports.addReference = async (req, res) => {
 const {product_type, title, artist_name, label, catNumber, year, country, style, format, description, quantity, price, image, audio } = req.body

  try {
      const vinylCreated = await VinylModel.create({
       product_type, title, artist_name, label, catNumber, year, country, style, format, description, quantity, price, image, audio
      });
      res.status(201).json({
          vinyl_created: vinylCreated._id
      })
      console.log(req.body);
  } catch (err) {
      res.status(400).json({
          message: 'error vinyl'
      })
  }
}

module.exports.getAllVinyls = async (req, res) =>{
    const vinyls = await VinylModel.find()
    res.status(200).json(vinyls)
}

module.exports.vinylInfo = (req, res)=>{
    if(!ObjectID.isValid(req.params.id))
        return res.status(400).send('ID unknown : ' + req.params.id)

    VinylModel.findById(req.params.id, (err,docs) => {
        if(!err) res.send(docs);
        else console.log('ID Vinyl unknow : ' + err);
    })

}


