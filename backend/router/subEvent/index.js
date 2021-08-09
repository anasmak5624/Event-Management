const expressroutes = require('express').Router();
const subEventController = require('..//..//controller/subEvent')

expressroutes
    .route('/addsubEvent')
    .post((req, res, next) => subEventController.addsubEvent(req, res, next))
expressroutes
    .route('/deletesubEvent')
    .delete((req, res, next) => subEventController.deletesubEvent(req, res, next))
expressroutes
    .route('/getsubEvent')
    .get((req, res, next) => subEventController.getsubEvent(req, res, next))

module.exports = expressroutes;