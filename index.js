const express=require('express');
const cors = require('cors');
const morgan = require('morgan');
const path= require('path');

require('dotenv').config();
require('./db/connection')
require('ejs')

const app=express();
const port= process.env.PORT | 3000;

//app.set
app.use(express.json())
app.use(cors());
app.use(morgan('dev'))
app.use(require('./routes/user.routes'))
app.use(express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(require('./routes/task.routes'))

app.listen(port,console.log(`Servidor corriendo en el puerto ${port}`))