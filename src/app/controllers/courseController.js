const course= require('../../models/course')
const processData=require('../../util/mongoose')
class courseController{
    //get 
    show(req,res,next){
        course.find()
        .then(courses=>{
            res.render('partials/courses',{courses:processData.mongooseToObj(courses)})
  
        }).catch(next)
    }

    detail(req,res){
        course.findOne({name:req.params.name}).lean()
        .then(data=>{
            res.render('partials/detail',{course:data})
        })
        .catch(err=>console.error(err))
    }

    create(req,res){
        res.render('partials/create')
    }
    save(req,res){
        let c= new course(req.body)
        c.save()
        .then(response=>res.status(200).send(response))
        .catch(function(){
            res.status(500).send('can not create new course');
        })
    }
    edit(req,res,next){
        course.findOne({name:req.params.name}).lean()
        .then(data=> {
            res.render('partials/edit',{course:data})}
        )
        .catch(next)
    }
}

module.exports=new courseController; 
