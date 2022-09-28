const User = require('../models/user')
const ctrlhome={};
ctrlhome.getHome=(req,res)=>{
    res.send({
        message:"Petición get"
    })
}
ctrlhome.putHome=(req,res)=>{
    res.send({
        message:"Petición put"
    })
}
ctrlhome.postHome=async(req,res)=>{
    const {username,password,email, ...otrosdatos}=req.body;
    const nuevouser= new User({
        username,
        password,
        email
    })
    const nuevo= await nuevouser.save();
    res.json(nuevo)

};
ctrlhome.deleteHome=(req,res)=>{
    res.send({
        message:"Petición delete"
    })
}
module.exports=ctrlhome;