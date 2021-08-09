// -- Add Event
// -- Add Sub Event
// -- Add Event Member

'use strict';
const express = require('express')
const  eventRoutes= require('./router/Event')
const subeventRoutes= require('./router/subEvent')
const userRoutes = require('./router/User')
var app = express();
var mysql = require('mysql');
var bodyParser = require("body-parser");
var jsonParser = bodyParser.json()
//require("dotenv").config();
var urlencodedParser = bodyParser.urlencoded({ extended: false })
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Anas@272001',
  database: 'event_management'
});

connection.connect();
global.db = connection;
if (connection) { // mysql is started && connected successfully.
  console.log('Connection Success');
} else {
  console.log('Cant connect to db, Check ur db connection');
}
app.use("/",jsonParser,userRoutes);
app.use("/Event", jsonParser, eventRoutes);
app.use("/Event/subEvent", jsonParser, subeventRoutes);

app.listen(8000, () => {
  console.log("Event Management")
});



