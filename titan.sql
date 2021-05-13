CREATE USER 'titan'@'localhost' IDENTIFIED BY 'titanTeam123$';
GRANT ALL PRIVILEGES ON * . * TO 'titan'@'localhost';
FLUSH PRIVILEGES;
GRANT ALL PRIVILEGES ON * . * TO 'titan'@'localhost';
ALTER USER 'titan'@'localhost' IDENTIFIED WITH mysql_native_password BY 'titanTeam123$';
flush privileges;

CREATE DATABASE park_data;
USE park_data;

drop table park;
CREATE TABLE park (
	name VARCHAR(50) NOT NULL,
    CloseTime VARCHAR(50) NOT NULL,
    OpenTime VARCHAR(50) NOT NULL
);
  #  theoryCapacity INT NOT NULL,
  #  targetCapcity INT NOT NULL,
  #  minVehicles INT NOT NULL,
  #  maxVehicles INT NOT NULL,
   # maxStaff INT NOT NULL,
  #  parkSection INT NOT NULL,
  #  weatherCode VARCHAR(50),
    #attrType VARCHAR(50)

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
    UNIQUE KEY unique_ride_name (ride_name)
);

drop table attraction;

INSERT INTO attraction (ride_name, rideModel, rideArea, theoryCapacity, targetCapacity, minVehicles, maxVehicles, maxSeats, minStaff, maxStaff, powerReq, maxHeight, trackLength) VALUES ("Batman", "B12", "Middle", 20, 10, 4, 8, 16, 3, 6, "2000w", "2000ft", "500ft");

SELECT * FROM attraction WHERE ride_name LIKE 'Superman';



SELECT * FROM attraction;

UPDATE attraction SET rideModel = "ABC" WHERE ride_name = "Superman";


DELETE FROM attraction WHERE ride_name = "NewTitan";

INSERT INTO attraction (ride_name, rideModel, rideArea, theoryCapacity, targetCapacity, minVehicles, maxVehicles, maxSeats, minStaff, maxStaff, powerReq, maxHeight, trackLength) VALUES ()


CREATE TABLE attractionData (
	dataID INT NOT NULL,
	eventTime TIME NOT NULL,
    #value INT NOT NULL,
    isIn BOOLEAN #in/outa
);

SELECT * FROM attraction;

CREATE TABLE phone (
	number INT NOT NULL,
    park VARCHAR(50) NOT NULL
    #super? What is super?
);

CREATE TABLE scheduledCall (
	phone VARCHAR(14) NOT NULL,
    eventTime TIME NOT NULL,
    status VARCHAR (50) NOT NULL
    #interval? what is the interval?
);

CREATE TABLE callInterval (
	intervalTime INTERVAL 
);

CREATE TABLE data (
	name VARCHAR(50) NOT NULL,
    description VARCHAR(50) NOT NULL
);

