const routertask = require("express").Router();
const{
    deleteTasks,
    getTasks,
    postTasks,
    putTasks
    
    }
    =require('../controllers/task.controllers');
    
    routertask.get('/task',getTasks);
   routertask.delete('/task',deleteTasks);
   routertask.put('/task',putTasks);
   routertask.post('/task',postTasks);
    
    module.exports=routertask;