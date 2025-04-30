const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    createdBy : {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true
    },
    createdAt : {
        type: Date,
        default: Date.now,
    }
});

modules.export = mongoose.model('Project',projectSchema);