const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const path = require('path');
const mysql = require('mysql');
const fs = require('fs');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'titan',
    password: 'titanTeam123$',
    database: 'park_data'
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.post('/addAttraction', (req, res) =>{
    console.log(req.body);
    const ride_name = req.body.ride_name;
    const dailyOpening = req.body.dailyOpening;
    const dailyClosing = req.body.dailyClosing;
    const theoryCapacity = req.body.theoryCapacity;
    const targetCapacity = req.body.targetCapacity;
    const minVehicles = req.body.minVehicles;
    const maxVehicles = req.body.maxVehicles;
    const maxSeats = req.body.maxSeats;
    const minStaff = req.body.minStaff;
    const maxStaff = req.body.maxStaff;
    const parkSection = req.body.parkSection;
    const weatherCode = req.body.weatherCode;
    const rideType = req.body.rideType;

    const sqlInsert = "INSERT INTO attraction (ride_name, dailyOpening, dailyClosing, theoryCapacity, targetCapacity, minVehicles, maxVehicles, maxSeats, minStaff, maxStaff, parkSection, weatherCode, rideType) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);"
    connection.query(sqlInsert, [ride_name, dailyOpening, dailyClosing, theoryCapacity,
                         targetCapacity, minVehicles, maxVehicles,
                         maxSeats, minStaff, maxStaff, parkSection, weatherCode, rideType], 
                         (err, result) =>{
                            console.log(result)
                        });
});


app.get('/getAttraction', (req, res) =>{
    connection.query("SELECT * FROM attraction", (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            res.send(result);
        }
    });
});

app.get('/getAttractionNames', (req, res) =>{
    connection.query("SELECT ride_name FROM attraction", (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            res.send(result);
        }
    });
});





//PUT REQUESTS
app.put("/editAttraction", (req, res) => {
    const ride_name = req.body.ride_name;
    const dailyOpening = req.body.dailyOpening;
    const dailyClosing = req.body.dailyClosing;
    const theoryCapacity = req.body.theoryCapacity;
    const targetCapacity = req.body.targetCapacity;
    const minVehicles = req.body.minVehicles;
    const maxVehicles = req.body.maxVehicles;
    const maxSeats = req.body.maxSeats;
    const minStaff = req.body.minStaff;
    const maxStaff = req.body.maxStaff;
    const parkSection = req.body.parkSection;
    const weatherCode = req.body.weatherCode;
    const rideType = req.body.rideType;

    const sqlInsert = "UPDATE attraction SET dailyOpening = ?, dailyClosing = ?, theoryCapacity = ?, targetCapacity = ?, minVehicles = ?, maxVehicles = ?, maxSeats = ?, maxStaff = ?, minStaff = ?, parkSection = ?, weatherCode = ?, rideType = ? WHERE ride_name = ?;";
    connection.query(
      sqlInsert,
      [dailyOpening, dailyClosing, theoryCapacity, targetCapacity,
         minVehicles, maxVehicles, maxSeats,
        minStaff, maxStaff, parkSection, weatherCode, rideType,
        ride_name],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
          console.log(result);
        }
      }
    );
  });



app.delete('/deleteAttraction/:ride_name', (req, res) => {
    const ride_name = req.params.ride_name

    sqlInsert = "DELETE FROM ATTRACTION WHERE ride_name = ?"
    connection.query(sqlInsert, ride_name, (err, result) =>{
        if (err){
            console.log(err);
        }
        else {
            res.send(result);
        }
    })
});
 
// app.get('/getRide', (req, res) =>{
//     connection.query("SELECT * FROM ")
// })

//insert a get request to delete database entires here

// const sqlInsert = "INSERT INTO attraction (ride_name, dailyOpening, dailyClosing, theoryCapacity, targetCapcity, minVehicles, maxVehicles, maxStaff, parkSection, weatherCode, attrType) VALUES ('joker', 'time', 'time', 4, 4, 4, 4, 4, 4, 'sunny', 'ride');"
// connection.query(sqlInsert, (err, result) => {
//     res.send('hello titan');
// })

app.post('/addInterval', (req, res) =>{
    console.log(req.body);

    const timeValue = req.body.timeValue;
    const startingTime = req.body.startingTime;
    const endingTime = req.body.endingTime;

    const sqlInsert = "INSERT INTO intervals (timeValue, startingTime, endingTime) VALUES (?, ?, ?);"
    connection.query(sqlInsert, [timeValue, startingTime, endingTime], 
                         (err, result) => {
                            console.log(result)
                        });
});

app.get('/getInterval', (req, res) =>{
    connection.query("SELECT * FROM intervals", (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            res.send(result);
        }
    });
});

app.post('/addParkInterval', (req, res) =>{
    console.log(req.body);

    const timeValue = req.body.timeValue;
    const startingTime = req.body.startingTime;
    const endingTime = req.body.endingTime;

    const sqlInsert = "INSERT INTO parkIntervals (timeValue, startingTime, endingTime) VALUES (?, ?, ?);"
    connection.query(sqlInsert, [timeValue, startingTime, endingTime], 
                         (err, result) => {
                            console.log(result)
                        });
});

app.get('/getParkInterval', (req, res) =>{
    connection.query("SELECT * FROM parkIntervals", (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            res.send(result);
        }
    });
});
app.listen(3001, () =>{
    console.log('Running on port 3001');
})