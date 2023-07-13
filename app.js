const express = require('express');
const mongoose =require('mongoose');


const app = express();

// middleware
app.use(express.static('public'));
app.use(express.json());

//view engine
app.set('view engine', 'ejs') 

mongoose.connect('mongodb://localhost/auth', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true })
    .then((result)=>{
        console.log('conncting to mongodb...');
        const port = process.env.PORT || 3000
        app.listen(port,`conncting to ${port}`);
    })
    .catch(err =>console.error('could not connect to database'));

app.get('/',(req,res)=>{
    res.render('Home');
});