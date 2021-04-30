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
        audio:[
        // ___________ FACE A_______________
            {
                name:{
                    type: String,
                    default: 'A1 Preview 1',
                },
                path: {
                    type: String,
                    default:'default',
                },
                faceA: {
                    type: Boolean,
                    default: true,
                }
            },
           {
                name:{
                    type: String,
                    default: 'A2 Preview 2',
                },
                path: {
                    type: String,
                    default:'default'
                },
                faceA: {
                    type: Boolean,
                    default: true,
                }
            },
            {
                name:{
                    type: String,
                    default: 'A3 Preview 3',
                    
                },
                path: {
                    type: String,
                    default:'default'
                },
                faceA: {
                    type: Boolean,
                    default: true,
                }
            },
             {
                name:{
                    type: String,
                    default: 'A4 Preview 4',  
                },
                path: {
                    type: String,
                    default:'default'
                },
                faceA: {
                    type: Boolean,
                    default: true,
                }
            },
             {
                name:{
                    type: String,
                    default: 'A1 Preview 1',
                },
                path: {
                    type: String,
                    default:'default',
                },
                faceA: {
                    type: Boolean,
                    default: true,
                }
            },
             {
                name:{
                    type: String,
                    default: 'A2 Preview 2',
                    
                },
                path: {
                    type: String,
                    default:'default'
                },
                faceA: {
                    type: Boolean,
                    default: true,
                }
            },
             {
                name:{
                    type: String,
                    default: 'A3 Preview 3',
                    
                },
                path: {
                    type: String,
                    default:'default'
                },
                faceA: {
                    type: Boolean,
                    default: true,
                }
            },
             {
                name:{
                    type: String,
                    default: 'A4 Preview 4',
                    
                },
                path: {
                    type: String,
                    default:'default'
                },
                faceA: {
                    type: Boolean,
                    default: true,
                }
            },
             {
                name:{
                    type: String,
                    default: 'A3 Preview 3',
                },
                path: {
                    type: String,
                    default:'default'
                },
                faceA: {
                    type: Boolean,
                    default: true,
                }
            },
             {
                name:{
                    type: String,
                    default: 'A4 Preview 4',
                    
                },
                path: {
                    type: String,
                    default:'default'
                },
                faceA: {
                    type: Boolean,
                    default: true,
                }
            },
            // ___________ FACE B_______________
            {
                name:{
                    type: String,
                    default: 'A1 Preview 1',
                },
                path: {
                    type: String,
                    default:'default',
                },
                faceA: {
                    type: Boolean,
                    default: false,
                }
            },
           {
                name:{
                    type: String,
                    default: 'A2 Preview 2',    
                },
                path: {
                    type: String,
                    default:'default'
                },
                faceA: {
                    type: Boolean,
                    default: false,
                }
            },
           {
                name:{
                    type: String,
                    default: 'A3 Preview 3',            
                },
                path: {
                    type: String,
                    default:'default'
                },
                faceA: {
                    type: Boolean,
                    default: false,
                }
            },
            {
                name:{
                    type: String,
                    default: 'A4 Preview 4',
                    
                },
                path: {
                    type: String,
                    default:'default'
                },
                faceA: {
                    type: Boolean,
                    default: false,
                }
            },
            {
                name:{
                    type: String,
                    default: 'A1 Preview 1',
                },
                path: {
                    type: String,
                    default:'default',
                },
                faceA: {
                    type: Boolean,
                    default: false,
                }
            },
            {
                name:{
                    type: String,
                    default: 'A2 Preview 2',
                    
                },
                path: {
                    type: String,
                    default:'default'
                },
                faceA: {
                    type: Boolean,
                    default: false,
                }
            },
            {
                name:{
                    type: String,
                    default: 'A3 Preview 3',
                    
                },
                path: {
                    type: String,
                    default:'default'
                },
                faceA: {
                    type: Boolean,
                    default: false,
                }
            },
            {
                name:{
                    type: String,
                    default: 'A4 Preview 4',
                    
                },
                path: {
                    type: String,
                    default:'default'
                },
                faceA: {
                    type: Boolean,
                    default: false,
                }
            },
            {
                name:{
                    type: String,
                    default: 'A3 Preview 3',
                    
                },
                path: {
                    type: String,
                    default:'default'
                },
                faceA: {
                    type: Boolean,
                    default: false,
                }
            },
            {
                name:{
                    type: String,
                    default: 'A4 Preview 4',
                    
                },
                path: {
                    type: String,
                    default:'default'
                },
                faceA: {
                    type: Boolean,
                    default: false,
                }
            },
        ]
    },
    {
        timestamps: true,
    }
)

const VinylModel = mongoose.model('vinyl', vinylSchema)

module.exports = VinylModel