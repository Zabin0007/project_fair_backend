const express = require('express')

const userController = require("../Controllers/userController")
const jwtMiddleware = require('../Middlewares/jwtMiddleware')
const projectController = require("../Controllers/projectController")
const multerMiddleware = require('../Middlewares/multerMiddleware')
const router = express.Router()

//register API 
router.post("/api/register",userController.registerAPI)

//login api
router.post("/api/login",userController.loginAPI)

//addProject API
    router.post("/api/addProject",jwtMiddleware,multerMiddleware.single('projectImage'),projectController.addProjectAPI)

//getalluserProjects Api
router.get('/api/allUserProject',jwtMiddleware,projectController.getAlluserProjectAPI)

//gethomeuserprojects APi
router.get('/api/getHomeProjects',projectController.getHomeprojectAPI)//no need middleware because if user is not signed home page want to show the details

//get particular user API
router.get('/api/getAUserProject',jwtMiddleware,projectController.getParticularUserApi)

//edit api
router.put("/api/editProject/:projectId",jwtMiddleware,multerMiddleware.single('projectImage'),projectController.editProjectAPI)

//delete api
router.delete("/api/deleteProject/:projectId",jwtMiddleware,projectController.deletApi)

module.exports = router
