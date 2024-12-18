//Multer is a node.js middleware for handling multipart/form-data, which is primarily used for uploading files
const Multer = require('multer')

//Define the storage(destination folder) and filename
const storage = Multer.diskStorage({
    destination:(req, file, callback) => {
      callback(null, './Uploads')
    },
    filename:(req, file, callback)=>{
        callback(null,`projectImage-${file.originalname}`)
    }
})

const multerMiddleware=Multer({
    storage
})

module.exports = multerMiddleware