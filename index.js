//1.load .env file
require('dotenv').config()

//2.import express
const express = require('express')

//6.import cors
const cors = require('cors')
const db = require("./DB/connection")
const router = require('./Routes/router')
// const ApplicationMiddlewares = require('./Middlewares/ApplicationMiddleware')
//3.create an app using express
const projectServer = express()

//7.use middlewares
projectServer.use(cors())
projectServer.use(express.json())
// projectServer.use(ApplicationMiddlewares)
projectServer.use(router)
projectServer.use('/uploads', express.static('./uploads'))//to show image format in frontend mandatory code to show image on front end

//4.port creation
const PORT = 3000 || process.env.PORT

//5.run
projectServer.listen(PORT,()=>{
    console.log('project server is running on th port ,'+PORT); 
})

projectServer.get('/',(req,res)=>{ //to show url in browser not necessary
    res.send("projectServer")
})