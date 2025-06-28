const express = require("express");


const router = express.Router();

const {AirportController} = require("../../controllers")
// const {AirplaneMiddlewares} = require("../../middlewares");

router.post('/',  AirportController.createAirport);

router.get('/', AirportController.getAirports);

router.get('/:id', AirportController.getAirport);

router.delete('/:id', AirportController.destroyAirport);

module.exports = router