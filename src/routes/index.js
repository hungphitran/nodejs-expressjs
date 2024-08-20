const siteRouter =require('./site')
const courseRouter=require('./course')
const meRouter=require('./me')
const binRouter=require('./bin')
function route(app){
    app.use('/courses',courseRouter)
    app.use('/me',meRouter)
    app.use('/bin',binRouter)
    app.use('/',siteRouter)
}

module.exports=route;