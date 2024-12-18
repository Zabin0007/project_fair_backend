//import jwt
const jwt = require('jsonwebtoken') 

const jwtMiddleware = (req,res,next)=>{  //this is a router middleware to run on specefic route or path
    console.log('Inside the jwtMiddleware');
    try{
        // we need token generated from login for user authorisation req.headers.authorization or req.headers['authorization]
        const token = req.headers['authorization'].slice(7)
        console.log(token);

        //token Verify
        const jwtTokenVerification = jwt.verify(token,process.env.jwtKey)
        console.log(jwtTokenVerification);
        req.payload = jwtTokenVerification.userId
        next()//mandaotry otherwise it will show sending request on browser
        
    }
    catch(err){
        res.status(401).json("please Login")//should be passed to front end token
        console.log(err);
    }
}

module.exports = jwtMiddleware