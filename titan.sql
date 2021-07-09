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
DROP TABLE collectedData;

SELECT * FROM attraction;
SELECT * FROM safetyCriticalInfo;
SELECT * FROM intervals;
SELECT * FROM parkIntervals;
SELECT * FROM collectedData;

CREATE TABLE intervals (
    ride_name VARCHAR(50),
    id int key AUTO_INCREMENT,
    timeValue INT,
    startingTime TIME,
    endingTime TIME,
    checkedWaitTime BOOLEAN,
    checkedThroughput BOOLEAN,
    checkedAvailableSeats BOOLEAN,
    checkedAvailableDown BOOLEAN
);


CREATE TABLE parkIntervals (
    id int key AUTO_INCREMENT,
    timeValue INT,
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

CREATE TABLE t1 (
  ts TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  dt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE collectedData (
	id INT,
    ride_name VARCHAR(50),
    WaitTime INT,
    Throughput INT,
    AvailableSeats INT,
    AvailableDown INT,
	ts TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    dt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);


CREATE TABLE collectedParkData (
    id INT,
    WaitTime INT,
    Throughput INT,
    AvailableSeats INT,
    AvailableDown INT,
    ts TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    dt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);


CREATE USER 'titan'@'18.204.6.173' IDENTIFIED BY 'titanTeam123$';
GRANT ALL PRIVILEGES ON * . * TO 'titan'@'18.204.6.173';
FLUSH PRIVILEGES;

ALTER USER 'titan'@'18.204.6.173' IDENTIFIED WITH mysql_native_password BY 'titanTeam123$'
