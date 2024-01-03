const express=require('express');
const router= express.Router();
const ObjectId = require('mongoose').Types.ObjectId;  
const {Student}=require('../models/student');

router.get('/api/students', (req,res)=>{
    Student.find({},(err,data)=>{
        if(!err){
            res.send(data);
        }else {
            console.log(err);
        }
    })
});

router.post('/api/student/add', (req,res)=>{
    const std = new Student({
        name: req.body.name,
        studentID: req.body.studentID,
        grade: req.body.grade
    });
    std.save((err,data)=>{
        if(!err){
        res.status(200).json({code:200, message:'Student added successfully', addStudent: data})
        }else{
            console.log(err);
        }
    });
});


router.get('/api/student/:id', (req,res)=>{
    Student.findById(req.params.id,(err,data)=>{
        if(!err){
            res.send(data);
        }else{
            console.log(err);
        }
    });
});

router.put('/api/student/edit/:id',(req,res)=>{
    const std={
        name: req.body.name,
        studentID:req.body.studentID,
        grade:req.body.grade
    };
    Student.findByIdAndUpdate(req.params.id, { $set:std }, {new:true}, (err,data)=>{
        if(!err){
            res.status(200).json({code:200, message: 'Student updated successfully', updateStudent: data});
        }else{
            console.log(err);
        }
     });
});


router.delete('/api/student/delete/:id', (req,res)=>{
    Student.findByIdAndRemove(req.params.id, (err,data)=>{
        if(!err){
            res.status(200).json({code:200, message: 'Student deleted successfully', deleteStudent: data});
        }
        else{
            console.log(err);
        }
    });
});

module.exports=router;