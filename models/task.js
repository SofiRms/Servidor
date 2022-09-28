const { model, Schema } = require('mongoose');
const taskSchema= new Schema({
    title:{
        type:String,
        max: 50,
        required: true
    },
    description:{
        type: String,
        required:true,
        default:true
    }
})

module.exports=model('task',taskSchema)