const VinylModel = require ('../models/vinyl.model');
const ObjectID = require('mongoose').Types.ObjectId;
const multer = require('multer');


let nameOfFile 
let nameOfFileSong1,nameOfFileSong2,nameOfFileSong3,nameOfFileSong4

let nameOfFileSong = [nameOfFileSong1, nameOfFileSong2, nameOfFileSong3, nameOfFileSong4]



const changenameOfFile = (x) =>{
    let date = new Date()
    let change ="AT"+date.getMinutes()+"TO"+ date.getDate()+"d"+(date.getMonth()+1)+'m'+date.getFullYear()+'y'+Math.floor(Math.random()*1000000);
    x = change
    return x
}

// module to create a new reference and create an image to stock in server
module.exports.addReference = async (req,res) => {

 const { product_type, title, artist_name, label, catNumber, year, country, style, format, description, image, quantity, price, audio } = req.body

    
    if (image !== "default") {nameOfFile= changenameOfFile(nameOfFile)}

    for (let i = 0; i < nameOfFileSong.length; i++ ){
        
        if (Object.entries(audio)[i][1].path !== "default") {
            //   Object.entries(audio)= [['preview1',   {path:"song.mp3"}],  ['preview2', {path:"song.mp3"}], ['preview3', {path:"song.mp3"}]]
            nameOfFileSong[i]= changenameOfFile(nameOfFileSong[i])
        } else {nameOfFileSong[i]="default"}
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
            image:nameOfFile,
            audio: {
                preview1: {path: nameOfFileSong[0]},
                preview2: {path: nameOfFileSong[1]},
                preview3: {path: nameOfFileSong[2]},
                preview4: {path: nameOfFileSong[3]}
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

    nameOfFile = changenameOfFile(nameOfFile)

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

// module.exports.updateVinylSong= async (req, res)=>{
//     changenameOfFile()
    // console.log(nameOfFile,"change song")
//     if(!ObjectID.isValid(req.params.id))
//     return res.status(400).send('ID unknown : ' + req.params.id)
    
//     try{
//         await VinylModel.findOneAndUpdate({_id: req.params.id},
//             {
//                 $set: {
//                     audio: {
//                         preview1: {path: nameOfFileSong[0]},
//                         preview2: {path: nameOfFileSong[1]},
//                         preview3: {path: nameOfFileSong[2]},
//                         preview4: {path: nameOfFileSong[3]}
//                     }, 
//                 }
//             },
//             {new: true, upsert: true, setDefaultsOnInsert: true},
//             (err, docs)=>{
//                 if(!err){
//                     return res.send(docs);
//                 }
//                 if(err) return res.status(403).json({message : 'Update error', err})
//             }
//         )
//     } catch (err) {
//         return res.status(403).json({message : 'Update image error', err})
//     }
    
// }


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

let filePreviewStorageEngines = [];
for (let i = 0; i < nameOfFileSong.length; i++) {
    filePreviewStorageEngines.push({ multerConfig : multer({ storage: multer.diskStorage({
            destination: (req, file, cb) => {
                 cb(null, "./songs");
                },
            filename: (req, file, cb) => {
                 cb(null, nameOfFileSong[i] + ".mp3");
                 console.log("filename1 OK")
             }
         })
        })
    })
}

module.exports.addSong = filePreviewStorageEngines 
// filePreviewStorageEngines = [{configMulter1},{configMulter2},{configMulter3},{configMulter4}]