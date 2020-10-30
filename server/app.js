const express = require('express')
const app = express()
const mongoose  = require('mongoose')
const PORT = 5000
const {MONGO_URI} = require('./config/keys')
const cors = require('cors')


mongoose.connect(MONGO_URI,{
    useNewUrlParser:true,
    useUnifiedTopology: true

})
mongoose.connection.on('connected',()=>{
    console.log("conneted to mongodb")
})
mongoose.connection.on('error',(err)=>{
    console.log("err connecting",err)
})

app.use(cors())

require('./models/user')
require('./models/post')

app.use(express.json())
app.use(require('./routes/auth'))
app.use(require('./routes/post'))
app.use(require('./routes/user'))


app.listen(PORT,()=>{
    console.log("server is running on",PORT)
})

