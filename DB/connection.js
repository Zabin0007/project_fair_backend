//mongoose is uset to connect mongoDb and node.  i mongoose

const mongoose = require("mongoose")

const connection = process.env.connectionString;

mongoose.connect(connection).then(response=>{
    console.log("PF server is connected to DB");
    
})
.catch(error=>{
    console.log("Error" ,error);
})