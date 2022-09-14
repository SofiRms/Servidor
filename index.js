const express=require('express');
const app=express();
const port=4000



app.use(express.json())
app.use(require('./routes/home.routes'))


app.listen(port,()=>{
    console.log(`servidor corriendo en el puerto ${port}`)
});