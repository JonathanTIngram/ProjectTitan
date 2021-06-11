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


//global variables for sending back and forth for graphing purposes
var rideListGraph;
var rideJSONData = [];

var statListGraph;

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

    const maxWind = req.body.maxWind;
    const minTemp = req.body.minTemp;
    const powerRedundancy = req.body.powerRedundancy;
    const numGates = req.body.numGates;

    const ridePrimary = req.body.ridePrimary;
    const rideSecondary = req.body.rideSecondary;
    const rideTertiary = req.body.rideTertiary;

    //for main attraction information
    const sqlInsert = "INSERT INTO attraction (ride_name, dailyOpening, dailyClosing, theoryCapacity, targetCapacity, minVehicles, maxVehicles, maxSeats, minStaff, maxStaff, parkSection, weatherCode, rideType) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);"
    connection.query(sqlInsert, [ride_name, dailyOpening, dailyClosing, theoryCapacity,
                         targetCapacity, minVehicles, maxVehicles,
                         maxSeats, minStaff, maxStaff, parkSection, weatherCode, rideType], 
                         (err, result) =>{
                            console.log(result);
                        }
        );
    
    //for safety critical information
    const safetyInsert = "INSERT INTO safetyCriticalInfo (ride_name, weatherCode, maxWind, minTemp, powerRedundancy, numGates) VALUES (?, ?, ?, ?, ?, ?)";
    connection.query(safetyInsert, [ride_name, weatherCode, maxWind, minTemp, powerRedundancy, numGates],
        (err, result) =>{
            console.log(result);
        })

    //for phone information
    const phoneInsert = "INSERT INTO phoneInfo (ride_name, ridePrimary, rideSecondary, rideTertiary) VALUES (?, ?, ?, ?)";
    connection.query(phoneInsert, [ride_name, ridePrimary, rideSecondary, rideTertiary],
        (err, result) =>{
            console.log(result);
        })
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

app.get('/getSafetyInfo', (req, res) =>{
    connection.query("SELECT * FROM safetyCriticalInfo", (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            res.send(result);
        }
    });
});

