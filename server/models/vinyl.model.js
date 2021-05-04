
const vinylController = require('../controllers/vinyl.controller');
const mongoose = require('mongoose');

let audioModel = []
for (let i=0; i < vinylController.numberOfPreviews ; i++){
    audioModel.push({
        name: {
            type: String,
            default: 'default',
        },
        path: {
            type: String,
            default: 'default',
        },
    })
}

const vinylSchema = new mongoose.Schema(
    {
        product_type:{
            type: String,
            default: 'New'
        },
        title:{
            type: String,
            trim: false,
            default: 'Title'
        },
        size:{
            type: String,
            default: 'S'
        },
        artist_name:{
            type: String,
            default:'Artiste name'
        },
        label:{
            type: String,
            trim: false,
            default: 'Label'
        },
        catNumber:{
            type: String,
            minlength: 1,
            default: 'CatNumber'
        },
        year:{
            type: Number,
            minLength: 4,
            maxlength: 4,
            default: 1900
        },
        country:{
            type: String,
            default: 'Country'
        },
        style:{
            type: String,
            default: 'Style'
        },
        format:{
            type: String,
            default:'Format'
        },
        description:{
            type: String,
            default:'Description'
        },
        price:{
            type: Number,
            default: 0
        },
        quantity:{
            type: Number,
            default: 1
        },
        image:{
            type: String, 
            default: 'default'
        },
        audio: audioModel
    },
    {
        timestamps: true,
    }
)

const VinylModel = mongoose.model('vinyl', vinylSchema)

module.exports = VinylModel