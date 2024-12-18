 // modal means copy of db collection field = schema

const mongoose = require('mongoose')

//1.Schema creation  schema means field  inside the database collection
const userSchema = new mongoose.Schema({//syntax
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    github:{
        type:String
    },
    linkedin:{
        type:String
    },
    ProfilePic:{
        type:String
    }

})
//create a modal
const users = mongoose.model("users",userSchema) //'' db name given in atlas
//export modal
module.exports = users