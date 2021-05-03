const VinylModel = require ('../models/vinyl.model');
const ObjectID = require('mongoose').Types.ObjectId;
const multer = require('multer');

let nameOfFileImage 
let numberOfPreviews = 20
let nameOfFileSong = []

const changenameOfFile = () =>{
    let date = new Date()
    let change ="AT"+date.getMinutes()+"TO"+ date.getDate()+"d"+(date.getMonth()+1)+'m'+date.getFullYear()+'y'+Math.floor(Math.random()*1000000);
    return change
}

// module to create a new reference and create an image to stock in server
module.exports.addReference = async (req,res) => {
nameOfFileSong = [];
 const { product_type, title, artist_name, label, catNumber, year, country, style, format, description, image, quantity, price, audio } = req.body

    if (image !== "default") {nameOfFileImage= changenameOfFile()}
    else{nameOfFileImage = 'default'}
    console.log(audio, "audio tu claquues Jo'")
    
    for (let i = 0; i < numberOfPreviews; i++ ){
        if (audio[i].path !== "default") {
            nameOfFileSong.push({name: audio[i].name, path: changenameOfFile()})           
        } else {
             nameOfFileSong.push({name: "default", path: "default"})
            }   
    }
        try {
            const vinylCreated = await VinylModel.create({
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
            image:nameOfFileImage,
            audio: nameOfFileSong,
            quantity,
            price
            });
            res.status(201).json({
            vinyl_created: vinylCreated._id
            })
            // console.log(req.body);
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

module.exports.updateVinylImage = async (req, res)=>{

    nameOfFileImage = changenameOfFile()

    // console.log(nameOfFile,"change img")

    if(!ObjectID.isValid(req.params.id))
    return res.status(400).send('ID unknown : ' + req.params.id)
    
    try{
        await VinylModel.findOneAndUpdate({_id: req.params.id},
            {
                $set: {
                    image : nameOfFileImage   
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
        return res.status(403).json({message : 'Update image error', err})
    }
    
}

//Song Update Name/Path In DB
module.exports.updateVinylSong= async (req, res)=>{
nameOfFileSong = [];
 if (!ObjectID.isValid(req.params.id))
     return res.status(400).send('ID unknown : ' + req.params.id)

for (let i = 0; i < numberOfPreviews; i++) {
        if (req.body[i].path == "changeName") {
            nameOfFileSong.push({name: req.body[i].name, path: changenameOfFile()})
        } else { nameOfFileSong.push({name: req.body[i].name,path: req.body[i].path})}
    } 
    
try{
        await VinylModel.findOneAndUpdate({_id: req.params.id},
            {
                $set: {audio:nameOfFileSong   
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
        return res.status(403).json({message : 'Update image error', err})
    }
    
}


// IMAGE STORAGE
const fileStorageEngine = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./images");  // send image to images folder
    },
    filename: (req, file, cb) => {
        cb(null,nameOfFileImage+".png");
    }
})

module.exports.addImage = multer({
    storage: fileStorageEngine
})

// SONGS STORAGE

let filePreviewStorageEngines = [];
for (let i = 0; i < numberOfPreviews; i++) {
    filePreviewStorageEngines.push({ multerConfig : multer({ storage: multer.diskStorage({
            destination: (req, file, cb) => {
                // console.log(filePreviewStorageEngines[i] , ' filePreviewStorageEngines '+i)
                 cb(null, "./songs");
                },
            filename: (req, file, cb) => {        
                 cb(null, nameOfFileSong[i].path + ".mp3");
                // console.log(nameOfFileSong[i], ' nameOfFileSong'+i)
             }
         })
        })
    })
}

module.exports.addSong = filePreviewStorageEngines
// filePreviewStorageEngines = [{configMulter1},{configMulter2},{configMulter3},{configMulter4}]