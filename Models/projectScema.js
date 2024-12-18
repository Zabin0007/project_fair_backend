const mongoose = require('mongoose')

//1 Schema creation

const projectSchema = new mongoose.Schema({
    title:{
         type:String,
         required:true
    },
    language:{
        type:String,
        required:true
    },
    github:{
        type:String,
        required:true
    },
    website:{
        type:String,
        required:true
    },
    overview:{
        type:String,
        required:true
    },
    projectImage:{
        type:String,
        required:true
    },
    userId:{  //giving default userId to fetch details of a particular user
        type:String
    }
})

const projects = mongoose.model("projects",projectSchema)
module.exports=projects