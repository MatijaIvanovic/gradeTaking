const mongoose = require ('mongoose');

const Student = mongoose.model('Student',{
    name:{
        type: String,
        required:true
    },
    studentID:{
        type: String,
        required:true
    },
    grade:{
        type: String,
        required:true
    }
});

module.exports={Student}