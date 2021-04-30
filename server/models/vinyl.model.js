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
        // ___________ FACE A_______________
            preview1: {
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
            preview2: {
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
            preview3: {
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
            preview4: {
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
            preview5: {
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
            preview6: {
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
            preview7: {
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
            preview9: {
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
            preview7: {
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
            preview10: {
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
            preview11: {
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
            preview12: {
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
            preview13: {
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
            preview14: {
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
            preview15: {
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
            preview16: {
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
            preview17: {
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
            preview18: {
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
            preview19: {
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
            preview20: {
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
        }
    },
    {
        timestamps: true,
    }
)

const VinylModel = mongoose.model('vinyl', vinylSchema)

module.exports = VinylModel