const ApplicationMiddlewares =(req,res,next)=>{  //this run on entire application
    console.log('Inside the ApplicationMiddlewares');
    next()//to execute next function 
}
module.exports = ApplicationMiddlewares