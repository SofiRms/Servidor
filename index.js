const express=require('express');
const cors = require('cors');
const morgan = require('morgan');
const path= require('path');

require('dotenv').config();
require('./db/connection')

const app=express();
const port= process.env.PORT || 3000;
// const dbConnect=require('./db/connection')


// app.listen(port,()=>{
//     console.log(`servidor corriendo en el puerto ${port}`)
// });
app.use(express.json())
app.use(cors());
app.use(morgan('dev'))
app.use(require('./routes/user.routes'))
app.use(require('./routes/task.routes'))
// dbConnect()


app.use(express.static(path.join(__dirname, 'public')))

app.use(require('./routes/user.routes'))

app.listen(port,console.log(`Servidor corriendo en el puerto ${port}`))