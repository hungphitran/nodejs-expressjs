const mongoose = require('mongoose')
require('dotenv').config()
function connect(){
    try{
        mongoose.connect(process.env.DB_URL)
        console.log('connected')
    }
    catch(err){
        console.error(err);
    }
}
module.exports={connect};