app.get('/getPhoneInfo', (req, res) =>{
    connection.query("SELECT * FROM phoneInfo", (err, result) => {
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

    const maxWind = req.body.maxWind;
    const minTemp = req.body.minTemp;
    const powerRedundancy = req.body.powerRedundancy;
    const numGates = req.body.numGates;

    const ridePrimary = req.body.ridePrimary;
    const rideSecondary = req.body.rideSecondary;
    const rideTertiary = req.body.rideTertiary;


    //for main attraction information
    const sqlInsert = "UPDATE attraction SET dailyOpening = ?, dailyClosing = ?, theoryCapacity = ?, targetCapacity = ?, minVehicles = ?, maxVehicles = ?, maxSeats = ?, maxStaff = ?, minStaff = ?, parkSection = ?, weatherCode = ?, rideType = ? WHERE ride_name = ?;";
    connection.query(
      sqlInsert,
      [dailyOpening, dailyClosing, theoryCapacity, targetCapacity,
         minVehicles, maxVehicles, maxSeats,
        maxStaff, minStaff, parkSection, weatherCode, rideType,
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

    //for safety critical information
    const safetyInsert = "UPDATE safetyCriticalInfo SET weatherCode = ?, maxWind = ?, minTemp = ?, powerRedundancy = ?, numGates = ? WHERE ride_name = ?";
    connection.query(safetyInsert, [weatherCode, maxWind, minTemp, powerRedundancy, numGates, ride_name],
        (err, result) =>{
            console.log(result);
        })

    //for phone information
    const phoneInsert = "UPDATE phoneInfo SET ridePrimary = ?, rideSecondary = ?, rideTertiary = ? WHERE ride_name = ?";
    connection.query(phoneInsert, [ridePrimary, rideSecondary, rideTertiary, ride_name],
        (err, result) => {
            console.log(result);
        })
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

    intervalInsert = "DELETE FROM intervals WHERE ride_name = ?"
    connection.query(intervalInsert, ride_name, (err, result) =>{
        if (err){
            console.log(err);
        }
    })

    collectedDataInsert = "DELETE FROM collectedData WHERE ride_name = ?"
    connection.query(collectedDataInsert, ride_name, (err, result) =>{
        if (err){
            console.log(err);
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

    const ride_name = req.body.ride_name;
    const timeValue = req.body.timeValue;
    const startingTime = req.body.startingTime;
    const endingTime = req.body.endingTime;


    


    console.log("\n\nBackend")

    var checkedWaitTime;
    var checkedThroughput;
    var checkedAvailableSeats;
    var checkedAvailableDown;

    const checkBoxData = req.body.typeState.map((d, i)=>  {

        if(d.id == 1 && d.type == "Wait Time"){
            checkedWaitTime = d.isChecked;
        }

        if(d.id == 2 && d.type == "Throughput"){
            checkedThroughput = d.isChecked;
        }

        if(d.id == 3 && d.type == "Available Seats"){
            checkedAvailableSeats = d.isChecked;
        }

        if(d.id == 4 && d.type == "Available Down"){
            checkedAvailableDown = d.isChecked;
        }


        console.log(d)
        if (d.isChecked == true) {
          return true;
        }
        else {
          return false;
        }
        })
        
    console.log(checkedWaitTime);
    console.log(checkedThroughput);
    console.log(checkedAvailableSeats);
    console.log(checkedAvailableDown);
    console.log(ride_name);



    const sqlInsert = "INSERT INTO intervals (ride_name, timeValue, startingTime, endingTime, checkedWaitTime, checkedThroughput, checkedAvailableSeats, checkedAvailableDown) VALUES (?, ?, ?, ?, ?, ?, ?, ?);"
    connection.query(sqlInsert, [ride_name, timeValue, startingTime, endingTime, checkedWaitTime, checkedThroughput, checkedAvailableSeats, checkedAvailableDown], 
                         (err, result) => {
                            console.log(result)
                        });
});

app.delete('/deleteInterval/:id', (req, res) => {
    var id = req.params.id
    //rideSelect = rideSelect.replace(':', '');
    console.log(id);
    sqlInsert = "DELETE FROM intervals WHERE id = " + id;
    connection.query(sqlInsert, id, (err, result) =>{
        if (err){
            console.log(err);
        }
        else {
            res.send(result);
        }
    })
});

app.delete('/deleteParkInterval/:id', (req, res) => {
    var id = req.params.id
    //rideSelect = rideSelect.replace(':', '');
    console.log(id);
    sqlInsert = "DELETE FROM parkIntervals WHERE id = " + id;
    connection.query(sqlInsert, id, (err, result) =>{
        if (err){
            console.log(err);
        }
        else {
            res.send(result);
        }
    })
});

app.get('/getInterval/:rideSelect', (req, res) =>{

    var rideSelect = req.params.rideSelect


    rideSelect = rideSelect.replace(':', ''); //get ride of the colon in front of rideSelect

    console.log(rideSelect);

    sqlInsert = "SELECT * FROM intervals WHERE ride_name = ?"
    connection.query(sqlInsert, rideSelect, (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            res.send(result);
        }
    });
});

app.put('/editInterval', (req, res) => {
    console.log(req.body);

    var id = req.body.id;
    var WaitTime = req.body.WaitTime;
    var Throughput = req.body.Throughput;
    var AvailableSeats = req.body.AvailableSeats;
    var AvailableDown = req.body.AvailableDown;
    var ride_name = req.body.ride_name;

    if(WaitTime == '')
    {
        WaitTime = -1;
    }
    if(Throughput == '')
    {
        Throughput = -1;
    }
    if(AvailableSeats == '')
    {
        AvailableSeats = -1;
    }
    if(AvailableDown == '')
    {
        AvailableDown = -1;
    }
    if(ride_name == ''){
        ride_name = -1;
    }


    sqlInsert = "INSERT INTO collectedData (id, ride_name, WaitTime, Throughput, AvailableSeats, AvailableDown) VALUES (?, ?, ?, ?, ?, ?);"

    connection.query(sqlInsert, [id, ride_name, WaitTime, Throughput, AvailableSeats, AvailableDown], (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            res.send(result);
        }
    });
})


//For sending to graphs
app.get('/getCollectedData', (req, res) =>{
    connection.query("SELECT * FROM collectedData", (err, result) => {
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

    console.log("\n\nBackend")

    var checkedWaitTime;
    var checkedThroughput;
    var checkedAvailableSeats;
    var checkedAvailableDown;

    const checkBoxData = req.body.typeState.map((d, i)=>  {

        if(d.id == 1 && d.type == "Wait Time"){
            checkedWaitTime = d.isChecked;
        }

        else if(d.id == 2 && d.type == "Throughput"){
            checkedThroughput = d.isChecked;
        }

        else if(d.id == 3 && d.type == "Available Seats"){
            checkedAvailableSeats = d.isChecked;
        }

        else if(d.id == 4 && d.type == "Available Down"){
            checkedAvailableDown = d.isChecked;
        }


        console.log(d)
        if (d.isChecked == true) {
          return true;
        }
        else {
          return false;
        }
        })
        
    console.log(checkedWaitTime);
    console.log(checkedThroughput);
    console.log(checkedAvailableSeats);
    console.log(checkedAvailableDown);

    const sqlInsert = "INSERT INTO parkIntervals (timeValue, startingTime, endingTime, checkedWaitTime, checkedThroughput, checkedAvailableSeats, checkedAvailableDown) VALUES (?, ?, ?, ?, ?, ?, ?);"
    connection.query(sqlInsert, [timeValue, startingTime, endingTime, checkedWaitTime, checkedThroughput, checkedAvailableSeats, checkedAvailableDown], 
                         (err, result) => {
                            console.log(result)
                        });
});

app.put('/editParkInterval', (req, res) => {
    console.log(req.body);

    var id = req.body.id;
    var WaitTime = req.body.WaitTime;
    var Throughput = req.body.Throughput;
    var AvailableSeats = req.body.AvailableSeats;
    var AvailableDown = req.body.AvailableDown;

    if(WaitTime == '')
    {
        WaitTime = -1;
    }
    if(Throughput == '')
    {
        Throughput = -1;
    }
    if(AvailableSeats == '')
    {
        AvailableSeats = -1;
    }
    if(AvailableDown == '')
    {
        AvailableDown = -1;
    }


    sqlInsert = "INSERT INTO collectedParkData (id, WaitTime, Throughput, AvailableSeats, AvailableDown) VALUES (?, ?, ?, ?, ?);"

    connection.query(sqlInsert, [id, WaitTime, Throughput, AvailableSeats, AvailableDown], (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            res.send(result);
        }
    });
})

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


app.post('/sendRideNameBackend', (req, res) =>{
    console.log(req.body);

    rideListGraph = req.body.rideList;

});

app.get('/sendRideNameGraph', (req, res) =>{
    console.log(rideJSONData)
    res.send(rideListGraph);
});

app.post('/sendStatsBackend', (req, res) => {
    console.log(req.body);

    statListGraph = req.body.statList;
})


app.get('/sendStatsGraph', (req, res) =>{
    res.send(statListGraph);
});



app.listen(3001, () =>{
    console.log('Running on port 3001');
})