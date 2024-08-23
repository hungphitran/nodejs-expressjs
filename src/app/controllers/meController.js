const course= require('../../models/course')
const processData=require('../../util/mongoose')
class meController{

    storeCourse(req,res){
        course.find({})
        .then(courses=>{
            res.render('me/storedCourse',{courses:processData.mongooseToObj(courses)})
        }).catch(()=>res.render('<h1>no course</h1>'))

    }

    
}
module.exports=new meController; 
