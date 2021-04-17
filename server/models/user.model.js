const mongoose = require('mongoose');
const { isEmail, isMobilePhone } = require('validator');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema(
    {
        last_name: {
            type: String,
            required: true,
            trim: false
        },
        first_name: {
            type: String,
            required: true,
            trim: false
        },
        email: {
            type: String,
            required: true,
            validate: [isEmail],
            lowercase: true,
            unique: true,
            trim: true
        },
        password: {
            type: String,
            required: true,
            max: 1024,
            minlength: 6
        },
        
        //adresse de livraison
        adress_shipping: 
            {
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
                    
                 //goooooo   
                }
        },
        //adresse de facturation
        adress_billing: 
            {
                last_nameBilling: {
                    type: String,
                    trim: false,
                    default: "last name"
                },
                first_nameBilling: {
                    type: String,
                    trim: false,
                    default: "first name"
                },
                streetBilling: {
                    type: String,
                    lowercase: true,
                    default : 'street'
                },
              numberBilling : {
                    type: Number,
                    default: 0
                },
                zipBilling : {
                    type: Number,
                    default: 0
                },
                cityBilling : {
                    type: String,
                    default: "city"
                }
        },
       admin: {
           type: Boolean,
           default: false,
       }
    },
    {
        timestamps: true,  
    }
)

//function to crypt password before send to DB
// va récupéré le mdp et va le crypté et le hashé

userSchema.pre("save", async function(next){
    this.password = await bcrypt.hash(this.password, 10);
    next(); 
});


userSchema.statics.login = async function(email, password) {
    const user = await this.findOne({ email });
    if(user) {
        const auth = await bcrypt.compare(password, user.password);
        if(auth) {
            return user;
        }
        throw Error('Incorrect password');
    }
    throw Error('Incorrect email');
};



//export model to db
const UserModel = mongoose.model('user', userSchema)



module.exports = UserModel;