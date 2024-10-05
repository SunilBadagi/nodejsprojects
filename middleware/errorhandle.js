const { constants } = require("../Routes/constants");



const errorHandler=(err,req,res,next) => {
    const statusCode=res.statusCode ? res.statusCode:500;
    switch (statusCode){
        case constants.VALIDATION_ERROR:
            res.json({ tittle:"Validation Failed",message:err.message,stackTrace:err.stack});
            break;
        case constants.UNOTHARIZED:
            res.json({ tittle:"NOT FOUND",message:err.message,stackTrace:err.stack});
        case constants.FORBIDDEN:
            res.json({ tittle:"NOT FOUND",message:err.message,stackTrace:err.stack});
        case constants.NOT_FOUND:
            res.json({ tittle:"NOT FOUND",message:err.message,stackTrace:err.stack});
        case constants.SERVER_ERROR:
            res.json({ tittle:"NOT FOUND",message:err.message,stackTrace:err.stack});
        default:
            console.log("No Error,All good!");
    }
   
    
};  
module.exports=errorHandler;