const course= require('../../models/course')
const processData=require('../../util/mongoose')
class courseController{
    //get 
    show(req,res,next){
        course.find({deleted:null})
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
        if(req.params.id>2){
            var c= course.findById({_id:req.params.id}).lean()
            .then(data=>{
                let newData=req.body;
                data.name=newData.name;
                data.description=newData.description;
                data.image=newData.image;
                data.videoId=newData.videoId;
                return data
            })
        }
        else{
            var c= new course(req.body)
        }
        c.save()
        .then(response=>res.status(200).send(response))
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
}

module.exports=new courseController; 
