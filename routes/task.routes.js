const routertask=require("express").Router();
const{
    gettask,
    puttask,
    posttask,
    deletetask
    }
    =require('../controllers/task.controllers');
    
    routertask.get('/task',gettask);
    routertask.delete('/task',deletetask);
    routertask.put('/task',puttask);
    routertask.post('/task',posttask);
    
    module.exports=routertask;