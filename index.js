const path=require('path')
const express = require('express');
const morgan = require('morgan')
const handlebars= require("express-handlebars")

const app = express()
const port = 3000
console.log(__dirname)
//http logger
app.use(morgan('combined'))
app.use(express.static(path.join(__dirname,'src/resources/public')))
//template engine
app.engine('handlebars',handlebars.engine());
app.set('views',path.join(__dirname,'src/resources','views'))
app.set('view engine','handlebars')
app.use(express.urlencoded())
app.use(express.json())

console.log('views :',app.get('views'))

app.get('/', (req, res) => {
  res.render('layouts/main');
})
app.get('/home',(req,res)=>{
  res.render('partials/index')
});

app.get('/search',(req,res)=>{
  res.render('partials/search')
})
app.post('/search',(req,res)=>{
  console.log(req.body)
  res.send('')
})

app.listen(port, () => {
  console.log('path',__dirname)

  console.log(`Example app listening at http://localhost:${port}`)
})