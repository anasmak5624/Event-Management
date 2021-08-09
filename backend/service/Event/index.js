// USE EVENT_MANAGEMENT;
// create table Event(
//  id varchar(349) NOT NULL,
//  createAt TIMESTAMP,
//  modifiedAt TIMESTAMP,
//  createBy varchar(200) NOT NULL,
//  modifiedBy varchar(200) NOT NULL,
//  event_title varchar(200) NOT NULL,
//  organiser varchar(100) ,
//  event_url varchar(340) NOT NULL,
//  PRIMARY KEY(id)

// );

const uuid = require('uuid').v4;
const moment = require('moment');
module.exports = () => {
    let addEvent = (req, res) => {

        return new Promise(
            async (resolve, reject) => {
                try {
                    let check = 0;
                    let id = uuid()
                    let createAt = new Date()
                    let createBy = 'admin'
                    let modifiedAt = new Date()
                    let modifiedBy = 'admin'
                    let event_title = req.body.event_title;
                    let organiser = req.body.organiser;
                    let event_url = req.body.event_url;
                    let result = [{}];
                    let query1 = "SELECT count(*) as result FROM `event` WHERE event_title = '" + event_title + "' AND event_url ='" + event_url + "' AND organiser ='" + organiser + "'"
                    let ab = await global.db.query(query1, (err, rows) => {
                        if (err) throw err;
                        check = rows[0]['result'];
                        console.log(typeof (check));
                        if (rows[0]['result'] === 1) {
                            resolve('Event Already Created');
                        }
                    });
                    console.log(result)
                    console.log(query1)
                    if (check === 0) {
                        let query = "INSERT INTO `event` VALUES ('" + id + "','" + createAt + "','" + createBy + "','" + modifiedAt + "','" + modifiedBy + "','" + event_title + "','" + organiser + "','" + event_url + "') ";
                        console.log(query)
                        let a = await global.db.query(query, (err, rows) => {
                            if (err) throw err;
                            console.log(rows);
                            resolve('add Member successful');
                        });
                    }

                }
                catch (error) {
                    reject(error)

                }




            });

    }
    let deleteEvent = (req, res) => {
        return new Promise(
            async (resolve, reject) => {
                try {
                    let id = req.body.id;
                    let query = "DELETE FROM `event` WHERE id = '" + id + "'";
                    console.log(query);
                    let ab = await global.db.query(query, (err, rows) => {
                        if (err) throw err;
                        resolve("Event Deleted" + rows)

                    })

                }
                catch (error) {
                    reject(error)
                }
            }
        )
    }
    let getEvent = (req, res) => {
        return new Promise(
            async (resolve, reject) => {
                try {
                    //let id=req.body.id;
                    let query = "SELECT * FROM `event`";
                    let a = await global.db.query(query, (err, rows) => {
                        if (err) throw err;
                        resolve(rows)
                    })
                    // resolve(result)
                }
                catch (error) {
                    reject(error)
                }



            }


        )




    }
    let updateEvent = (req, res)=>{
        return new Promise(
            async (resolve,reject)=>{
                let modifiedAt = moment();
                try{
                    // let query = "UPDATE `event` SET modifiedAt = '"+modifiedAt +"', event_title = '(SELECT event_title FROM `event` WHERE id ='"+id+"'),event_t = '(SELECT event_title FROM `event` WHERE id ='"+id+"')"
                    let query =
                        `UPDATE event SET event_url = CASE WHEN '${req.body.event_url}' != 'undefined' THEN '${req.body.event_url} 'ELSE event_url END,
                         event_title = CASE WHEN '${req.body.event_title}' != 'undefined' THEN '${req.body.event_title} 'ELSE event_title END,
                         organiser = CASE WHEN '${req.body.organiser}' != 'undefined' THEN '${req.body.organiser} 'ELSE organiser END,
                         modifiedAt='${modifiedAt}' where id = '${req.body.id}'`
                        let a = await global.db.query(query, (err, rows) => {
                            if (err) throw err;
                            resolve(rows)
                        })
               
                }
                catch(err){
                    reject(err)
                }

            }
        )
    }



    return {
        addEvent,
        getEvent,
        deleteEvent,
        updateEvent
    }
}


// "event_title" = CASE
//                         WHEN '${req.body.event_title}' != 'undefined' THEN '${req.body.event_title}'
//                         ELSE (select "event_title" FROM "event"  where "id"='${req.body.id}')
//                         END,
//                         "organiser" = CASE
//                         WHEN '${req.body.organiser}' != 'undefined' THEN '${req.body.organiser}'
//                         ELSE (select "organiser" FROM "event"  where "id"='${req.body.id}')
//                         END,