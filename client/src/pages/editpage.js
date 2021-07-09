import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Axios from 'axios'
import { NavLink as Link } from 'react-router-dom';
import Navbar from '../components/General/Navbar';
import Banner from '../components/General/Bannerbar';

export const Nav = styled.nav`
  background: transparent;
  height: 3px;
  display: flex;
  position: absolute;
  top: 3%;
  right: 7%;
  font-size: 15px;
  font-family: "Lucida Console", monospace;
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
`;
export const EditLink = styled(Link)`
  color: black;
  border-right: 10px solid transparent;
  display: block;
  margin: 0 -0.3%;
  align-items: center;
  text-decoration: none;
  padding: 2px;
  height: 100%;
  cursor: default;
  &.active {
    color: black;
  }
`;

export const NavLink = styled(Link)`
  color: black;
  border-bottom: 25px solid lightgray;
  border-right: 10px solid transparent;
  display: block;
  margin: 0 -0.3%;
  align-items: center;
  text-decoration: none;
  padding: 2px;
  height: 100%;
  cursor: default;
  &.active {
    color: black;
  }
`;

const Upload = styled.div`
    border: 0px solid;   
    height: 54%;
    width: 43%;
    position: absolute;
    top: 6%;
    right: 0%;
`;
const OuterBorder = styled.div`
  width: 100%;
  height: 685px;
  position: absolute;
  margin: 13px 0px;
  border: solid 2px;
`;

const CreateBar = styled.div`
  font-family: "Lucida Console", monospace;
  width: 100%;
  height: 6%;
  padding: 6px;
  border-bottom: 2px solid;
  font-size: 22px;
`;

const EditBorder = styled.nav`
  width: 40%;
  height: 590px;
  font-family: 'Arial', sans-serif;
  font-size: 18px;
  overflow: scroll;
`;

const InfoBar = styled.div`
  font-family: "Lucida Console", monospace;
  font-size: 22px;
  align-content: center;
  border-bottom: 2px solid;
  padding-left: 5%;
  text-align: center;
  border-right: 2px solid;
  
`;

const SafetyInfo = styled.div`
    font-family: 'Arial', sans-serif;
    font-size: 19px;
    text-align: center;
    position: absolute;
    right: 30%;
    bottom: 0%;
    height: 41%;
    width: 30%;
    border: 2px solid;
    overflow: scroll;
`;

const PhoneInfo = styled.div`
    font-family: 'Arial', sans-serif;
    font-size: 19px;
    text-align: center;
    width: 30%;
    height: 41%;
    position: absolute;
    left: 69.9%;
    bottom: 0%;
    border: 2px solid;
`;

const ReportInfo = styled.div`
    overflow: hidden;
    border: 2px solid;
    font-family: 'Arial', sans-serif;
    font-size: 16px;
    position: absolute;
    padding: 5px;
    text-align: center;
    width: 17%;
    height: 365px;
    right: 43%;
    top: 5.8%;
`;

const Box = styled.div`
    border-bottom: 2px solid;   
    height: 14%;
    margin-bottom: 4px;
`;

const EditButton = styled.button`
  padding-left: 40%;
  padding-right: 40%;
  margin-top: -500px;
  width: 100%;
  height: 8%;
`

const RideSelect = styled.select`
    text-align: right;
`

