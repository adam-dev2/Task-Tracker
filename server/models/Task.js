const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required:true,
    },
    description: {
        type: String,
        required: true,
    },
    status:{
        type: String,
        enum: ['Pending','InProgress','Completed'],
        default:'Pending',
    },
    createdAt:{
        type:Date,
        default: Date.now
    },
    completedAt:Date,
    project:{
        type:mongoose.Schema.ObjectId,
        ref:'Project',
        required: true
    }
})

module.exports = mongoose.model("Task",taskSchema)