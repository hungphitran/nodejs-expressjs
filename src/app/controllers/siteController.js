const course= require('../../models/course')
const processData=require('../../util/mongoose')
class siteController{
    //home
    index(req,res){
        res.render('partials/index')
    }
    //search
    search(req,res){
        res.render('partials/search');
    }

    
}

module.exports=new siteController; 
