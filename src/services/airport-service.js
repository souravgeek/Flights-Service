const { StatusCodes } = require('http-status-codes');
const {AirportRepository} =  require('../repositories');
const {AppError} = require("../utils/errors/app-error")

const airportRepository = new AirportRepository();

async function createAirport(data){
  try{
    const airport = await airportRepository.create(data);
    return airport;
  }
  catch(error){
    console.log(data)
    console.log("some error in service layer");
    if(error.name == 'SequelizeValidationError'){
      let explanation = [];
      error.errors.forEach(err => {
        explanation.push(err.message);
      });
      console.log(explanation);
      throw new AppError('Cannot create a new airport', StatusCodes.BAD_REQUEST)
    }
    throw new AppError(explanation, StatusCodes.BAD_REQUEST);
  }
}


async function getAirports(){
  try{
  const airports= await airportRepository.getAll();
  return airports;
  }
  catch(error){
     throw new AppError("Cannot fetch data of all airplanes", StatusCodes.INTERNAL_SERVER_ERROR);
  }
}

async function getAirport(id){
  try{
    const airport = await airportRepository.get(id);
    return airport;
  }
  catch(error){
    throw new AppError("Cannot fetch data of required airport", StatusCodes.INTERNAL_SERVER_ERROR);
  }
}

async function destroyAirport(id){
  try{
    const response= await airportRepository.destroy({id});
    
    return response;
    }
    catch(error){
       if(error.statusCode == StatusCodes.NOT_FOUND){
        throw new AppError("The airport you requested to delete does not exist")
       }
       throw new AppError("Cannot delete the required airport", StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

module.exports = {
    createAirport,
    getAirports,
    getAirport,
    destroyAirport
}
