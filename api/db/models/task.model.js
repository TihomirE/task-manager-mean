const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    description: {
        type: String,
        required: false,
        minlength: 1,
        trim: true
    },
    // with authentication
    _userId: {
        type: mongoose.Types.ObjectId,
        required: true
    }

    // TODO - create soft delete
})

const Task = mongoose.model('Task', TaskSchema);

module.exports = { Task }