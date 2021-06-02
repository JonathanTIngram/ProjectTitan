import React, { useState } from 'react';
import styled from 'styled-components';
import Axios from 'axios'
import { NavLink as Link} from 'react-router-dom';
import FileUpload from '../components/FileUpload/FileUpload'; 
import Navbar from '../components/General/Navbar';
import Banner from '../components/General/Bannerbar';
import { useHistory } from 'react-router-dom';
export const Nav = styled.nav`
  background: transparent;
  height: 3px;
  display: flex;
  position: absolute;
  top: 3%;
  right: 7%;
  font-size: 15px;
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

export const CreateLink = styled(Link)`
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

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
`;

const OuterBorder = styled.div`
  width: 100%;
  height: 660px;
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
  height: 615px;
  border-right: 2px solid;
  font-family: 'Arial', sans-serif;
  font-size: 18px;
  overflow-y: scroll;
`;

const InfoBar = styled.div`
  font-family: "Lucida Console", monospace;
  font-size: 22px;
  align-content: center;
  text-align: center;
  border-bottom: 2px solid;
  width: 113%;
`;

const SafetyInfo = styled.div`
    font-family: 'Arial', sans-serif;
    font-size: 18px;
    position: absolute;
    right: 30%;
    bottom: 0%;
    height: 40%;
    width: 30%;
    border: 2px solid;
    overflow-y: auto;
`;

const PhoneInfo = styled.div`
    font-family: 'Arial', sans-serif;
    font-size: 18px;
    width: 30%;
    height: 40%;
    position: absolute;
    left: 69.9%;
    bottom: 0;
    border: 2px solid;
    overflow-y: auto;
`;

const ReportInfo = styled.div`
    overflow-y: hidden;
    border: 2px solid;
    font-family: 'Arial', sans-serif;
    font-size: 16px;
    position: absolute;
    padding: 5px;
    text-align: center;
    width: 17%;
    height: 357px;
    right: 43%;
    top: 5.8%;
`;

const Upload = styled.div`
    border: 0px solid;   
    height: 54%;
    width: 43%;
    position: absolute;
    top: 6%;
    right: 0%;
`;
const Box = styled.div`
    border-bottom: 2px solid;   
    height: 14%;
    margin-bottom: 4px;
`;

const CreateButton = styled.button`
  padding-left: 40%;
  padding-right: 40%;
  margin-top: -500px;
  width: 100%;
  height: 8%;
