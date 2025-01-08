const express = require('express')
const app = express()
const port = 3000

//Mongoose library instance
const mongoose = require('mongoose');
//URL of MongoDB Database
const mongoDBURL = 'mongodb://127.0.0.1:27017/Test';

//connect to Database
mongoose.connect(mongoDBURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => { console.log('Connection Successfull') })
    .catch((err) => { console.log('Received an Error') })

app.get('/', (req,res) => {res.send("Hello World")})

app.listen(port, () => {console.log(`App listening on port ${port}`)})
    

