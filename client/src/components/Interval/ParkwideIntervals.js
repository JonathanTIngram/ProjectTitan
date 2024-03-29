/* eslint-disable */

import styled from 'styled-components';
import plus from './plusSign.png'
import { ParkwideModal } from './ParkwideModal';
import { GlobalStyle } from '../../globalStyles';
import Axios from 'axios'
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { MdClose } from 'react-icons/md';

const Label1 = styled.h1`
margin-left: .8%;
margin-top: .9%;
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
overflow: hidden;
`
const CardTime = styled.div`
position: absolute;
top: 0%;
height: 15%;
width: 20%;
border-bottom: 2px solid black;
text-align: center;
padding-top: 1%;
font-size: 18px;
font-weight: bold;
overflow: hidden;
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
overflow: hidden;
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
overflow: hidden;
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
overflow: hidden;
`

const CardEnding = styled.div`
position: absolute;
top: 80%;
height: 20%;
width: 20%;

text-align: left;
font-size: 120%;
font-weight: bold;
overflow: hidden;
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
const DeleteButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 0px;
  right: 15px;
  width: 20px;
  height: 30px;
  padding: 0;
  
`
const Variables = styled.li`
font-size: 14px;
margin-left: 5%;
overflow: hidden;
`
const InputVariables = styled.input`
width: 70px;

`

const SubmitButton = styled.button`
  position: absolute;
  bottom: 0px;
  left: 80%;
  height: 20px;
  font-size: 10px;
  overflow: hidden;
`
const ParkwideIntervals = () => {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
    setShowModal(prev => !prev);
    };

    const [parkIntervalList, setParkIntervalList] = useState([]);
    const [rideSelect, setRideSelect] = useState('');

    const deleteInterval = (id) => {
        Axios.delete(`http://18.204.6.173:3001/deleteParkInterval/${id}`);
        };
    
    //edit info
    const [WaitTime, setWaitTime] = useState('');
    const [Throughput, setThroughput] = useState('');
    const [AvailableSeats, setAvailableSeats] = useState('');
    const [AvailableDown, setAvailableDown] = useState('');

    const editParkInterval = (id) =>{
        Axios.put('http://18.204.6.173:3001/editParkInterval', {

            id: id,
            WaitTime: WaitTime,
            Throughput: Throughput,
            AvailableSeats: AvailableSeats,
            AvailableDown: AvailableDown
                        
            }).then(() =>{
            alert('successful insert');

        }).then( () => {
            console.log("Successfully sent to port 3001");
        });
        };
        
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
                Axios.get('http://18.204.6.173:3001/getParkInterval').then(res => {
                setParkIntervalList(res.data)
                }).catch(err => console.log(err));
                }, [])}
            {parkIntervalList.map((val, key) => {
                    var id = val.id;
                    var emptyArrayTest = `emptyArray${id}`;
                    emptyArrayTest = [];

                    const checkWait = () => {
                        if (val.checkedWaitTime == true){
                        if (WaitTime == ''){
                            console.log(`waitTime${id}`)
                            emptyArrayTest.push(`waitTime${id}`)
                        }
                        else if(WaitTime < 0) {
                            emptyArrayTest.push(`waitTime${id}`)
                        }
                            return (
                                <div>
                                    <Variables>Wait Time {'\u00A0'} {'\u00A0'} {'\u00A0'} {'\u00A0'} {'\u00A0'}<InputVariables id={`waitTime${id}`} type="text" onChange={(e) => {
                                setWaitTime(e.target.value)}}></InputVariables></Variables>
                                </div>
                            );
                        }

                    }

                    const checkThroughput = () => {
                        if (val.checkedThroughput == true){
                        if (Throughput == ''){
                            emptyArrayTest.push(`throughput${id}`)
                        }
                        else if(Throughput < 0) {
                            emptyArrayTest.push(`throughput${id}`)
                        }

                        return (
                            <div>
                                <Variables>Throughput {'\u00A0'} {'\u00A0'} {'\u00A0'} <InputVariables id={`throughput${id}`} type="text" onChange={(e) => {
                                setThroughput(e.target.value)}}></InputVariables></Variables>
                            </div>
                        );

                        }
                    }

                    const checkAvailable = () => {
                        if (val.checkedAvailableSeats == true){
                        if (AvailableSeats == ''){
                            emptyArrayTest.push(`available${id}`)
                        }
                        else if (AvailableSeats < 0){
                            emptyArrayTest.push(`available${id}`)
                        }


                            return (
                                <div>
                                    <Variables>Available Seats <InputVariables id={`available${id}`} type="text" onChange={(e) => {
                                setAvailableSeats(e.target.value)}}></InputVariables></Variables>
                                </div>
                            );
                        }
                    }

                    const checkDown = () => {
                        if (val.checkedAvailableDown == true){
                            if (AvailableDown == ''){
                                emptyArrayTest.push(`down${id}`)
                            }
                            else if (AvailableDown < 0){
                                emptyArrayTest.push(`down${id}`)
                            }

                            return (
                                <div>
                                    <Variables>Available Down <InputVariables id={`down${id}`} type="text" onChange={(e) => {
                                setAvailableDown(e.target.value)}}></InputVariables></Variables>
                                </div>
                            );
                        }
                    }

                        return (
                            <IntervalCard>
                            <CardTime>Every {val.timeValue} Minutes
                            
                            <DeleteButton
                             onClick={() => {console.log(id); deleteInterval(id);
                                  setTimeout(function(){
                                    window.location.reload(); 
                                   }, 10);
                               }}/></CardTime>
 
                        <CardCollect>
                                {checkWait()}
                                {checkThroughput()}
                                {checkAvailable()}
                                {checkDown()}
                                <SubmitButton  onClick={() =>{
                                    console.log(id)

                                    var wait = `waitTime${id}`;
                                    var throughput = `throughput${id}`;
                                    var seats = `available${id}`;
                                    var down = `down${id}`;

                                    var refresh = 0;
                                    console.log(emptyArrayTest);
                                    if(emptyArrayTest.includes(wait)){
                                        document.getElementById(wait).style.background = 'pink';
                                        alert("Error! Wait time has invalid input.")
                                        refresh = 1;
                                    }
                                    if(emptyArrayTest.includes(throughput)){
                                        document.getElementById(throughput).style.background = 'pink';
                                        alert("Error! Throughput has invalid input.")
                                        refresh = 1;
                                    }
                                    if(emptyArrayTest.includes(seats)){
                                        document.getElementById(seats).style.background = 'pink';
                                        alert("Error! Available Seats has invalid input.")
                                        refresh = 1;
                                    }
                                    if(emptyArrayTest.includes(down)){
                                        document.getElementById(down).style.background = 'pink';
                                        alert("Error! Available Down has invalid input.")
                                        refresh = 1;
                                    }
                                    if (refresh == 0){
                                        editParkInterval(id);
                                        setTimeout(function(){
                                            window.location.reload(); 
                                           }, 1);
                                    }

                                }}>Submit</SubmitButton>
                            
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