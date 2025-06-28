const {StatusCodes} = require("http-status-codes");

const {ErrorResponse} =require("../utils/common")

function validateCreateRequest(req,res, next){
    if(!req.body.flightNumber){
        ErrorResponse.message= "something went wrong while creating flight";
        ErrorResponse.error.explanation = "absent flight number";
       return res.status(StatusCodes.BAD_REQUEST).json(
       ErrorResponse
       );
    }

    if(!req.body.airplaneId){
        ErrorResponse.message= "something went wrong while creating flight";
        ErrorResponse.error.explanation = "absent airplaneId";
       return res.status(StatusCodes.BAD_REQUEST).json(
       ErrorResponse
       );
    }

    if(!req.body.arrivalAirport){
        ErrorResponse.message= "something went wrong while creating flight";
        ErrorResponse.error.explanation = "absent arrival airport";
       return res.status(StatusCodes.BAD_REQUEST).json(
       ErrorResponse
       );
    }

    if(!req.body.departureAirport){
        ErrorResponse.message= "something went wrong while creating flight";
        ErrorResponse.error.explanation = "absent departure Airport";
       return res.status(StatusCodes.BAD_REQUEST).json(
       ErrorResponse
       );
    }

    if(!req.body.price){
        ErrorResponse.message= "something went wrong while creating flight";
        ErrorResponse.error.explanation = "absent price";
       return res.status(StatusCodes.BAD_REQUEST).json(
       ErrorResponse
       );
    }

    if(!req.body.totalSeats){
        ErrorResponse.message= "something went wrong while creating flight";
        ErrorResponse.error.explanation = "absent total seats";
       return res.status(StatusCodes.BAD_REQUEST).json(
       ErrorResponse
       );
    }
    next()
}

module.exports = validateCreateRequest;