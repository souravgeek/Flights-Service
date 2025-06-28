const { response } = require('express')
const { FlightService} = require('../services')
const {StatusCodes} = require('http-status-codes')
const {ErrorResponse, SuccessResponse}= require("../utils/common")

async function  createFlight(req, res){

    try{
        const flight = await FlightService.createFlight({
           flightNumber: req.body.flightNumber,
           airplaneId: req.body.airplaneId,
           arrivalAirport: req.body.arrivalAirport,
           departureAirport: req.body.departureAirport,
           arrivalTime: req.body.arrivalTime,
           departureTime: req.body.departureTime,
           price: req.body.price,
           boardingGate: req.body.boardingGate,
           totalSeats: req.body.totalSeats
        })
        SuccessResponse.message= "successfully created the flight";
        SuccessResponse.data= flight;
        return res.status(StatusCodes.CREATED).json(
          SuccessResponse
        )
    }
    catch(error){
        ErrorResponse.error= error
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(
           ErrorResponse
        )
    } 
}


async function getFlights(req, res){
  try{
     const flights = await FlightService.getFlights();
     SuccessResponse.data= flights;
        return res.status(StatusCodes.OK).json(
          SuccessResponse
        )
  }
  catch(error){
    ErrorResponse.error= error
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(
       ErrorResponse
    )
  }
}

async function getAirport(req,res){
   
    try{
        const airport= await AirportService.getAirport(req.params.id);
        SuccessResponse.data= airport;
           return res.status(StatusCodes.OK).json(
             SuccessResponse
           )
     }
     catch(error){
       ErrorResponse.error= error
       return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(
          ErrorResponse
       )
     }

}


async function destroyAirport(req,res){

  try{
    const response = await AirportService.destroyAirport(req.params.id);
    
    SuccessResponse.data= response;
       return res.status(StatusCodes.OK).json(
         SuccessResponse
       )
  }
 catch(error){
 
   ErrorResponse.error= error
   return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(
      ErrorResponse
   )
 }
}

module.exports = {
    createFlight,
    getFlights
}