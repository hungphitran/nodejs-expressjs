const course= require('../../models/course')
const processData=require('../../util/mongoose')
class meController{
    storeCourse(req,res){
        course.find()
        .then(courses=>res.render('me/storedCourse',{courses:processData.mongooseToObj(courses)}))
        .catch(()=>res.send("no course"))
    }

    
}
module.exports=new meController; 
