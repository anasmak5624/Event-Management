// USE EVENT_MANAGEMENT;
// create table subEvent(
//  id varchar(349) NOT NULL,
//  event_id varchar(349) NOT NULL,
//  createAt TIMESTAMP,
//  modifiedAt TIMESTAMP,
//  createBy varchar(200) NOT NULL,
//  modifiedBy varchar(200) NOT NULL,
//  subevent_title varchar(200) NOT NULL,
//  incharge varchar(100) ,
//  PRIMARY KEY(id),
//  FOREIGN KEY (event_id) REFERENCES event(id)
// );
const uuid = require('uuid').v4;
const moment = require('moment');
module.exports = () => {
    let addsubEvent = (req, res) => {
        return new Promise(
            async (resolve, reject) => {
                try {
                    let check = 0;
                    let id = uuid()
                    let createAt = new Date()
                    let createBy = 'admin'
                    let modifiedAt = new Date()
                    let modifiedBy = 'admin'
                    let subevent_title = req.body.subevent_title;
                    let incharge = req.body.incharge;
                    let event_id = req.body.event_id;
                    let result = [{}];
                    let query1 = "SELECT count(*) as result FROM `subEvent` WHERE subevent_title = '" + subevent_title + "' AND event_id ='" + event_id + "' AND incharge ='" + incharge + "'"
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
                        let query = "INSERT INTO `subEvent` VALUES ('" + id +"','" + event_id + "','" + createAt + "','" + modifiedAt + "','" + createBy + "','" + modifiedBy + "','" + subevent_title + "','" + incharge + "') ";
                        console.log(query)
                        let a = await global.db.query(query, (err, rows) => {
                            if (err) throw err;
                            console.log(rows);
                            resolve('add subEvent successfully');
                        });
                    }

                }
                catch (error) {
                    reject(error)
                }


            }
        )
    }
    let deletesubEvent = (req, res) => {
        return new Promise(
            async (resolve, reject) => {
                try {
                    let id=req.body.id;
                    let query= "DELETE FROM subEvent WHERE id ='"+id+"'"
                    let sql= await global.db.query(query,(err,rows)=>{
                        if (err) throw err;
                        resolve(rows);

                    })
                }
                catch (error) {
                    reject(error)
                }


            }
        )
    }
    let getsubEvent = (req, res) => {
        return new Promise(
            async (resolve, reject) => {
                try {
                    let event_id=req.body.event_id;
                    let query= "SELECT * FROM subEvent WHERE event_id ='"+event_id+"'"

                    let sql= await global.db.query(query,(err,rows)=>{
                        if (err) throw err;
                        resolve(rows);

                    })
                }
                catch (error) {
                    reject(error)
                }


            }
        )
    }

    return {
        addsubEvent,
        deletesubEvent,
        getsubEvent
    }











}