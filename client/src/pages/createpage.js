import React, { useState, useRef, useEffect, useCallback } from 'react';

import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import Axios from 'axios'

import { NavLink as Link } from 'react-router-dom';


export const NavLink = styled(Link)`
  font: bold 20px Arial;
  text-decoration: none;
  background-color: #EEEEEE;
  color: #333333;
  border-top: 1px solid #CCCCCC;
  border-right: 1px solid #333333;
  border-bottom: 1px solid #333333;
  border-left: 1px solid #CCCCCC;
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
  height: 607px;
  border-right: 2px solid;
  font-family: 'Arial', sans-serif;
  font-size: 18px;
  overflow: scroll;
`;

const InfoBar = styled.div`
  font-family: "Lucida Console", monospace;
  font-size: 22px;
  align-content: center;
  border-bottom: 2px solid;
  padding-left: 10.5%;
  width: 40%;
  border-right: 2px solid;
`;
const InfoBar2 = styled.div`
  font-family: "Lucida Console", monospace;
  font-size: 22px;
  align-content: center;
  border-bottom: 2px solid;
  padding-left: 10.5%;
  width: 100%;
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
    overflow: hidden;
    overflow-y: scroll;
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
    overflow: hidden;
    overflow-y: scroll;
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

const CreateButton = styled.button`
    padding-right: 40%;
    padding-left: 40%;
`



const styleGray = {backgroundColor : '#AFAFAF'};
export default function CreatePage() {


//states
const [ride_name, setRide_name] = useState('');
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

//state to get all attractions
const [attractionList, setAttractionList] = useState([]);
//send the attraction data to the backend running on port 3001
//specifically /addAttraction
const submitAttraction = () =>{
  Axios.post('http://localhost:3001/addAttraction', {
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
                rideType: rideType
                }).then(() =>{
                  alert('successful insert');
              }).then( () => {
                console.log("Successfully sent to port 3001");
              });
};

const getAttractions = () => {
  Axios.get('http://localhost:3001/getAttraction').then( (res) => {
    console.log(res); //response
    setAttractionList(res.data);
  });
}
return (
    <>
    <OuterBorder>
    <CreateBar> Create a new Attraction </CreateBar>
    <InfoBar> Basic Information </InfoBar>
    <EditBorder>

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
                <input type='text' name='ride_name' onChange={(e) => {
                  setRide_name(e.target.value);
                }}></input> </td>
        </tr>

        <tr>
        <td>Daily Opening</td>
        <th> 
              <input type='text' name='dailyOpening' onChange={(e) => {
                        setDailyOpening(e.target.value);
                      }}></input>
        </th>
        </tr>

        <tr>
        <td>Daily Closing</td>
        <th> 
            <input type='text' name='dailyClosing' onChange={(e) => {
                      setDailyClosing(e.target.value);
                    }}></input>
        </th>
        </tr>

        <tr>
        <td>Theoretical Capacity</td>
        <th> 
            <input type='number' name='theoryCapacity' onChange={(e) => {
                          setTheoryCapacity(e.target.value);
                        }}></input>
        </th>
        </tr>

        <tr>
        <td>Target Capacity</td>
        <th> 
            <input type='number' name='targetCapcity' onChange={(e) => {
                          setTargetCapacity(e.target.value);
                        }}></input>  
        </th>
        </tr>

        <tr>
        <td>Max Vehicles</td>
        <th>
            <input type='number' name='maxVehicles' onChange={(e) => {
                          setMaxVehicles(e.target.value);
                        }}></input>
        </th>
        </tr>

        <tr>
        <td>Min Vehicles</td>
        <th>
            <input type='number' name='minVehicles' onChange={(e) => {
                          setMinVehicles(e.target.value);
                        }}></input>
        </th>
        </tr>

        <tr>
        <td>Seats per Vehicle</td>
        <th>
            <input type='number' name='maxSeats' onChange={(e) => {
                          setMaxSeats(e.target.value);
                        }}></input>
        </th>
        </tr>

        <tr>
        <td>Max Employees</td>
        <th>
            <input type='number' name='maxStaff' onChange={(e) => {
                          setMaxStaff(e.target.value);
                        }}></input>
        </th>
        </tr>

        <tr>
        <td>Min Employees</td>
        <th>
            <input type='number' name='minStaff' onChange={(e) => {
                          setMinStaff(e.target.value);
                        }}></input>
        </th>
        </tr>

        <tr>
        <td>Park Section</td>
        <th>
              <input type='text' name='parkSection' onChange={(e) => {
                            setParkSection(e.target.value);
                          }}></input>
        </th>
        </tr>

        <tr>
        <td>Weather Code</td>
        <th>
              <input type='text' name='weatherCode' onChange={(e) => {
                            setWeatherCode(e.target.value);
                          }}></input>
        </th>
        </tr>

        <tr>
        <td>Type</td>
        <th>
            <input type='text' name='rideType' onChange={(e) => {
                          setRideType(e.target.value);
                        }}></input>
        </th>
        </tr>
        
        </tbody>

        </table>

        <CreateButton onClick={ () =>{
            submitAttraction();
            window.alert(`The ride: ${ride_name} has been created`)
            window.location.href='/newAttraction';
        }}>Create Attraction</CreateButton>

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
      <InfoBar2>Safety Critical Information</InfoBar2>
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
      <InfoBar2>Phone Information</InfoBar2>
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