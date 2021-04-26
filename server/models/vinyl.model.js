const mongoose = require('mongoose');

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
        audio:{
            preview1: {
                name:{
                    type: String,
                    default: 'Preview 1'
                },
                path: {
                    type: String,
                    default:'default'
                }
            },
            preview2: {
                name:{
                    type: String,
                    default: 'Preview 2'
                },
                path: {
                    type: String,
                    default:'default'
                }
            },
            preview3: {
                name:{
                    type: String,
                    default: 'Preview 3'
                },
                path: {
                    type: String,
                    default:'default'
                }
            },
            preview4: {
                name:{
                    type: String,
                    default: 'Preview 4'
                },
                path: {
                    type: String,
                    default:'default'
                }
            },
        }
    },
    {
        timestamps: true,
    }
)

const VinylModel = mongoose.model('vinyl', vinylSchema)

module.exports = VinylModel