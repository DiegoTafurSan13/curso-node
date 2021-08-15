require('dotenv').config();

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');

const Router = require('./routes/router');

//Initialization
var app = express();

//Seatting (set)
app.set('port',process.env.PORT);

//Midellware (use)
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());
app.use(morgan('dev'));

//Globals
app.use((req,res,next)=>{
    next();
});

//Router

Router(app);

//Statics
app.use(express.static(path.join(__dirname,'public')));

//Starting
app.listen(app.get('port'),()=>{
    console.log(`******* El servidor está corriendo en http://localhost:${app.get('port')}`);
});

