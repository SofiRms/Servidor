const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://ramos:quincedejulio@server.pdviajx.mongodb.net/servertlp?retryWrites=true&w=majority')
.then(()=>console.log("Estás conectada"))
.catch((err)=>console.log(err))