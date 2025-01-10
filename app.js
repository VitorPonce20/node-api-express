const express = require('express')
const mongoose = require('mongoose');

const app = express()
const port = 3000

const Model = require('./model');

//Mongoose library instance

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

//Model
const {Schema, model} = mongoose;

const dataSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    age: {
        required: true,
        type: Number
    }
})

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
    type:'Grass',
    shiny:false, 
    tags:['water', 'shiny']
})

const Squirtle = new Poke({
    name:'Squirtle',
    type:'Water',
    shiny:false, 
    tags:['water', 'shiny']
})

app.get('/', (req,res) => { 
    res.sendStatus(201)
    
    Bulbasaur.save();    
    Charmander.save();
    Squirtle.save();
        
})

app.post('/create', (req,res) => {        
    res.send("success");        
    const Charmander = new Poke({
        name:'Charmander',
        type:'Fire',
        shiny:true, 
        tags:['fire', 'shiny']
    })
    
    const Squirtle = new Poke({
        name:'Squirtle',
        type:'Water',
        shiny:false, 
        tags:['water', 'shiny']
    })
    const Bulbasaur = new Poke({
        name:'Bulbasaur',
        type:'Grass',
        shiny:false, 
        tags:['water', 'shiny']
    })
    
    Bulbasaur.save();    
    Charmander.save();
    Squirtle.save();
})