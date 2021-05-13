import React, { useState, useRef, useEffect, useCallback } from 'react';

import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
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
`

const RideSelect = styled.select`
    text-align: right;
`

const styleGray = {backgroundColor : '#AFAFAF'};
export default function EditPage() {

    //states
const [ride_name, setRideName] = useState('');
const [dailyOpening, setDailyOpening] = useState('');
const [dailyClosing, setDailyClosing] = useState('');
const [theoryCapacity, setTheoryCapacity] = useState('');
const [targetCapacity, setTargetCapacity] = useState('');
const [minVehicles, setMinVehicles] = useState('');
const [maxVehicles, setMaxVehicles] = useState('');
const [maxSeats, setMaxSeats] = useState('');
const [minStaff, setMinStaff] = useState('');
const [maxStaff, setMaxStaff] = useState('');
const [parkSection, setParkSection] = useState('');
const [weatherCode, setWeatherCode] = useState('');
const [rideType, setRideType] = useState('');

//for the drop down menu
const [rideSelect, setRideSelect] = useState('');

//state to get all attractions
const [attractionList, setAttractionList] = useState([]);
//send the attraction data to the backend running on port 3001
//specifically /addAttraction

//recieve data from backend to display
const getAttractions = () => {
      Axios.get('http://100.24.238.111:3001/getAttraction').then(res => {
      setAttractionList(res.data);
      return attractionList;
      }).catch(err => console.log(err));
      }


const editAttraction = () =>{
  Axios.put('http://100.24.238.111:3001/editAttraction', {
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

return (
    <>
    <Navbar/>
    <Banner/>
    {useEffect(() =>{
      {window.addEventListener('load', getAttractions())}
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
    <RideSelect onChange={(e) => {
                        setRideSelect(e.target.value);
                      }}>
                        <option>Select Attraction</option>
            {attractionList.map((val, key) => {

              return (
                  <>                                
                          <option>{val.ride_name}</option>
                  </>
              );
              })}

          </RideSelect>
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

              {attractionList.map((val, key) => {
                    var ride_name;
                    if (rideSelect == val.ride_name){
                        ride_name = val.ride_name;
                        return (
                          <> 
                            <input type='text' name='ride_name' placeHolder={ride_name} onChange={(e) => {
                                setRideName(e.target.value);
                              }}
                            ></input>  
                          </>
                        );
                    }
                })}


          </td>
          </tr>

          <tr>
          <td>Daily Opening</td>
          <th> 
            
              
              {attractionList.map((val, key) => {
                var dailyOpening;
                if (rideSelect == val.ride_name){
                    dailyOpening = val.dailyOpening;
                    return (
                      <> 
                        <input type='text' name='dailyOpening' placeHolder={dailyOpening} onChange={(e) => {
                            setDailyOpening(e.target.value);
                          }}
                        ></input>  
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
                    var dailyClosing;
                    if (rideSelect == val.ride_name){
                        dailyClosing = val.dailyClosing;
                        return (
                          <> 
                            <input type='text' name='dailyClosing' placeHolder={dailyClosing} onChange={(e) => {
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
                        var theoryCapacity;
                        if (rideSelect == val.ride_name){
                            theoryCapacity = val.theoryCapacity;
                            return (
                              <> 
                                <input type='text' name='theoryCapacity' placeHolder={theoryCapacity} onChange={(e) => {
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
                      var targetCapacity;
                      if (rideSelect == val.ride_name){
                          targetCapacity = val.targetCapacity;
                          return (
                            <> 
                              <input type='text' name='targetCapacity' placeHolder={targetCapacity} onChange={(e) => {
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
                          var maxVehicles;
                          if (rideSelect == val.ride_name){
                              maxVehicles = val.maxVehicles;
                              return (
                                <> 
                                  <input type='text' name='maxVehicles' placeHolder={maxVehicles} onChange={(e) => {
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
                          var minVehicles;
                          if (rideSelect == val.ride_name){
                              minVehicles = val.minVehicles;
                              return (
                                <> 
                                  <input type='text' name='minVehicle' placeHolder={minVehicles} onChange={(e) => {
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
                          var maxSeats;
                          if (rideSelect == val.ride_name){
                              maxSeats = val.maxSeats;
                              return (
                                <> 
                                  <input type='text' name='maxSeats' placeHolder={maxSeats} onChange={(e) => {
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
                          var maxStaff;
                          if (rideSelect == val.ride_name){
                              maxStaff = val.maxStaff;
                              return (
                                <> 
                                  <input type='text' name='maxStaff' placeHolder={maxStaff} onChange={(e) => {
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
                          var minStaff;
                          if (rideSelect == val.ride_name){
                              minStaff = val.minStaff;
                              return (
                                <> 
                                  <input type='text' name='minStaff' placeHolder={minStaff} onChange={(e) => {
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
                          var parkSection;
                          if (rideSelect == val.ride_name){
                              parkSection = val.parkSection;
                              return (
                                <> 
                                  <input type='text' name='parkSection' placeHolder={parkSection} onChange={(e) => {
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
                          var weatherCode;
                          if (rideSelect == val.ride_name){
                              weatherCode = val.weatherCode;
                              return (
                                <> 
                                  <input type='text' name='weatherCode' placeHolder={weatherCode} onChange={(e) => {
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
                          var rideType;
                          if (rideSelect == val.ride_name){
                              rideType = val.rideType;
                              return (
                                <> 
                                  <input type='text' name='rideType' placeHolder={rideType} onChange={(e) => {
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

        <EditButton onClick={(editAttraction)}>Edit Attraction</EditButton>

        </table>

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