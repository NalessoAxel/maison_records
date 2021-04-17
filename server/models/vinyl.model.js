const mongoose = require('mongoose');

const vinylSchema = new mongoose.Schema(
    {
        product_type:{
            type: String,
            default: "Second hand"
        },
        title:{
            type: String,
            required: true,
            trim: false,
            default: "Title"
        },
        label:{
            type: String,
            required: true,
            trim: false,
            default: "label"
        },
        catNumber:{
            type: Number,
            required: true,
            minlength: 1,
            default: "CatNumber"
        },
        year:{
            type: Number,
            required: true,
            minLength: 4,
            maxlength: 4,
            default: 1900
        },
        country:{
            type: String,
            required: true,
            default: "Country"
        },
        style:{
            type: String,
            required: true,
            default: "Style"
        },
        format:{
            type: String,
            required: true,
            default:"format"
        },
        quantity:{
            type: Number,
            required: true,
            default: 1
        },
        option:{
            type: Boolean,
            default: true
        },
        image:{
            type: String
        },
        audio:{
            type: String
        }
    },
    {
        timestamps: true,
    }
)

const VinylModel = mongoose.model('vinyl', vinylSchema)

module.exports = VinylModel