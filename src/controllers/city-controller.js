const { response } = require('express')
const { CityService} = require('../services')
const {StatusCodes} = require('http-status-codes')
const {ErrorResponse, SuccessResponse}= require("../utils/common")
const AppError = require('../utils/errors/app-error')
const { Sequelize } = require('../models')

async function  createCity(req, res){

    try{
        const city = await CityService.createCity({
           name: req.body.name
        })
        SuccessResponse.message= "successfully created the city";
        SuccessResponse.data= city;
        return res.status(StatusCodes.CREATED).json(
          SuccessResponse
        )
    }
    catch(error){

        if(error.statusCode==StatusCodes.BAD_REQUEST){
            ErrorResponse.error= error
            return res.status(StatusCodes.BAD_REQUEST).json(
                ErrorResponse
            )
        };
       
       
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(
           ErrorResponse
        )
    } 
}


module.exports ={
    createCity
}