`

const styleGray = {backgroundColor : '#AFAFAF'};
export default function CreatePage() {


//states
//for getting attraction 
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


//for getting safety critcal information
const [maxWind, setMaxWind] = useState('');
const [minTemp, setMinTemp] = useState('');
const [powerRedundancy, setPowerRedundancy] = useState('');
const [numGates, setNumGates] = useState('');

//for getting phone information
const [ridePrimary, setRidePrimary] = useState('');
const [rideSecondary, setRideSecondary] = useState('');
const [rideTertiary, setRideTertiary] = useState('');

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
    rideType: rideType,
    maxWind: maxWind,
    minTemp, minTemp,
    powerRedundancy, powerRedundancy,
    numGates, numGates,
    ridePrimary, ridePrimary,
    rideSecondary, rideSecondary,
    rideTertiary, rideTertiary
                }).then(() =>{
                  alert('successful insert');
              }).then( () => {
                console.log("Successfully sent to port 3001");
              });
};

var emptyBoxArray = [];
const checkEmpty = () => {
  var empty = false;
  if(ride_name == '') {
    alert("Ride name is empty");
    emptyBoxArray.push('ride_nameID');
    empty = true;
  }
  if(dailyOpening == '') {
    alert("Daily Opening is empty");
    emptyBoxArray.push('dailyOpeningID');
    empty = true;
  }
  if(dailyClosing == '') {
    alert("Daily Closing is empty");
    emptyBoxArray.push('dailyClosingID');
    empty = true;
  }
  if(theoryCapacity == '') {
    alert("Theoretical Capacity is empty");
    emptyBoxArray.push('theoryCapacityID');
    empty = true;
  }
  if(targetCapacity == '') {
    alert("Target Capacity is empty");
    emptyBoxArray.push('targetCapacityID');
    empty = true;
  }
  if(maxVehicles == '') {
    alert("Max Vehicles is empty");
    emptyBoxArray.push('maxVehiclesID');
    empty = true;
  }
  if(minVehicles == '') {
    alert("Min Vehicles is empty");
    emptyBoxArray.push('minVehiclesID');
    empty = true;
  }
  if(maxSeats == '') {
    alert("Max seats is empty");
    emptyBoxArray.push('maxSeatsID');
    empty = true;
  }
  if(maxStaff == '') {
    alert("Max Staff is empty");
    emptyBoxArray.push('maxStaffID');
    empty = true;
  }
  if(minStaff == '') {
    alert("Min Staff is empty");
    emptyBoxArray.push('minStaffID');
    empty = true;
  }
  if(parkSection == '') {
    alert("Park Section is empty");
    emptyBoxArray.push('parkSectionID');
    empty = true;
  }
  if(weatherCode == '') {
    alert("Weather Code is empty");
    emptyBoxArray.push('weatherCodeID');
    empty = true;
  }
  if(rideType == '') {
    alert("Ride Type is empty");
    emptyBoxArray.push('rideTypeID');
    empty = true;
  }
  return empty;
}
let history = useHistory();

const changeInputColor = (emptyBoxArray) => {
  for (let index = 0; index < emptyBoxArray.length; index++) {
    var element = emptyBoxArray[index];
    console.log(element);
    document.getElementById(element).style.backgroundColor = "pink";
  }
}
return (
  
    <>
    
    <Navbar/>
    <Banner/>
    <OuterBorder>
    <CreateBar> Create a new Attraction 
    <Nav>
         <NavMenu>
             <NavLink to='/CreatePage/Block' activeStyle>
                 Block Section
             </NavLink>
             <NavLink to='/CreatePage/Danger' activeStyle>
                 Danger Areas
             </NavLink>
             <NavLink to='/CreatePage/Restrict' activeStyle>
                 Restricted Areas
             </NavLink>
             </NavMenu>
    </Nav>
    </CreateBar>
    <EditBorder>
      <InfoBar> Basic Information </InfoBar>
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
                <input id='ride_nameID' type='text' name='ride_name' onChange={(e) => {
                  setRide_name(e.target.value);
                }}></input> </td>
        </tr>

        <tr>
        <td>Daily Opening</td>
        <th> 
              <input id='dailyOpeningID' type='time' name='dailyOpening' onChange={(e) => {
                        setDailyOpening(e.target.value);
                      }}></input>
        </th>
        </tr>

        <tr>
        <td>Daily Closing</td>
        <th> 
            <input id='dailyClosingID' type='time' name='dailyClosing' onChange={(e) => {
                      setDailyClosing(e.target.value);
                    }}></input>
        </th>
        </tr>

        <tr>
        <td>Theoretical Capacity</td>
        <th> 
            <input id='theoryCapacityID' type='number' name='theoryCapacity' onChange={(e) => {
                          setTheoryCapacity(e.target.value);
                        }}></input>
        </th>
        </tr>

        <tr>
        <td>Target Capacity</td>
        <th> 
            <input id='targetCapacityID' type='number' name='targetCapcity' onChange={(e) => {
                          setTargetCapacity(e.target.value);
                        }}></input>  
        </th>
        </tr>

        <tr>
        <td>Max Vehicles</td>
        <th>
            <input id='maxVehiclesID' type='number' name='maxVehicles' onChange={(e) => {
                          setMaxVehicles(e.target.value);
                        }}></input>
        </th>
        </tr>

        <tr>
        <td>Min Vehicles</td>
        <th>
            <input id='minVehiclesID'type='number' name='minVehicles' onChange={(e) => {
                          setMinVehicles(e.target.value);
                        }}></input>
        </th>
        </tr>

        <tr>
        <td>Seats per Vehicle</td>
        <th>
            <input id='maxSeatsID' type='number' name='maxSeats' onChange={(e) => {
                          setMaxSeats(e.target.value);
                        }}></input>
        </th>
        </tr>

        <tr>
        <td>Max Employees</td>
        <th>
            <input id='maxStaffID' type='number' name='maxStaff' onChange={(e) => {
                          setMaxStaff(e.target.value);
                        }}></input>
        </th>
        </tr>

        <tr>
        <td>Min Employees</td>
        <th>
            <input id='minStaffID' type='number' name='minStaff' onChange={(e) => {
                          setMinStaff(e.target.value);
                        }}></input>
        </th>
        </tr>

        <tr>
        <td>Park Section</td>
        <th>
              <input id='parkSectionID' type='text' name='parkSection' onChange={(e) => {
                            setParkSection(e.target.value);
                          }}></input>
        </th>
        </tr>

        <tr>
        <td>Weather Code</td>
        <th>
              <input id='weatherCodeID' type='text' name='weatherCode' onChange={(e) => {
                            setWeatherCode(e.target.value);
                          }}></input>
        </th>
        </tr>
        <tr>
        <td>Type</td>
        <th>
            <input id='rideTypeID' type='text' name='rideType' onChange={(e) => {
                          setRideType(e.target.value);
              }}></input>
        </th>
        </tr>
        
        </tbody>

        </table>
        <CreateButton onClick={() => { 
            if(checkEmpty() == true){
              window.alert("Data entry error")
              changeInputColor(emptyBoxArray);
              console.log(emptyBoxArray);
            }
            else { 
              window.alert(`The ride: ${ride_name} has been created`)
              submitAttraction();
              history.push('/newAttraction')
        }
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
        <FileUpload />  
    </Upload>
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
            <td>
                        <input type='text' name='weatherCode' onChange={(e) => {
                          setWeatherCode(e.target.value);
                        }}></input>
            </td>
          </tr>

          <tr>
            <td>Max Operating Wind</td>
            <td>
                        <input type='text' name='maxWind' onChange={(e) => {
                          setMaxWind(e.target.value);
                        }}></input>
            </td>
          </tr>

          <tr>
            <td>Min Operating Temperature</td>
            <td>
                        <input type='text' name='minTemp' onChange={(e) => {
                          setMinTemp(e.target.value);
                        }}></input>
            </td>
          </tr>

          <tr>
            <td>Power Redundancy</td>
            <td>
                        <input type='text' name='powerRedundancy' onChange={(e) => {
                          setPowerRedundancy(e.target.value);
                        }}></input>

            </td>
          </tr>

          <tr>
            <td>Number of Gates</td>
            <td>              
                        <input type='text' name='numGates' onChange={(e) => {
                          setNumGates(e.target.value);
                        }}></input>
              </td>
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
            <td>
                      <input type='text' name='ridePrimary' onChange={(e) => {
                          setRidePrimary(e.target.value);
                        }}></input>
            </td>
            <td>
              <input type='checkbox'></input>
            </td>
            <td>
              <input type='checkbox'></input>
            </td>
          </tr>

          <tr>
            <td>Secondary</td>
            <td>
                        <input type='text' name='rideSecondary' onChange={(e) => {
                          setRideSecondary(e.target.value);
                        }}></input>
            </td>
            <td>
              <input type='checkbox'></input>
            </td>
            <td>
              <input type='checkbox'></input>
            </td>
          </tr>

          <tr>
            <td>Tertiary</td>
            <td>
                        <input type='text' name='rideTeriary' onChange={(e) => {
                            setRideTertiary(e.target.value);
                        }}></input>
            </td>
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