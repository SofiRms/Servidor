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
ctrlhome.postHome=(req,res)=>{
    res.send({
        message:"Petición post"
    })
}
ctrlhome.deleteHome=(req,res)=>{
    res.send({
        message:"Petición delete"
    })
}
module.exports=ctrlhome;