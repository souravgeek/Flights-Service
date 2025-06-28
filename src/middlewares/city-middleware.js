const {StatusCodes} = require("http-status-codes");

const {ErrorResponse} =require("../utils/common");

function validateCreateRequest(req,res, next){
    if(!req.body.name){
        ErrorResponse.message= "something went wrong while creating city";
        ErrorResponse.error.explanation = "absent city name";
       return res.status(StatusCodes.BAD_REQUEST).json(
       ErrorResponse
       );
    }


    next()
}


module.exports = validateCreateRequest
