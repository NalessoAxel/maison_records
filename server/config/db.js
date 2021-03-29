const mongoose = require('mongoose');

mongoose
    .connect("mongodb+srv://" + process.env.DB_USER_PASS + "@maisonrecords.5a0we.mongodb.net/maisonRecords", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    })
    .then(() => console.log('Connected to mongoDB'))
    .catch((err) => console.log('Failed to connect to mongoDB', err))

