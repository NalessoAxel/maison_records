const VinylModel = require ('../models/vinyl.model');
const ObjectID = require('mongoose').Types.ObjectId;
const multer = require('multer');



let nameOfImage 
// module to create a new reference and create an image to stock in server
module.exports.addReference = async (req,res) => {

const changeNameOfImage = () =>{
    let date = new Date()
    let change = date.getDate()+"d"+(date.getMonth()+1)+'m'+date.getFullYear()+'y'+Math.floor(Math.random()*1000000);
    return nameOfImage = change
}

 const { product_type, title, artist_name, label, catNumber, year, country, style, format, description, image, quantity, price, audio } = req.body
 
    if(image !== "default"){ changeNameOfImage()}

        try {
            const vinylCreated = await VinylModel.create({
            product_type, title, artist_name, label, catNumber, year, country, style, format, description, image:nameOfImage, quantity, price, audio
            });
            res.status(201).json({
            vinyl_created: vinylCreated._id
            })
            // console.log(req.body);e
        } catch (err) {
            res.status(400).json({
            message: 'error vinyl'
            })
        }
}

// object stockage with multer
const fileStorageEngine = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./images");  // send image to images folder
    },
    filename: (req, file, cb) => {
        cb(null,nameOfImage+".png");
    }
})

//middlewire
module.exports.addImage = multer({
    storage: fileStorageEngine
})



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
