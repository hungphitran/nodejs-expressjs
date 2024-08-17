const path=require('path')
const express = require('express');
const morgan = require('morgan')
const handlebars= require("express-handlebars")
const route=require('./routes/index')
const app = express()
const port = 3000
//http logger
app.use(morgan('combined'))
app.use(express.static(path.join(__dirname,'resources','public')))
//template engine
app.engine('handlebars',handlebars.engine());
app.set('views',path.join(__dirname,'resources','views'))
app.set('view engine','handlebars')
app.use(express.urlencoded())
app.use(express.json())
const db=require('./config/db/index');
require('dotenv').config();
console.log('views :',app.get('views'))

route(app);
db.connect();
app.listen(port, () => {
  //console.log('path',__dirname)

  console.log(`Example app listening at http://localhost:${port}`)
})