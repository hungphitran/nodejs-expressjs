const path=require('path')
const express = require('express');
const morgan = require('morgan')
const handlebars= require("express-handlebars")

const app = express()
const port = 3000
//http logger
app.use(morgan('combined'))
app.use(express.static(path.join(__dirname,'resources/public')))

//template engine
app.engine('handlebars',handlebars.engine());
app.set('view engine','handlebars')
app.set('views',path.join(__dirname,'resources/views'))

app.get('/', (req, res) => {
  res.render('home');
})

app.listen(port, () => {
  console.log('path',__dirname)

  console.log(`Example app listening at http://localhost:${port}`)
})