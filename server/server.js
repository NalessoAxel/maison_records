const express = require('express');
require("dotenv").config({path:"./config/.env"});
require('./config/db')
const cookieParser = require('cookie-parser');
const userRoutes = require('./routes/user.routes');
const vinylRoutes = require('./routes/vinyl.routes');
const orderRoutes = require('./routes/order.routes');
const {checkUser, requireAuth} = require('./middleware/auth.middleware');
const cors = require('cors');
// const multer = require('multer');
// const upload = multer();
const app = express();

// specify request autorisation
const corsOptions = {
    origin: process.env.CLIENT_URL,
    credentials: true,
    'allowedHeaders': ['sessionId', 'Content-Type'],
    'exposedHeaders': ['sessionId'],
    'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
    'preflightContinue': false
}

// See request on Terminal
const demoLogger = (req, res, next) => {
    console.log(`[${new Date().toLocaleString()}] ${req.path}`)
    console.log(req.body)
    console.log(`\n`)
    next();
};


app.use(cors(corsOptions));

app.use(express.json()); // json body-parser
// app.use(upload.single("image"));
// app.use(express.static('public'));
app.use(cookieParser());
app.use(demoLogger);


    
// middleware jwt for cookie
app.get('*', checkUser); //for all route -> start this middleware
app.get('/jwtid', requireAuth, (req, res) => {
    const {
    _id,
    first_name,
    last_name,
    admin,
    email,
    adress_shipping,
    adress_billing } = res.locals.user

    res.status(200).send(
        {
            id: res.locals.user._id,
            first_name,
            last_name,
            admin,
            email,
            adress_shipping,
            adress_billing
        })
});


//routes
app.use('/api/user', userRoutes);
app.use('/api/vinyl', vinylRoutes);
app.use('/api/order', orderRoutes);
app.use('/images', express.static('images'))
// express => if url /images go to images in server   <- Jean: "C'est une sorte de route..."" https://expressjs.com/en/starter/static-files.html
app.use('/songs', express.static('songs'))



app.listen(process.env.PORT, ()=> console.log(`Listening on port ${process.env.PORT}`));
