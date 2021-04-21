const VinylModel = require ('../models/vinyl.model');
const ObjectID = require('mongoose').Types.ObjectId;
const multer = require('multer');

const fileStorageEngine = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./images");
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + "--" + file.originalname);
    }
})

module.exports.addReference = () => {
   const addImage= addImage = multer({
        storage: fileStorageEngine
    })
    
  const addFromForm =  async (req, res) => {
 const { product_type, title, artist_name, label, catNumber, year, country, style, format, description,image, quantity, price, audio } = req.body
 
 console.log("coucou",req.body)
let upload= multer({
        storage: fileStorageEngine
    }).single("image");
    
    try {

   
    const vinylCreated = await VinylModel.create({
    product_type, title, artist_name, label, catNumber, year, country, style, format, description,image, quantity, price, audio
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
addFromForm();

}

// router.post('/upload', vinylController.addImage.single("image"), (req, res) => {
//     console.log(req.file)
//     res.send("single file upload success")
// })



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

module.exports.deleteVinyl = async (req, res)=>{
    if(!ObjectID.isValid(req.params.id))
        return res.status(400).send('ID unknown : ' + req.params.id)

    try{
        await VinylModel.remove({_id: req.params.id}).exec();
        res.status(200).json({ message: "Successfully deleted. "});
    } catch(err){
        return res.status(400).send({message : 'Error to delete'})
    }
}

module.exports.updateVinyl = async (req, res)=>{
    if(!ObjectID.isValid(req.params.id))
        return res.status(400).send('ID unknown : ' + req.params.id)
    
    const {
        product_type,
        title,
        artist_name,
        label,
        catNumber,
        year,
        country,
        style,
        format,
        description,
        price,
        quantity
    } = req.body

      const request = async ()=>{
        try{
            await VinylModel.findOneAndUpdate({_id: req.params.id},
                {
                    $set: {product_type,
                            title,
                            artist_name,
                            label,
                            catNumber,
                            year,
                            country,
                            style,
                            format,
                            description,
                            price,
                            quantity
                
                        }
                },
                {new: true, upsert: true, setDefaultsOnInsert: true},
                (err, docs)=>{
                    if(!err){
                        return res.send(docs);
                    }
                    if(err) return res.status(403).json({message : 'Update error', err})
                }
            )
        } catch (err) {
            return res.status(403).json({message : 'Update error', err})
        }
    }
    
    request();
} 



//  const fileStorageEngine = multer.diskStorage({
//      destination: (req, file, cb) => {
//          cb(null, "./images");
//      },
//      filename: (req, file, cb) => {
//          cb(null, Date.now() + "--" + file.originalname);
//      }
//  })
  module.exports.addImage = multer({
        storage: fileStorageEngine
    })

    
