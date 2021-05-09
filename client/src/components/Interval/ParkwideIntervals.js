import styled from 'styled-components';
import plus from './plusSign.png'
import { ParkwideModal } from './ParkwideModal';
import { GlobalStyle } from '../../globalStyles';
import Axios from 'axios'
import React, { useState, useRef, useEffect, useCallback } from 'react';

const Label1 = styled.h1`
margin-left: .8%;
margin-top: .1%;
font-size: 175%;
text-align: left;
font-weight: normal;
`

const Container = styled.div`
position: absolute;
margin-top: 20px;
top: 300px;
width: 100%;
height: 50%;
border-bottom: 2px solid black;
border-top: 2px solid black;
`

const IntervalContainer = styled.div`
position: absolute;
bottom: 0%;
left: 0%;
height: 90%;
width: 95%;
border-top: 2px solid black;
border-right: 2px solid black;
overflow: hidden;
overflow-x: scroll;
white-space: nowrap;
`


const IntervalCard = styled.div`
width: 20%;;
height: 100%;
border-right: 2px solid black;
display: inline-block;
`
const CardTime = styled.div`
position: absolute;
top: 0%;
height: 15%;
width: 20%;
border-bottom: 2px solid black;
text-align: center;
border-bottom: 2px solid black;
font-size: 150%;
font-weight: bold;
`
const CardCollect = styled.div`
position: absolute;
top: 15%;
height: 30%;
width: 20%;
border-bottom: 2px solid black;
text-align: left;
font-size: 120%;
font-weight: bold;
`

const CardFrom = styled.div`
position: absolute;
top: 45%;
height: 15%;
width: 20%;
border-bottom: 2px solid black;
text-align: left;
font-size: 120%;
font-weight: bold;
`

const CardStarting = styled.div`
position: absolute;
top: 60%;
height: 20%;
width: 20%;
border-bottom: 2px solid black;
text-align: left;
font-size: 120%;
font-weight: bold;
`

const CardEnding = styled.div`
position: absolute;
top: 80%;
height: 20%;
width: 20%;
border-bottom: 2px solid black;
text-align: left;
font-size: 120%;
font-weight: bold;
`
const CardH = styled.h1`
position: absolute;
left: 0%;
top: 0%;
margin-top: 3px;
margin-left: 3px;
`
const Image = styled.img`
display:flex;
height: 70px;
`

const Button = styled.button`
display: inline-block;
background: transparent;
position: absolute;
left: 7%;
top: 42%;
border: none;
`

const ParkwideIntervals= () => {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
    setShowModal(prev => !prev);
    };

    //states
        const [startingTime, setStartingTime] = useState('');
        const [endingTime, setEndingTime] = useState('');
        const [timeValue, setTime] = useState('');
        const [typeState, setTypeState] = useState([]);
        const [unitState, setUnitState] = useState("");
        const [parkIntervalList, setParkIntervalList] = useState([]);

 
    return (
        <Container>
            <Label1>Parkwide Intervals</Label1>
            <IntervalContainer>
            
            <IntervalCard>

            <Button onClick={openModal}> <Image src={plus} Image/> </Button>
                <ParkwideModal showModal={showModal} setShowModal={setShowModal} />
                    <GlobalStyle /> 

            </IntervalCard>
                {useEffect(() => {
                Axios.get('http://localhost:3001/getParkInterval').then(res => {
                setParkIntervalList(res.data)
                }).catch(err => console.log(err));
                }, [])}
                {parkIntervalList.map((val, key) => {

                        const checkWait = () => {

                            if (val.checkedWaitTime == true){
                                return <li>Wait Time</li>;
                            }
                        }

                        const checkThroughput = () => {
                            if (val.checkedThroughput == true){
                                return <li>Throughtput</li>
                            }
                        }

                        const checkAvailable = () => {
                            if (val.checkedAvailableSeats == true){
                                return <li>Available Seats</li>
                            }
                        }

                        const checkDown = () => {
                            if (val.checkedAvailableDown == true){
                                return <li>Available Down</li>
                            }
                        }
                        return (
                            <IntervalCard>
                            <CardTime>Every {val.timeValue} Minutes</CardTime>
                        <CardCollect>Collect 
                                {checkWait()}
                                {checkThroughput()}
                                {checkAvailable()}
                                {checkDown()}
                            
                        </CardCollect>
                            <CardFrom>From <ul>Reported Down Rides</ul></CardFrom>
                            <CardStarting>Starting<ul>At Park Opening</ul>  <ul> {val.startingTime} </ul> </CardStarting>
                            <CardEnding>Ending<ul>At Park Closing </ul> <ul>{val.endingTime}</ul></CardEnding>
                            </IntervalCard>
                        );
                    })}



            </IntervalContainer>
        </Container>
    )
}

export default ParkwideIntervals