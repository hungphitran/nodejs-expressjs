const mongoose =require("mongoose");
const Schema= mongoose.Schema;
const mongooseDelete=require('mongoose-delete')

const course= new Schema({
    name:{type:String,unique: true,required:true},
    description:{type:String,required:true},
    image:{type:String,required:true},
    videoId:{type:String,required:true},
});

course.plugin(mongooseDelete)

module.exports= mongoose.model('course',course);