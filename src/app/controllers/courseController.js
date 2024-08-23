const course= require('../../models/course')
const processData=require('../../util/mongoose')
class courseController{
    //get 
    show(req,res,next){
        course.find({deleted:{$ne:true}})
        .then(courses=>{
            res.render('partials/courses',{courses:processData.mongooseToObj(courses)})
        }).catch(next)
    }

    detail(req,res){
        course.findOne({_id:req.params.id}).lean()
        .then(data=>{
            res.render('partials/detail',{course:data})
        })
        .catch(err=>console.error(err))
    }

    create(req,res){
        res.render('partials/create')
    }
    save(req,res){
        var c= new course(req.body)
        c.save()
        .then(()=>{
            res.redirect('/courses')
        })
        .catch(function(){
            res.status(500).send('can not create new course');
        })
    }
    edit(req,res){
        course.findOne({_id:req.params.id}).lean()
        .then(data=> {
            res.render('partials/edit',{course:data})}
        )
        .catch(function(){
            res.status(500).send('can not create new course');
        })
    }

    update(req,res){
        course.updateOne({_id:req.params.id},req.body)
        .then(()=>{
            res.redirect('/courses')
        })
    }
    delete(req,res){
        course.delete({_id:req.params.id})
        .then(()=> res.status(200).redirect('back'))
        .catch(()=> res.status(500))
    }
    handleFormAction(req,res){
        switch(req.body.action){
            case 'delete':
                course.delete({_id: {$in: req.body.courseIds}})
                .then(()=> res.status(200).redirect('back'))
                .catch(()=> res.status(500))
                break;
            default: 
                res.send(req.body)
        }
    }
}

module.exports=new courseController; 
