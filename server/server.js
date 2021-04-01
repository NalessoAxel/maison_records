const express = require('express');
require("dotenv").config({path:"./config/.env"});
require('./config/db')
const cookieParser = require('cookie-parser');
const userRoutes = require('./routes/user.routes');
const {checkUser, requireAuth} = require('./middleware/auth.middleware');
const cors = require('cors');


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

app.use(express.json()); // json body-parer
app.use(cookieParser());
app.use(demoLogger);


// middleware jwt for cookie
app.get('*', checkUser); //for all route -> start this middleware
app.get('/jwtid', requireAuth, (req, res) => {
    res.status(200).send(
        {
            id: res.locals.user._id,
            admin: res.locals.user.admin
        })
});

//routes
app.use('/api/user', userRoutes);
















app.listen(process.env.PORT, ()=> console.log(`Listening on port ${process.env.PORT}`));
