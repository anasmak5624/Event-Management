const eventService = require('..//..//service/Event/index')();
module.exports = {
    addEvent: async (req, res) => {
        try {
            console.log(req.body);
            let result =await eventService.addEvent(req,res);
            res.type("application/json").status(200).send({
                status:"200",
                result:result
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
    deleteEvent: async (req,res)=>{

        try{
            let result = await eventService.deleteEvent(req,res);
            res.type("application/json").status(200).send({
                status:"200",
                result:result
            })

        }
        catch(error){
            res.type("application/json").status(500).send(
                {
                    status:"500",
                    error:error.message
                }
            )
        }


    },
    getEvent: async(req ,res)=>{
    try{
        let result = await eventService.getEvent(req,res); 
        res.type("application/json").status(200).send({
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
    updateEvent: async(req ,res)=>{
        try{
            let result = await eventService.updateEvent(req,res); 
            res.type("application/json").status(200).send({
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