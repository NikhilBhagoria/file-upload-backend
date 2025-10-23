const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
    filename: {
        type: String,
        required: true
    },
    imageUrl:{
        type: String,
    },
    tags:{
        type: String,
    },
    email:{
        type: String,
    }
});

const File = mongoose.model('File', fileSchema);
module.exports = File;  