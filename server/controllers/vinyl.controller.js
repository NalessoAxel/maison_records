const VinylModel = require ('../models/vinyl.model');
const ObjectID = require('mongoose').Types.ObjectId;
const multer = require('multer');


let nameOfFile 
let nameOfFileSong1,nameOfFileSong2,nameOfFileSong3,nameOfFileSong4,nameOfFileSong5,nameOfFileSong6,nameOfFileSong7,nameOfFileSong8,nameOfFileSong9,nameOfFileSong10,nameOfFileSong11,nameOfFileSong12,nameOfFileSong13,nameOfFileSong14,nameOfFileSong15,nameOfFileSong16,nameOfFileSong17,nameOfFileSong18,nameOfFileSong19,nameOfFileSong20

let name1,name2,name3,name4,name5,name6,name7,name8,name9,name10,name11,name12,name13,name14,name15,name16,name17,name18,name19,name20

let nameOfFileSong = [nameOfFileSong1,nameOfFileSong2,nameOfFileSong3,nameOfFileSong4,nameOfFileSong5,nameOfFileSong6,nameOfFileSong7,nameOfFileSong8,nameOfFileSong9,nameOfFileSong10,nameOfFileSong11,nameOfFileSong12,nameOfFileSong13,nameOfFileSong14,nameOfFileSong15,nameOfFileSong16,nameOfFileSong17,nameOfFileSong18,nameOfFileSong19,nameOfFileSong20]

let listNameSong = [name1,name2,name3,name4,name5,name6,name7,name8,name9,name10,name11,name12,name13,name14,name15,name16,name17,name18,name19,name20]


const changenameOfFile = (x) =>{
    let date = new Date()
    let change ="AT"+date.getMinutes()+"TO"+ date.getDate()+"d"+(date.getMonth()+1)+'m'+date.getFullYear()+'y'+Math.floor(Math.random()*1000000);
    x = change
    return x
}


// module to create a new reference and create an image to stock in server
module.exports.addReference = async (req,res) => {

 const { product_type, title, artist_name, label, catNumber, year, country, style, format, description, image, quantity, price, audio } = req.body
//audio = listPreviewClien = {{name: bhdhd, path: bajdjal}}
    
    if (image !== "default") {nameOfFile= changenameOfFile(nameOfFile)}

    for (let i = 0; i < nameOfFileSong.length; i++ ){
        console.log(Object.entries(audio)[i])
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
                preview1: {name: listNameSong[0],path: nameOfFileSong[0]},
                preview2: {name: listNameSong[1],path: nameOfFileSong[1]},
                preview3: {name: listNameSong[2],path: nameOfFileSong[2]},
                preview4: {name: listNameSong[3],path: nameOfFileSong[3]},
                preview5: {name: listNameSong[4],path: nameOfFileSong[4]},
                preview6: {name: listNameSong[5],path: nameOfFileSong[5]},
                preview7: {name: listNameSong[6],path: nameOfFileSong[6]}, 
                preview8: {name: listNameSong[7],path: nameOfFileSong[7]},
                preview9: {name: listNameSong[8],path: nameOfFileSong[8]},
                preview10: {name: listNameSong[9],path: nameOfFileSong[9]},
                preview11: {name: listNameSong[10],path: nameOfFileSong[10]},
                preview12: {name: listNameSong[11],path: nameOfFileSong[11]},
                preview13: {name: listNameSong[12],path: nameOfFileSong[12]},
                preview14: {name: listNameSong[13],path: nameOfFileSong[13]},
                preview15: {name: listNameSong[14],path: nameOfFileSong[14]},
                preview16: {name: listNameSong[15],path: nameOfFileSong[15]},
                preview17: {name: listNameSong[16],path: nameOfFileSong[16]},
                preview18: {name: listNameSong[17],path: nameOfFileSong[17]},
                preview19: {name: listNameSong[18],path: nameOfFileSong[18]},
                preview20: {name: listNameSong[19],path: nameOfFileSong[19]},
            },
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

module.exports.updateVinylSong= async (req, res)=>{

    for (let i = 0; i < nameOfFileSong.length; i++) {

        // console.log(Object.entries(req.body)[i], "tester")
        console.log(Object.entries(req.body)[i][1], "testeur2")

        if (Object.entries(req.body)[i][1] == "changeName") {
            nameOfFileSong[i] = changenameOfFile(nameOfFileSong[i])
        } else {
            nameOfFileSong[i] =  nameOfFileSong[i]}
        console.log(nameOfFileSong, "tester resulting namefilesong")
    } 


    if(!ObjectID.isValid(req.params.id))
    return res.status(400).send('ID unknown : ' + req.params.id)
    
    try{
        await VinylModel.findOneAndUpdate({_id: req.params.id},
            {
                $set: {
                    audio: {
                        preview1:  {path: nameOfFileSong[0]},
                        preview2:  {path: nameOfFileSong[1]},
                        preview3:  {path: nameOfFileSong[2]},
                        preview4:  {path: nameOfFileSong[3]},
                        preview5:  {path: nameOfFileSong[4]},
                        preview6:  {path: nameOfFileSong[5]},
                        preview7:  {path: nameOfFileSong[6]},
                        preview8:  {path: nameOfFileSong[7]},
                        preview9:  {path: nameOfFileSong[8]},
                        preview10: {path: nameOfFileSong[9]},
                        preview11: {path: nameOfFileSong[10]},
                        preview12: {path: nameOfFileSong[11]},
                        preview13: {path: nameOfFileSong[12]},
                        preview14: {path: nameOfFileSong[13]},
                        preview15: {path: nameOfFileSong[14]},
                        preview16: {path: nameOfFileSong[15]},
                        preview17: {path: nameOfFileSong[16]},
                        preview17: {path: nameOfFileSong[17]},
                        preview18: {path: nameOfFileSong[18]},
                        preview19: {path: nameOfFileSong[19]},
                        preview20: {path: nameOfFileSong[20]}
                    }, 
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

let filePreviewStorageEngines = [];
for (let i = 0; i < nameOfFileSong.length; i++) {
    filePreviewStorageEngines.push({ multerConfig : multer({ storage: multer.diskStorage({
            destination: (req, file, cb) => {
                // console.log(filePreviewStorageEngines[i] , ' filePreviewStorageEngines '+i)
                 cb(null, "./songs");
                },
            filename: (req, file, cb) => {        
                 cb(null, nameOfFileSong[i] + ".mp3");
                // console.log(nameOfFileSong[i], ' nameOfFileSong'+i)
             }
         })
        })
    })
}

module.exports.addSong = filePreviewStorageEngines 
// filePreviewStorageEngines = [{configMulter1},{configMulter2},{configMulter3},{configMulter4}]