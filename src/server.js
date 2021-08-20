require('dotenv').config();

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');

const mongoose = require('./database/config');
const Router = require('./routes/router');

//Initialization
var app = express();

//Seatting (set)
app.set('port',process.env.PORT);

//Middleware (use)
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
app.use('/',(req,res)=>{
    res.sendFile(__dirname+'/public/index.html');
});

//Connection DB
mongoose.connect();

//Statics
app.use(express.static(path.join(__dirname,'public')));

//Starting
app.listen(app.get('port'),()=>{
    console.log(`******* El servidor está corriendo en http://localhost:${app.get('port')}`);
});

