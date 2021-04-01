const mongoose = require('mongoose');
const { isEmail } = require('validator');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema(
    {
        last_name: {
            type: String,
            required: true,
            trim: false,
        },
        first_name: {
            type: String,
            required: true,
            trim: false,
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
        adress_shipping: 
            { street: 
                {
                    type: String,
                    lowercase: true
                },
              number : 
                {
                    type: Number,
                },
                zip : 
                {
                    type: Number,
                },
                city :
                {
                    type: String,
                }
        },
        adress_billing: 
            { street: 
                {
                    type: String,
                    lowercase: true
                },
              number : 
                {
                    type: Number,
                },
                zip : 
                {
                    type: Number,
                },
                city :
                {
                    type: String,
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
    const salt = await bcrypt.genSalt();  // permet de salé le mdp
    this.password = await bcrypt.hash(this.password, salt);
    next(); // une fois que tu as finis passe à la suite
});

userSchema.statics.login = async function(email, password) {
    const user = await this.findOne({ email });
    if(user) {
        const auth = await bcrypt.compare(password, user.password);
        if(auth) {
            return user;
        }
        throw Error('incorect password');
    }
    throw Error('Incorrect email');
};

//export model to db
const UserModel = mongoose.model('user', userSchema)

module.exports = UserModel;