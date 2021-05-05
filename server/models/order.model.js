const mongoose = require('mongoose');


const orderModel = new mongoose.Schema(
    {
        orderName: {
            type: String
        },
        orderType: {
            type: String
        },
        price:{
            type: Number,
            default: 0
        },
        quantity:{
            type: Number,
            default: 0
        },
        idOfUser: {
            type: String
        },
        last_nameShipping: {
            type: String,
            trim: false,
            default: "last name"
        },
        first_nameShipping: {
            type: String,
            trim: false,
            default: "first name"
        },
        streetShipping: {
            type: String,
            lowercase: true,
            default : 'street'
        },
        numberShipping :  {
            type: Number,
            default: 0
        },
        zipShipping : {
            type: Number,
            default: 0
        },
        cityShipping : {
            type: String,
            default: "city"
        },
        phonenumberShipping: {
            type: String,
        }            
    },
    {
        timestamps: true,
    }
)
  

//export model to db
const OrderModel = mongoose.model('order', orderModel)



module.exports = OrderModel;