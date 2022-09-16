const router=require("express").Router();
const{
    getHome,
    putHome,
    postHome,
    deleteHome
    }
    =require('../controllers/user.controllers');
    
    router.get('/user',getHome);
    router.delete('/user',deleteHome);
    router.put('/user',putHome);
    router.post('/user',postHome);
    
    module.exports=router;