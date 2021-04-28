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
                        // _________________________________________________ FACE A
            preview1: {
                name:{
                    type: String,
                    default: 'A1 Preview 1',
                    faceA: true
                },
                path: {
                    type: String,
                    default:'default',
                }
            },
            preview2: {
                name:{
                    type: String,
                    default: 'A2 Preview 2',
                    face: "B",
                    faceA: true

                },
                path: {
                    type: String,
                    default:'default'
                }
            },
            preview3: {
                name:{
                    type: String,
                    default: 'A3 Preview 3',
                    faceA: true

                },
                path: {
                    type: String,
                    default:'default'
                }
            },
            preview4: {
                name:{
                    type: String,
                    default: 'A4 Preview 4',
                    faceA: true

                },
                path: {
                    type: String,
                    default:'default'
                }
            },
            preview5: {
                name:{
                    type: String,
                    default: 'A1 Preview 1',
                    faceA: true
                },
                path: {
                    type: String,
                    default:'default',
                }
            },
            preview6: {
                name:{
                    type: String,
                    default: 'A2 Preview 2',
                    face: "B",
                    faceA: true

                },
                path: {
                    type: String,
                    default:'default'
                }
            },
            preview7: {
                name:{
                    type: String,
                    default: 'A3 Preview 3',
                    faceA: true

                },
                path: {
                    type: String,
                    default:'default'
                }
            },
            preview9: {
                name:{
                    type: String,
                    default: 'A4 Preview 4',
                    faceA: true

                },
                path: {
                    type: String,
                    default:'default'
                }
            },
            preview7: {
                name:{
                    type: String,
                    default: 'A3 Preview 3',
                    faceA: true

                },
                path: {
                    type: String,
                    default:'default'
                }
            },
            preview10: {
                name:{
                    type: String,
                    default: 'A4 Preview 4',
                    faceA: true

                },
                path: {
                    type: String,
                    default:'default'
                }
            },
            // _________________________________________________ FACE B
            preview11: {
                name:{
                    type: String,
                    default: 'A1 Preview 1',
                    faceA: false
                },
                path: {
                    type: String,
                    default:'default',
                }
            },
            preview12: {
                name:{
                    type: String,
                    default: 'A2 Preview 2',
                    face: "B",
                    faceA: false

                },
                path: {
                    type: String,
                    default:'default'
                }
            },
            preview13: {
                name:{
                    type: String,
                    default: 'A3 Preview 3',
                    faceA: false

                },
                path: {
                    type: String,
                    default:'default'
                }
            },
            preview14: {
                name:{
                    type: String,
                    default: 'A4 Preview 4',
                    faceA: false

                },
                path: {
                    type: String,
                    default:'default'
                }
            },
            preview15: {
                name:{
                    type: String,
                    default: 'A1 Preview 1',
                    faceA: false
                },
                path: {
                    type: String,
                    default:'default',
                }
            },
            preview16: {
                name:{
                    type: String,
                    default: 'A2 Preview 2',
                    face: "B",
                    faceA: false

                },
                path: {
                    type: String,
                    default:'default'
                }
            },
            preview17: {
                name:{
                    type: String,
                    default: 'A3 Preview 3',
                    faceA: false

                },
                path: {
                    type: String,
                    default:'default'
                }
            },
            preview18: {
                name:{
                    type: String,
                    default: 'A4 Preview 4',
                    faceA: false

                },
                path: {
                    type: String,
                    default:'default'
                }
            },
            preview19: {
                name:{
                    type: String,
                    default: 'A3 Preview 3',
                    faceA: false

                },
                path: {
                    type: String,
                    default:'default'
                }
            },
            preview20: {
                name:{
                    type: String,
                    default: 'A4 Preview 4',
                    faceA: false

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