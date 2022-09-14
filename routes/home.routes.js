const router=require("express").Router();
const{
    getHome,
    putHome,
    postHome,
    deleteHome
    }
    =require('../controllers/home.controllers');
    
    router.get('/home',getHome);
    router.delete('/home',deleteHome);
    router.put('/home',putHome);
    router.post('/home',postHome);
    
    module.exports=router;