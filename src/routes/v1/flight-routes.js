const express = require("express");


const router = express.Router();

const {FlightController} = require("../../controllers")
const {FlightMiddlewares} = require("../../middlewares");

router.post('/', [FlightMiddlewares],  FlightController.createFlight);

router.get('/',
FlightController.getFlights
)


module.exports = router