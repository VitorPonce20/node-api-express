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




app.listen(port, () => {console.log(`App listening on port ${port}`)})

const {Schema, model} = mongoose;

const schema = new Schema({
    name:String,
    type:String,
    shiny:Boolean,
    tags:[String]
})
    
const Poke = model('Poke', schema);
// export default Poke;

const Charmander = new Poke({
    name:'Charmander',
    type:'Fire',
    shiny:true, 
    tags:['fire', 'shiny']
})

const Bulbasaur = new Poke({
    name:'Bulbasaur',
    type:'Water',
    shiny:false, 
    tags:['water', 'shiny']
})

Charmander.save();

app.get('/', (req,res) => { res.send("Hello World");
    Bulbasaur.save();    
})

