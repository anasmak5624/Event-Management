const expressroutes = require('express').Router()
const eventController = require('..//..//controller/Event')
expressroutes
    .route('/addEvent')
    .post((req, res, next) => eventController.addEvent(req, res, next))
expressroutes
    .route('/deleteEvent')
    .delete((req, res, next) => eventController.deleteEvent(req, res, next))
expressroutes
    .route('/getEvent')
    .get((req, res, next) => eventController.getEvent(req, res, next))
expressroutes
    .route('/updateEvent')
    .post((req, res, next) => eventController.updateEvent(req, res, next))

module.exports = expressroutes;