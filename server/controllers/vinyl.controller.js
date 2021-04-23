const VinylModel = require ('../models/vinyl.model');
const ObjectID = require('mongoose').Types.ObjectId;
const multer = require('multer');



let nameOfFile 
let nameOfFileSong1
let nameOfFileSong2
let nameOfFileSong3 
let nameOfFileSong4

const changenameOfFile = (x) =>{
    let date = new Date()
    let change ="AT"+date.getMinutes()+"TO"+ date.getDate()+"d"+(date.getMonth()+1)+'m'+date.getFullYear()+'y'+Math.floor(Math.random()*1000000);
    x = change
    return x
}

// module to create a new reference and create an image to stock in server
module.exports.addReference = async (req,res) => {

 const { product_type, title, artist_name, label, catNumber, year, country, style, format, description, image, quantity, price, audio } = req.body

    console.log(audio, "hello")
    if (image !== "default") {nameOfFile= changenameOfFile(nameOfFile)}
    if (audio.preview1.path !== "default") {nameOfFileSong1=changenameOfFile(nameOfFileSong1) 
        console.log('nameOfFileSong1')}
        else{nameOfFileSong1 = "default"}
    if (audio.preview2.path !== "default") {nameOfFileSong2=changenameOfFile(nameOfFileSong2) 
        console.log('nameOfFileSong2')}
        else{nameOfFileSong2 = "default"}
    if (audio.preview3.path !== "default") {nameOfFileSong3=changenameOfFile(nameOfFileSong3) 
        console.log('nameOfFileSong3')}
        else{nameOfFileSong3 = "default"}
    if (audio.preview4.path !== "default") {nameOfFileSong4=changenameOfFile(nameOfFileSong4) 
        console.log('nameOfFileSong4')}
        else{nameOfFileSong4 = "default"}

    
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
            image:nameOfFile,
            audio: {
                preview1: {path: nameOfFileSong1},
                preview2: {path: nameOfFileSong2},
                preview3: {path: nameOfFileSong3},
                preview4: {path: nameOfFileSong4},
            },
            quantity,
            price
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
    changenameOfFile()
    console.log(nameOfFile,"change img")
    if(!ObjectID.isValid(req.params.id))
    return res.status(400).send('ID unknown : ' + req.params.id)
    
    try{
        await VinylModel.findOneAndUpdate({_id: req.params.id},
            {
                $set: {
                    image : nameOfFile   
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
        cb(null,nameOfFile+".png");
    }
})

module.exports.addImage = multer({
    storage: fileStorageEngine
})


// SONGS STORAGE
const fileSongPreviewStorageEngine1 = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./songs");  
    },
    filename: (req, file, cb) => {
        cb(null,nameOfFileSong1+".mp3");
        console.log("filename1 OK")
    }
})

const fileSongPreviewStorageEngine2 = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./songs");  
    },
    filename: (req, file, cb) => {
        cb(null,nameOfFileSong2+".mp3");
        console.log("filename1 OK")
    }  
})

const fileSongPreviewStorageEngine3 = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./songs");  
    },
    filename: (req, file, cb) => {
        cb(null,nameOfFileSong3+".mp3");
        console.log("filename1 OK")
    }  
})
const fileSongPreviewStorageEngine4 = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./songs");  
    },
    filename: (req, file, cb) => {
        cb(null,nameOfFileSong4+".mp3");
        console.log("filename1 OK")
    }
})

//middlewire
module.exports.addSongPreview1 = multer({
    storage: fileSongPreviewStorageEngine1
})
module.exports.addSongPreview2 = multer({
    storage: fileSongPreviewStorageEngine2
})
module.exports.addSongPreview3 = multer({
    storage: fileSongPreviewStorageEngine3
})
module.exports.addSongPreview4 = multer({
    storage: fileSongPreviewStorageEngine4
})