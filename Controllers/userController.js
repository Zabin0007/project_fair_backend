//after controller go to routes and go to postman to check
//import modal
const { json } = require("express");
const users = require("../Models/userSchema")
const jwt = require("jsonwebtoken") //import these to active token when loggin in

//register logic

exports.registerAPI = async(req,res) => {  //callback function
        console.log("Inside the register API");
        const {username,email,password} = req.body //destructing to get email
        const existingUser = await users.findOne({email})
        if(existingUser){
                res.status(402).json({message:"User already existing...!"})
        }else{
                const newUser = new users({
                        username:username,
                        email:email,
                        password:password,
                        github:"",
                        linkedin:"",
                        ProfilePic:""
                })
                await newUser.save()
                res.status(200).json("Register Successfull")
        }
}

//login logic
exports.loginAPI = async(req,res) => {
        console.log("inside the login api");
        const {email,password} = req.body
        try{
                const registeredUser = await users.findOne({email,password})

                if(registeredUser){        //.sign   is to creat
                        const token = jwt.sign({userId:registeredUser._id},process.env.jwtKey)//to get envfile data syntax is process.env
                        console.log(token);
                        
                        res.status(200).json({currentUser:registeredUser,token})//means to show that user details and token  in front_ end
                }else{
                        res.status(404).json("invalid User")
                }
        }
        catch(err){
                res.status(401).json(err)
        }
      
}


