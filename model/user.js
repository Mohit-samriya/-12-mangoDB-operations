const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    name:{
        type: String,
        default: "",
    },

    age:{
        type: String,
        default: "",

    },

    class:{
        type: String,
        default: "",

    },

    gmail:{
        type: String,
        default: "",

    }
    


},{timestamps: true});

module.exports = mongoose.model('Student', postSchema);