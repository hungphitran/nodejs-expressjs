const course= require('../../models/course')
const processData=require('../../util/mongoose')
class binController{
    //get 
    show(req,res,next){
        course.find({deleted:true})
        .then(courses=>{
            res.render('partials/bin',{courses:processData.mongooseToObj(courses)})
  
        }).catch(next)
    }

    restore(req,res){
        console.log(req.params.id)
        course.restore({_id:req.params.id})
        .then(()=>res.redirect('back'))
    }

    remove(req,res){
        course.deleteOne({_id:req.params.id})
        .then(()=> res.status(200).redirect('back'))
        .catch(()=> res.status(500))
    }

}

module.exports=new binController; 
