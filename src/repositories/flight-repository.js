const CrudRepository = require("./crud-repository");
const {flight, Airplane, Airport, City} = require("../models");
const { Sequelize } = require("sequelize");


class FlightRepository extends CrudRepository{
     constructor(){
        super(flight);
     }

     async getAllFlights(){
      const response= await flight.findAll({
         include:[{
               model: Airplane
         },
         {
            model:Airport,
            on:{
               col1: Sequelize.where(Sequelize.col("flight.departureAirport"), "=", Sequelize.col("Airport.code"))
            },
            include:{
               model: City
            }
         }
      ]
      })

      return response
     }
}

module.exports = FlightRepository;