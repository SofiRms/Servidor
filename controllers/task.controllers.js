const ctrltask={};
ctrltask.gettask=(req,res)=>{
    res.send({
        message:"Petición get"
    })
}
ctrltask.puttask=(req,res)=>{
    res.send({
        message:"Petición put"
    })
}
ctrltask.posttask=async(req,res)=>{
    const {title,description, ...otrosdatos}=req.body;
    const nuevatarea= new taks7({
        title,
        description,
    })
    const nueva= await nuevatarea.save();
    res.json(nueva)

};

ctrltask.deletetask=(req,res)=>{
    res.send({
        message:"Petición delete"
    })
}
module.exports=ctrltask;