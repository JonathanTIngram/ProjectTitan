import React, { useState, useRef, useEffect, useCallback } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import Axios from 'axios'

const AttractionManagerTableContainer = styled.div`
overflow: hidden;
overflow-y: scroll;
background: transparent;
border-bottom: 2px solid black;
border-bottom: 2px solid black;
margin: 15px 0px;
position: absolute;
left: 0px;
width: 88.8%;
height: 600px;
`;

export const Table = styled.table`
width: 100%;
height: 100%;
border-top: 2px solid black;
overflow-y: scroll;
overflow: hidden;
`
export const TH = styled.th`
width: 7.69%;
height: 10px;
border-bottom: 2px solid black;
border-left: 2px solid black;
border-right: 2px solid black;
background-color: darkgray;
`

export const TR = styled.tr`
width: 100%;
height: 50px;
border-bottom: 2px solid black;
`

export const TD = styled.td`
background-color: lightgrey;
width: 7.69%;
height: 50px;
border-bottom: 2px solid black;
border-left: 2px solid black;
border-right: 2px solid black;
text-align: center;
`
export const Select = styled.select`
height: 95%;
width: 95%;
font-size: 100%;
font-weight: bold;
`




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

    const [phoneList, setPhoneList] = useState([]);


        //recieve data from backend to display
    const GetAttractions = () => {
            //console.log(res.data)
            useEffect(() => {
                Axios.get('http://localhost:3001/getAttraction').then(res => {
                setAttractionList(res.data);
                }).catch(err => console.log(err));
                }, [])

            useEffect(() => {
                Axios.get('http://localhost:3001/getPhoneInfo').then(res => {
                setPhoneList(res.data);
                }).catch(err => console.log(err));
                }, [])
    }

    return (
        <>

        <AttractionManagerTableContainer>
        {window.addEventListener('load', GetAttractions())}
            <Table className="sortable">
                    <TR>
                        
                        <TH>Ride Name</TH>
                        <TH>Daily Opening</TH>
                        <TH>Daily Closing</TH>
                        <TH>Theoretical Capacity</TH>
                        <TH>Target Capacity</TH>
                        <TH>Minimum Vehicles</TH>
                        <TH>Maximum Vehicles</TH>
                        <TH>Maximum Seats</TH>
                        <TH>Minimum Staff</TH>
                        <TH>Maximum Staff</TH>
                        <TH>Park Section</TH>
                        <TH>Weather Code</TH>
                        <TH>Type</TH>
                    </TR>

                        {attractionList.map((val, key) => {
                        var ride = val.ride_name;
                        var parkSection = val.parkSection;
                        var rideModel = val.rideType;
                        var maxVehicles = val.maxVehicles;
                        var minVehicles = val.minVehicles;
                        var maxStaff = val.maxStaff;
                        var maxSeats = val.maxSeats;

                        return (
                            <>
                            <TR>
                            <TD><NavLink to = {{
                                pathname:'/rideInfo',
                                ride_name: {ride},
                                parkSection: {parkSection},
                                rideModel: {rideModel},
                                maxVehicles: {maxVehicles},
                                minVehicles: {minVehicles},
                                maxStaff: {maxStaff},
                                maxSeats: {maxSeats}

                            }}>{val.ride_name}</NavLink></TD> 
                            <TD>{val.dailyOpening}</TD>
                            <TD>{val.dailyClosing}</TD>
                            <TD>{val.theoryCapacity}</TD>
                            <TD>{val.targetCapacity}</TD>
                            <TD>{val.minVehicles}</TD>
                            <TD>{val.maxVehicles}</TD>
                            <TD>{val.maxSeats}</TD>
                            <TD>{val.minStaff}</TD>
                            <TD>{val.maxStaff}</TD>
                            <TD>{val.parkSection}</TD>
                            <TD>{val.weatherCode}</TD>
                            <TD>{val.rideType}</TD>
                            </TR>
                            </>
                        );
                        })}

            </Table>
        </AttractionManagerTableContainer>
        </>
    )
}

export default AttractionManagerTable