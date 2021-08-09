const enrolleventService = require('..//..//service/enrollEvent/index')();
module.exports = {
    enrollEvent: async (req, res) => {
        try {
            console.log(req.body);
            let result = await enrolleventService.enrollEvent(req, res);
            res.type("application/json").status(200).send({
                status: "200",
                result: result
            });
        }
        catch (error) {
            console.log(error);
            res.type("application/json").status(500).send({
                status: "500",
                error: error.message
            })
        }


    },
    enrollSubevent: async (req, res) => {

        try {
            let result = await enrolleventService.enrollSubevent(req, res);
            res.type("application/json").status(200).send({
                status: "200",
                result: result
            })

        }
        catch (error) {
            res.type("application/json").status(500).send(
                {
                    status: "500",
                    error: error.message
                }
            )
        }


    },
    unenrollEvent: async (req, res) => {
        try {
            let result = await enrolleventService.unenrollEvent(req, res);
            res.type("application/json").status(200).send({
                status: "200",
                result: result
            })

        }
        catch (error) {
            res.type("application/json").status(500).send({
                status: "500",
                error: error.message
            })
        }



    },
    unenrollenrollSubevent: async (req, res) => {
        try {
            let result = await enrolleventService.unenrollenrollSubevent(req, res);
            res.type("application/json").status(200).send({
                status: "200",
                result: result
            })

        }
        catch (error) {
            res.type("application/json").status(500).send({
                status: "500",
                error: error.message
            })
        }



    },

    viewenrollEvent: async (req, res) => {
        try {
            let result = await enrolleventService.viewenrollEvent(req, res);
            res.type("application/json").status(200).send({
                status: "200",
                result: result
            })

        }
        catch (error) {
            res.type("application/json").status(500).send({
                status: "500",
                error: error.message
            })
        }



    },
    viewenrollSubevent: async (req, res) => {
        try {
            let result = await enrolleventService.viewenrollSubevent(req, res);
            res.type("application/json").status(200).send({
                status: "200",
                result: result
            })

        }
        catch (error) {
            res.type("application/json").status(500).send({
                status: "500",
                error: error.message
            })
        }



    },







}