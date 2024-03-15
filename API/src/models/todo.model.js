import mongoose from "mongoose";

const todoSchema = new mongoose.Schema(
    {
        userId: {
            type: String,
            required:true
        },
        title:{
            type: String,
            required:true,
        },
        comment:{
            type: String,
            default:''
        },
        priorityCategory:{
            type: [String],
            default: ['Very Low', 'Low', 'Medium', 'High', 'Important']
        },
        priorityId:{
            type:Number,
            default:2
        },
        finish:{
            type:Boolean,
            default:false
        },
        starred:{
            type:Boolean,
            default:false
        },

    },{timestamps:true}
)

const Todo = mongoose.model('Todo',todoSchema)

export default Todo;