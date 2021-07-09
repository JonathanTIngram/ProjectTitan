/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Axios from 'axios'

const AttractionManagerTableContainer = styled.div`
overflow-y: scroll;
background: transparent;
border-bottom: 2px solid black;
border-bottom: 2px solid black;
margin: 15px 0px;
position: absolute;
left: 0px;
width: 88.5%;
height: 83.5%;
`;

export const Select = styled.select`
height: 95%;
width: 95%;
font-size: 100%;
font-weight: bold;
`


const styleBlue = {backgroundColor : '#8EAAD1'};
const styleGray = {backgroundColor : '#AFAFAF'};
const AttractionManagerTable = () => {

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
        <>

        <AttractionManagerTableContainer>
        {window.addEventListener('load', GetAttractions())}
            <table className="table table-bordered table-striped">
                <thead>
                    <tr style = {styleGray}>
                        <th scope="col">Ride Name</th>
                        <th scope="col">Daily Opening</th>
                        <th scope="col">Daily Closing</th>
                        <th scope="col">Theoretical Capacity</th>
                        <th scope="col">Target Capacity</th>
                        <th scope="col">Minimum Vehicles</th>
                        <th scope="col">Maximum Vehicles</th>
                        <th scope="col">Maximum Seats</th>
                        <th scope="col">Minimum Staff</th>
                        <th scope="col">Maximum Staff</th>
                        <th scope="col">Park Section</th>
                        <th scope="col">Weather Code</th>
                        <th scope="col">Type</th>
                    </tr>
                </thead>

                {attractionList.map((val, key) => {
                        var ride = val.ride_name;
                        return (
                <tbody>
                    <tr>
                        <td><NavLink to = {{
                            pathname:'/rideInfo',
                            ride_name: {ride}
                            
                        }}>{val.ride_name}</NavLink></td>
                        <td>{val.dailyOpening}</td>
                        <td>{val.dailyClosing}</td>
                        <td>{val.theoryCapacity}</td>
                        <td>{val.targetCapacity}</td>
                        <td>{val.minVehicles}</td>
                        <td>{val.maxVehicles}</td>
                        <td>{val.maxSeats}</td>
                        <td>{val.minStaff}</td>
                        <td>{val.maxStaff}</td>
                        <td>{val.parkSection}</td>
                        <td>{val.weatherCode}</td>
                        <td>{val.rideType}</td>
                    </tr>
                </tbody>
                        );
                    })}
                
            </table>
        </AttractionManagerTableContainer>
        </>
    )
}

export default AttractionManagerTable