const styleGray = {backgroundColor : '#AFAFAF'};
export default function EditPage(props) {
  

    //states
const [ride_name, setRideName] = useState('');
var [dailyOpening, setDailyOpening] = useState('');
var [dailyClosing, setDailyClosing] = useState('');
var [theoryCapacity, setTheoryCapacity] = useState('');
var [targetCapacity, setTargetCapacity] = useState('');
var [minVehicles, setMinVehicles] = useState('');
var [maxVehicles, setMaxVehicles] = useState('');
var [maxSeats, setMaxSeats] = useState('');
var [minStaff, setMinStaff] = useState('');
var [maxStaff, setMaxStaff] = useState('');
var [parkSection, setParkSection] = useState('');
var [weatherCode, setWeatherCode] = useState('');
var [rideType, setRideType] = useState('');

//for the drop down menu
const [rideSelect, setRideSelect] = useState('');

//state to get all attractions
const [attractionList, setAttractionList] = useState([]);
//send the attraction data to the backend running on port 3001
//specifically /addAttraction

//recieve data from backend to display
const getAttractions = () => {
      Axios.get('http://18.204.6.173:3001/getAttraction').then(res => {
      setAttractionList(res.data);
      return attractionList;
      }).catch(err => console.log(err));
}


const editAttraction = () =>{
  Axios.put('http://18.204.6.173:3001/editAttraction', {
                ride_name: ride_name,
                dailyOpening: dailyOpening,
                dailyClosing: dailyClosing,
                theoryCapacity: theoryCapacity,
                targetCapacity: targetCapacity,
                minVehicles: minVehicles,
                maxVehicles: maxVehicles,
                maxSeats: maxSeats,
                minStaff: minStaff,
                maxStaff: maxStaff,
                parkSection: parkSection,
                weatherCode: weatherCode,
                rideType: rideType,

                rideSelect: setRideSelect

                
                
                }).then(() =>{
                  alert('successful insert');

              }).then( () => {
                console.log("Successfully sent to port 3001");
              });

              window.location.href='/newAttraction';
};

var emptyBoxArray = [];
const checkNegative = () => {
  var empty = false;

  if(dailyOpening < 0) {
    alert("Daily Opening is negative");
    emptyBoxArray.push('dailyOpeningID');
    empty = true;
  }
  if(dailyClosing < 0) {
    alert("Daily Closing is negative");
    emptyBoxArray.push('dailyClosingID');
    empty = true;
  }
  if(theoryCapacity < 0) {
    alert("Theoretical Capacity is negative");
    emptyBoxArray.push('theoryCapacityID');
    empty = true;
  }
  if(targetCapacity < 0) {
    alert("Target Capacity is negative");
    emptyBoxArray.push('targetCapacityID');
    empty = true;
  }
  if(maxVehicles < 0) {
    alert("Max Vehicles is negative");
    emptyBoxArray.push('maxVehiclesID');
    empty = true;
  }
  if(minVehicles < 0) {
    alert("Min Vehicles is negative");
    emptyBoxArray.push('minVehiclesID');
    empty = true;
  }
  if(maxSeats < 0) {
    alert("Max seats is negative");
    emptyBoxArray.push('maxSeatsID');
    empty = true;
  }
  if(maxStaff < 0) {
    alert("Max Staff is negative");
    emptyBoxArray.push('maxStaffID');
    empty = true;
  }
  if(minStaff < 0) {
    alert("Min Staff is negative");
    emptyBoxArray.push('minStaffID');
    empty = true;
  }
  if(parkSection < 0) {
    alert("Park Section is negative");
    emptyBoxArray.push('parkSectionID');
    empty = true;
  }
  if(weatherCode < 0) {
    alert("Weather Code is empty");
    emptyBoxArray.push('weatherCodeID');
    empty = true;
  }
  if(rideType < 0) {
    alert("Ride Type is negative");
    emptyBoxArray.push('rideTypeID');
    empty = true;
  }
  return empty;
}
const changeInputColor = (emptyBoxArray) => {
  for (let index = 0; index < emptyBoxArray.length; index++) {
    var element = emptyBoxArray[index];
    console.log(element);
    document.getElementById(element).style.backgroundColor = "pink";
  }
}
var storeOld = [];
const setOldValues = () => {
  if(dailyOpening === ''){
    dailyOpening = storeOld[0];
  }
  if(dailyClosing === ''){
    dailyClosing = storeOld[1];
  }
  if(theoryCapacity === ''){
    theoryCapacity = storeOld[2];
  }
  if(targetCapacity === ''){
    targetCapacity = storeOld[3];
  }
  if(maxVehicles === ''){
    maxVehicles = storeOld[4];
  }
  if(minVehicles === ''){
    minVehicles = storeOld[5];
  }
  if(maxSeats === ''){
    maxSeats = storeOld[6];
  }
  if(maxStaff === ''){
    maxStaff = storeOld[7];
  }
  if(minStaff === ''){
    minStaff = storeOld[8];
  }
  if(parkSection === ''){
    parkSection = storeOld[9];
  }
  if(weatherCode === ''){
    weatherCode = storeOld[10];
  }      
  if(rideType === ''){
    rideType = storeOld[11];
  } 
}


return (
    <>
    <Navbar/>
    <Banner/>
    
    {useEffect(() =>{
      {window.addEventListener('load', getAttractions())}
      {window.addEventListener('load', setRideSelect(props.location.ride_name))}
      {window.addEventListener('load', setRideName(props.location.ride_name))}

    })}
    <OuterBorder>
    <CreateBar> Edit an Attraction
          <Nav>
         <NavMenu>
             <NavLink to='/EditPage/Block' activeStyle>
                 Block Section
             </NavLink>
             <NavLink to='/EditPage/Danger' activeStyle>
                 Danger Areas
             </NavLink>
             <NavLink to='/EditPage/Restrict' activeStyle>
                 Restricted Areas
             </NavLink>
             </NavMenu>
    </Nav>
    </CreateBar>
  
    <EditBorder>

    <InfoBar> Basic Information</InfoBar>



    <table className="table table-bordered table-striped">
        <thead>
          <tr style = {styleGray}>

            <th scope="col">Property</th>
            <th scope="col">Value</th>
          </tr>
        </thead>
        <tbody>

          <tr>
          <td>Name</td>
          <td>          

              
                          <> 
                          <label> {props.location.ride_name} </label>
                          </>
                    
        


          </td>
          </tr>

          <tr>
          <td>Daily Opening</td>
          <th> 
            
              
              {attractionList.map((val, key) => {
                if (rideSelect == val.ride_name){
                    var dailyOpening = val.dailyOpening;
                    storeOld.push(dailyOpening);
                    return (
                      <> 
                        <input type='time' id='dailyOpeningID' name='dailyOpening' placeholder={dailyOpening} onInput={(e) => {
                          setDailyOpening(e.target.value);
                        }}></input>  
                      </>
                      );

                }
                })}

          </th>
          </tr>

          <tr>
          <td>Daily Closing</td>
          <th> 

              {attractionList.map((val, key) => {

                    if (rideSelect == val.ride_name){
                        var dailyClosing = val.dailyClosing;
                        storeOld.push(dailyClosing);
                        return (
                          <> 
                            <input type='time' id='dailyClosingID' name='dailyClosing' placeHolder={dailyClosing} onInput={(e) => {
                                setDailyClosing(e.target.value);
                              }}
                              
                            ></input>  
                          </>
                        );
                    }
                })}

          </th>
          </tr>

          <tr>
          <td>Theoretical Capacity</td>
          <th> 

              {attractionList.map((val, key) => {
                        if (rideSelect == val.ride_name){
                            var theoryCapacity = val.theoryCapacity;
                            storeOld.push(theoryCapacity);
                            //storeOld.push(theoryCapacity);
                            return (
                              <> 
                                <input type='text' id='theoryCapacityID' name='theoryCapacity' placeHolder={theoryCapacity} onInput={(e) => {
                                    setTheoryCapacity(e.target.value);
                                  }}
                                ></input>  
                              </>
                            );
                        }
              })}

          </th>
          </tr>

          <tr>
          <td>Target Capacity</td>
          <th> 

            {attractionList.map((val, key) => {
                      if (rideSelect == val.ride_name){
                          var targetCapacity = val.targetCapacity;
                          storeOld.push(targetCapacity);
                          return (
                            <> 
                              <input type='text' id='targetCapacityID' name='targetCapacity' placeHolder={targetCapacity} onInput={(e) => {
                                setTargetCapacity(e.target.value);
                                }}
                              ></input>  
                            </>
                          );
                      }
              })}

          </th>
          </tr>

          <tr>
          <td>Max Vehicles</td>
          <th>

              {attractionList.map((val, key) => {
                          if (rideSelect == val.ride_name){
                              var maxVehicles = val.maxVehicles;
                              storeOld.push(maxVehicles);
                              return (
                                <> 
                                  <input type='text' id='maxVehiclesID' name='maxVehicles' placeHolder={maxVehicles} onInput={(e) => {
                                    setMaxVehicles(e.target.value);   
                                    }}
                                  ></input>  
                                </>
                              );
                          }
                })}

          </th>
          </tr>

          <tr>
          <td>Min Vehicles</td>
          <th>

              {attractionList.map((val, key) => {

                          if (rideSelect == val.ride_name){
                              var minVehicles = val.minVehicles;
                              storeOld.push(minVehicles);
                              return (
                                <> 
                                  <input type='text' id='minVehiclesID' name='minVehicle' placeHolder={minVehicles} onInput={(e) => {
                                    setMinVehicles(e.target.value);
                                    }}
                                  ></input>  
                                </>
                              );
                          }
                })}

          </th>
          </tr>

          <tr>
          <td>Seats per Vehicle</td>
          <th>

              {attractionList.map((val, key) => {
                         
                          if (rideSelect == val.ride_name){
                              var maxSeats = val.maxSeats;
                              storeOld.push(maxSeats);
                              return (
                                <> 
                                  <input type='text' id='maxSeatsID' name='maxSeats' placeHolder={maxSeats} onInput={(e) => {
                                       setMaxSeats(e.target.value);
                                    }}
                                  ></input>  
                                </>
                              );
                          }
                })}

          </th>
          </tr>

          <tr>
          <td>Max Employees</td>
          <th>

              {attractionList.map((val, key) => {

                          if (rideSelect == val.ride_name){
                              var maxStaff = val.maxStaff;
                              storeOld.push(maxStaff);
                              return (
                                <> 
                                  <input type='text' id='maxStaffID' name='maxStaff' placeHolder={maxStaff} onInput={(e) => {
                                    setMaxStaff(e.target.value);
                                    }}
                                  ></input>  
                                </>
                              );
                          }
                })}

          </th>
          </tr>

          <tr>
          <td>Min Employees</td>
          <th>

              {attractionList.map((val, key) => {
                    
                          if (rideSelect == val.ride_name){
                              var minStaff = val.minStaff;
                              storeOld.push(minStaff);
                              return (
                                <> 
                                  <input type='text' id='minStaffID' name='minStaff' placeHolder={minStaff} onInput={(e) => {
                                      setMinStaff(e.target.value);
                                    }}
                                  ></input>  
                                </>
                              );
                          }
                })}

          </th>
          </tr>

          <tr>
          <td>Park Section</td>
          <th>

              {attractionList.map((val, key) => {
                      
                          if (rideSelect == val.ride_name){
                              var parkSection = val.parkSection;
                              storeOld.push(parkSection);
                              return (
                                <> 
                                  <input type='text' id='parkSectionID' name='parkSection' placeHolder={parkSection} onInput={(e) => {
                                      setParkSection(e.target.value);
                                    }}
                                  ></input>  
                                </>
                              );
                          }
                })}

          </th>
          </tr>

          <tr>
          <td>Weather Code</td>
          <th>

              {attractionList.map((val, key) => {
                  
                          if (rideSelect == val.ride_name){
                              var weatherCode = val.weatherCode;
                              storeOld.push(weatherCode);
                              return (
                                <> 
                                  <input type='text' id='weatherCodeID' name='weatherCode' placeHolder={weatherCode} onInput={(e) => {
                                      setWeatherCode(e.target.value);
                                    }}
                                  ></input>  
                                </>
                              );
                          }
                })}

          </th>
          </tr>

          <tr>
          <td>Type</td>
          <th>

              {attractionList.map((val, key) => {
                
                          if (rideSelect == val.ride_name){
                              var rideType = val.rideType;
                              storeOld.push(rideType);
                              return (
                                <> 
                                  <input type='text' id='rideTypeID' name='rideType' placeHolder={rideType} onInput={(e) => {
                                      setRideType(e.target.value);
                                    }}
                                  ></input>  
                                </>
                              );
                          }
                })}

          </th>
          </tr>

          </tbody>

        

        </table>
        <EditButton onClick={() => { 
          if(checkNegative() == true){
            changeInputColor(emptyBoxArray);
          }
          else{
            setOldValues(); 
            window.alert(`The ride: ${ride_name} has been edited`);
            editAttraction();
            console.log(storeOld);
          }


        }}>Edit Attraction</EditButton>

    </EditBorder>
    <ReportInfo>
        <Box> 
        Required <ul>  Documentation</ul> </Box>
        <ul>Operations Report</ul>  
        <ul>Turnstile Report</ul> 
        <ul>Lockout Report</ul>
    </ReportInfo>

    <Upload>  
    <h4 className='display-4 text-center mb-4'>
      <i className='fab fa-react' /> Titan Upload</h4> </Upload>
      <SafetyInfo>
      <InfoBar>Safety Critical Information</InfoBar>
      <table className="table table-bordered table-striped">
        <thead>
          <tr style = {styleGray}>
            <th scope="col">Property</th>
            <th scope="col">Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Weather Code</td>
            <td>Alpha</td>
          </tr>

          <tr>
            <td>Max Operating Wind</td>
            <td>34 MPH</td>
          </tr>

          <tr>
            <td>Min Operating Temperature</td>
            <td>41 F</td>
          </tr>

          <tr>
            <td>Power Redundancy</td>
            <td>On-Site</td>
          </tr>

          <tr>
            <td>Number of Gates</td>
            <td>11</td>
          </tr>
        </tbody>
      </table>
    </SafetyInfo>
    <PhoneInfo>
      <InfoBar>Phone Information</InfoBar>
      <table className="table table-bordered table-striped">
        <thead>
          <tr style = {styleGray}>
            <th scope="col">Name</th>
            <th scope="col">Number</th>
            <th scope="col">Out</th>
            <th scope="col">In</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Primary</td>
            <td>3152</td>
            <td>
              <input type='checkbox'></input>
            </td>
            <td>
              <input type='checkbox'></input>
            </td>
          </tr>

          <tr>
            <td>Secondary</td>
            <td>3153</td>
            <td>
              <input type='checkbox'></input>
            </td>
            <td>
              <input type='checkbox'></input>
            </td>
          </tr>

          <tr>
            <td>Tertiary</td>
            <td>3154</td>
            <td>
              <input type='checkbox'></input>
            </td>
            <td>
              <input type='checkbox'></input>
            </td>
          </tr>
        </tbody>
      </table>
    </PhoneInfo>
    </OuterBorder>
    </>
    );
}