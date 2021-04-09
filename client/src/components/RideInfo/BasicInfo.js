import styled from 'styled-components';
import React, { useState, useRef, useEffect, useCallback } from 'react';
import Axios from 'axios';

const Border = styled.div`
overflow: hidden;
background: transparent;
margin: 15px 0px;
position: absolute;
left: 0px;
width: 22%;
height: 600px;
border-right: 2px solid black;
border-bottom: 2px solid black;
`

const InfoContainer = styled.div`
overflow: hidden;
overflow-y: scroll;
background: transparent;
margin: 0px 0px;
position: absolute;
left: 0px;
width: 100%;
height: 600px;
`;

export const TH = styled.th`
width: 12.5%;
height: 20px;
border-bottom: 1px solid black;
border-left: 1px solid black;
border-right: 1px solid black;
background-color: darkgray;
`

export const TR = styled.tr`
width: 100%;
height: 40px;
border-bottom: 1px solid black;
`

export const TD = styled.td`
background-color: lightgrey;
width: 12.5%;
height: 20px;
border-bottom: 1px solid black;
border-left: 1px solid black;
border-right: 1px solid black;
text-align: center;
`

export const Table = styled.table`
width: 100%;
height: 100%;
overflow-y: scroll;
overflow: hidden;
`

export const Label1 = styled.div`
text-align: center;
font-size: 150%;
align-content: center;
border-bottom: 2px solid black;
font-weight: bold;
`

export const Label2 = styled.div`
text-align: center;
font-size: 125%;
align-content: center;
border-bottom: 2px solid black;
`
const RideSelect = styled.select`
    align: right;
`

const styleGray = {backgroundColor : '#AFAFAF'};

const BasicInfo = () => {
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
    const [rideSelect, setRideSelect] = useState('');


    //state to get all attractions
    const [attractionList, setAttractionList] = useState([]);


        //recieve data from backend to display
        const GetAttractions = () => {
            //console.log(res.data)
            useEffect(() => {
                Axios.get('http://localhost:3001/getAttraction').then(res => {
                setAttractionList(res.data);
                }).catch(err => console.log(err));
                }, [])
    }
    return (
        
        <Border>
            {window.addEventListener('load', GetAttractions())}
            
            <Label1>     <RideSelect onChange={(e) => {
                        setRideSelect(e.target.value);
                      }}
                      >
                        <option>Select Attraction</option>


            {attractionList.map((val, key) => {

              return (
                  <>                                
                          <option>{val.ride_name}</option>
                  </>
              );
              })}

    </RideSelect>
            
            - Details </Label1>

            
            <Label2>Basic Information</Label2>
            
            <InfoContainer>

                <table className="table table-bordered table-striped">
                    <thead>
                        <tr style = {styleGray}>
                            <th scope="col">Property</th>
                            <th scope="col">Value</th>
                        </tr>
                    </thead>

                    <tbody>

                    <tr>
                        <td>Name</td>   <td>   
                        {attractionList.map((val, key) => {
                            var ride_name;
                            if (rideSelect == val.ride_name){
                                ride_name = val.ride_name;
                            }
                          return (
                              <> 
                                {ride_name}   
                              </>
                          );
            })}
                               </td>
                    </tr>
                    <tr>
                        <td>Location</td>   <td>    {attractionList.map((val, key) => {
              var parkSection;
              if (rideSelect == val.ride_name){
                  parkSection = val.parkSection;
              }
            return (
                <> 
                  {parkSection}   
                </>
            );
            })}  </td>
                    </tr>
                    <tr>
                        <td>Model</td>   <td>   {attractionList.map((val, key) => {
              var rideType;
              if (rideSelect == val.ride_name){
                  rideType = val.rideType;
              }
            return (
                <> 
                  {rideType}   
                </>
            );
            })}  </td>
                    </tr>
                    <tr>
                        <td>Theoretical Throughput</td>   <td>  {attractionList.map((val, key) => {
              var theoryCapacity;
              if (rideSelect == val.ride_name){
                  theoryCapacity = val.theoryCapacity;
              }
            return (
                <> 
                  {theoryCapacity}   
                </>
            );
            })}  </td>
                    </tr>
                    <tr>
                        <td>Target Throughput</td>   <td>    {attractionList.map((val, key) => {
              var targetCapacity;
              if (rideSelect == val.ride_name){
                  targetCapacity = val.targetCapacity;
              }
            return (
                <> 
                  {targetCapacity}   
                </>
            );
            })}   </td>
                    </tr>
                    <tr>
                        <td>Max Vehicles</td>   <td>   {attractionList.map((val, key) => {
              var maxVehicles;
              if (rideSelect == val.ride_name){
                  maxVehicles = val.maxVehicles;
              }
            return (
                <> 
                  {maxVehicles}   
                </>
            );
            })}   </td>
                    </tr>
                    <tr>
                        <td>Min Vehicles</td>   <td>   {attractionList.map((val, key) => {
              var minVehicles;
              if (rideSelect == val.ride_name){
                  minVehicles = val.minVehicles;
              }
            return (
                <> 
                  {minVehicles}   
                </>
            );
            })} </td>
                    </tr>
                    <tr>
                        <td>Max Seats</td>   <td>  {attractionList.map((val, key) => {
              var maxSeats;
              if (rideSelect == val.ride_name){
                  maxSeats = val.maxSeats;
              }
            return (
                <> 
                  {maxSeats}   
                </>
            );
            })} </td>
                    </tr>
                    <tr>
                        <td>Primary Extension</td>   <td>     </td>
                    </tr>
                    <tr>
                        <td>Secondary Extension</td>   <td>     </td>
                    </tr>
                    <tr>
                        <td>Tertiary Extension</td>   <td>        </td>
                    </tr>
                    <tr>
                        <td>Max Staff</td>   <td>    {attractionList.map((val, key) => {
              var maxStaff;
              if (rideSelect == val.ride_name){
                  maxStaff = val.maxStaff;
              }
            return (
                <> 
                  {maxStaff}   
                </>
            );
            })}  </td>
                    </tr>
                    <tr>
                        <td>Minimum Staff</td>   <td>   {attractionList.map((val, key) => {
              var minStaff;
              if (rideSelect == val.ride_name){
                  minStaff = val.minStaff;
              }
            return (
                <> 
                  {minStaff}   
                </>
            );
            })}    </td>
                    </tr>
                    

                    </tbody>
                    
                    
                </table> 
            </InfoContainer>    
            {/* </>
                    );
                })} */}
        </Border>
    )
}

export default BasicInfo