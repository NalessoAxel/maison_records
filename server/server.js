const express = require('express');
require("dotenv").config({path:"./config/.env"});
require('./config/db')
const cookieParser = require('cookie-parser');
const userRoutes = require('./routes/user.routes');
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

// voir requete dans console
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

//routes
app.use('/api/user', userRoutes);







app.listen(process.env.PORT, ()=> console.log(`Listening on port ${process.env.PORT}`));
