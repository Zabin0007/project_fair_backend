const { json } = require('express');
const projects = require('../Models/projectScema')

exports.addProjectAPI = async(req,res)=>{
    console.log('Inside the AddProject API');
   const{title,language,github,website,overview} = req.body
   const projectImage = req.file.filename
   const userId = req.payload //token we are generated on back end by giving userId payload is to give inique data such as id
//    console.log(req.filename);
//   console.timeLog(title,language,github,website,overview) 
    try{
            const project = await projects.findOne({github})
            if(project){
                res.status(401).json("Project already existing")
            }else{
                const NewProject = new projects({
                    title,language,github,website,overview,projectImage,userId
                })
                await NewProject.save()
                res.status(200).json(NewProject)
            }
    }
    catch(error){
        res.status(406).json(error)
        
    }
}   

exports.getAlluserProjectAPI = async(req,res)=>{
        console.log('inside the get all user project api');

        const searchkey = req.query.search
        console.log(searchkey);
        
        const query ={
            title:{
                $regex:searchkey, //$regex  regular expressions aa ab ac
                $options:"i"        //code
            }
        }


        try{
            const allProjects = await projects.find(query)
    
            res.status(200).json(allProjects)
            
        }
        catch(err){
            res.status(406).json(err)
        }
}

exports.getHomeprojectAPI = async (req,res)=>{
    console.log('inside the get home projects api');
    try{
        const homeProjects = await projects.find().limit(3) //only want to show 3 users
        res.status(200).json(homeProjects)
    }
    catch(err){
        res.status(401).json()
    }
    
}

exports.getParticularUserApi=async(req,res)=>{
    console.log('inside the get particular user projects api');
    const userId = req.payload
    try{
        const userProjects = await projects.find({userId})
        res.status(200).json(userProjects)
    }
    catch(err){
        res.status(401).json(err)
    }
}

// //edit project
exports.editProjectAPI = async(req,res)=>{
    console.log('Inside the Edit Project API');
   const{title,language,github,website,overview,projectImage} = req.body
   const updateImage = req.file ? req.file.filename : projectImage //from multer
   const {projectId} = req.params //to get id for specified project
   const userId = req.payload //token we are generated on back end by giving userId payload is to give inique data such as id
   console.log(updateImage);
  console.log(title,language,github,website,overview,userId) 
    try{
            const editedProject = await projects.findByIdAndUpdate({_id:projectId},
                {
                title:title,
                language:language,  
                github:github,
                website:website,
                overview:overview,
                projectImage:updateImage
                },
                
            )
           await editedProject.save()
           res.status(200).json(editedProject)
    }
    catch(error){
        res.status(406).json(error)
        
    }
} 

exports.deletApi = async(req,res)=>{
    console.log('inside the delete api');
    const{projectId} = req.params
    try{
        const project = await projects.findByIdAndDelete({_id:projectId})
        res.status(200).json(project)
    }
    catch(err){
        res.status(406).json(err)
    }
    
}