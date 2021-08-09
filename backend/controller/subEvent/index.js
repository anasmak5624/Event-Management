const subEventService = require('..//..//service/subEvent/index')();
module.exports = {
    addsubEvent: async (req,res) =>{
        try{
            let result = await subEventService.addsubEvent(req,res);
            res.type("application/json").status("200").send({
                status:"200",
                result:result
            })
        }
        catch(error){
            res.type("application/json").status(500).send({
                status:"500",
                error:error.message
            })
        }


    },
    getsubEvent: async (req,res) =>{
        try{
            let result = await subEventService.getsubEvent(req,res);
            res.type("application/json").status("200").send({
                status:"200",
                result:result
            })
        }
        catch(error){
            res.type("application/json").status(500).send({
                status:"500",
                error:error.message
            })
        }


    },
    deletesubEvent: async (req,res) =>{
        try{
            let result = await subEventService.deletesubEvent(req,res);
            res.type("application/json").status("200").send({
                status:"200",
                result:result
            })
        }
        catch(error){
            res.type("application/json").status(500).send({
                status:"500",
                error:error.message
            })
        }


    },








}