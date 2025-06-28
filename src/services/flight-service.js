const { StatusCodes } = require('http-status-codes');
const {FlightRepository} =  require('../repositories');
const {AppError} = require("../utils/errors/app-error")

const flightRepository = new FlightRepository();

async function createFlight(data){

    try {
        const flight= await flightRepository.create(data);
        
        return flight;
    } catch (error) {
       
        if(error.name == 'SequelizeUniqueConstraintError' || error.name == 'SequelizeValidationError'){
            let explanation = [];
            error.errors.forEach( err=> {
                explanation.push(err.message);
            });
         console.log(explanation);
            throw new AppError(explanation, StatusCodes.BAD_REQUEST)
        }

        throw new AppError("cannot create the flight", StatusCodes.INTERNAL_SERVER_ERROR)
    }
  
}

async function getFlights(){
    try{
    const flights= await flightRepository.getAllFlights();
    return flights;
    }
    catch(error){
       throw new AppError("Cannot fetch data of all flights", StatusCodes.INTERNAL_SERVER_ERROR);
    }
  }
  

module.exports = {
    createFlight,
    getFlights
}