const mongoose = require('mongoose');

const ActionSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    _taskId: {
        type: mongoose.Types.ObjectId,
        required: true
    }
    // TODO - create soft delete
})

const Action = mongoose.model('Action', ActionSchema);

module.exports = { Action }