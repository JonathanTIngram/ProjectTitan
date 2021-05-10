CREATE DATABASE park_data;

use park_data;

CREATE TABLE attraction (
	ride_name VARCHAR(50) NOT NULL,
    dailyOpening VARCHAR(50),
    dailyClosing VARCHAR(50),
    theoryCapacity INT,
    targetCapacity INT,
    minVehicles INT,
    maxVehicles INT,
    maxSeats INT,
    minStaff INT,
    maxStaff INT,
    parkSection VARCHAR(50),
    weatherCode VARCHAR(50),
    rideType VARCHAR(50),
    maxWind INT,
    minTemp INT,
    powerRedundancy VARCHAR(50),
    numGates INT,
	ridePrimary INT,
    rideSecondary INT,
    rideTertiary INT,
    UNIQUE KEY unique_ride_name (ride_name)
);


DROP TABLE attraction;
DROP TABLE intervals;
DROP TABLE parkIntervals;

SELECT * FROM attraction;
SELECT * FROM safetyCriticalInfo;
SELECT * FROM intervals;
SELECT * FROM parkIntervals;


CREATE TABLE intervals (
	ride_name VARCHAR(50),
	timeValue TIME,
	startingTime TIME,
    endingTime TIME,
    checkedWaitTime BOOLEAN,
    checkedThroughput BOOLEAN,
    checkedAvailableSeats BOOLEAN,
    checkedAvailableDown BOOLEAN
);


CREATE TABLE parkIntervals (
	timeValue TIME,
	startingTime TIME,
    endingTime TIME,
    checkedWaitTime BOOLEAN,
    checkedThroughput BOOLEAN,
    checkedAvailableSeats BOOLEAN,
    checkedAvailableDown BOOLEAN
);


CREATE TABLE safetyCriticalInfo (
	ride_name VARCHAR(50) NOT NULL,
	weatherCode VARCHAR(50),
    maxWind INT,
    minTemp INT,
    powerRedundancy VARCHAR(50),
    numGates INT,
    UNIQUE KEY unique_ride_name (ride_name)
);


CREATE TABLE phoneInfo (
	ride_name VARCHAR(50) NOT NULL,
	ridePrimary VARCHAR(50),
    rideSecondary VARCHAR(50),
    rideTertiary VARCHAR(50),
    UNIQUE KEY unique_ride_name (ride_name)
);


CREATE TABLE collectedData (
	ride_name VARCHAR(50) NOT NULL,
	dataName VARCHAR(50) NOT NULL,
    createdDate DATE,
    dataValue INT
);


CREATE USER 'titan'@'localhost' IDENTIFIED BY 'titanTeam123$';
GRANT ALL PRIVILEGES ON * . * TO 'titan'@'localhost';
FLUSH PRIVILEGES;

ALTER USER 'titan'@'localhost' IDENTIFIED WITH mysql_native_password BY 'titanTeam123$'
