const expressroutes = require('express').Router();
const enrollEventController = require('..//..//controller/enrollEvent')

expressroutes
    .route('/enrollevent')
    .post((req, res, next) => enrollEventController.enrollEvent(req, res, next))
expressroutes
    .route('/enrollsubevent')
    .post((req, res, next) => enrollEventController.enrollSubevent(req, res, next))
expressroutes
    .route('/unenrollevent')
    .delete((req, res, next) => enrollEventController.unenrollEvent(req, res, next))
expressroutes
    .route('/unenrollsubevent')
    .delete((req, res, next) => enrollEventController.unenrollenrollSubevent(req, res, next))
expressroutes
    .route('/viewenrollevent')
    .get((req, res, next) => enrollEventController.viewenrollEvent(req, res, next))
expressroutes 
    .route('/viewenrollsubevent')
    .get((req, res, next) => enrollEventController.viewenrollSubevent(req, res, next))    


module.exports = expressroutes;

