import styled from 'styled-components';
import plus from './plusSign.png'
import { AttractionModal } from './AttractionModal';
import { GlobalStyle } from '../../globalStyles';
import React, { useState, useEffect } from 'react';
import Axios from 'axios'


const CallsBorder = styled.div`
overflow: hidden;
background: transparent;
margin: 15px 0px;
position: absolute;
left: 25%;
width: 20%;
height: 240px;
border-right: 2px solid black;
`
const RideName = styled.div`
text-align: center;
font-size: 30px;
`

const PauseButton = styled.button`
margin-top: 70px;
margin-left: 20px;
justify-content: center;
height: 17%;
width: 85%;
border: 2px solid black;
background: transparent;
`
const EndButton = styled.button`
margin-top: 2px;
margin-left: 20px;
justify-content: center;
height: 17%;
width: 85%;
border: 2px solid black;
background: transparent;
`
const AddIntervalsBorder = styled.tr`
overflow: hidden;
background: transparent;
margin: 15px 0px;
position: absolute;
left: 45%;
width: 43.8%;
height: 240px;
overflow: hidden;
overflow-x: scroll;
white-space: nowrap;
`;


const IntervalCard = styled.div`
width: 50%;
height: 100%;
border-right: 2px solid black;
display: inline-block;
`
const CardTime = styled.div`
position: absolute;
top: 0%;
height: 16%;
width: 50%;
border-bottom: 2px solid black;
text-align: center;
border-bottom: 2px solid black;
font-size: 90%;
font-weight: bold;
`
const CardCollect = styled.div`
position: absolute;
top: 16%;
height: 28%;
width: 50%;
border-bottom: 2px solid black;
text-align: left;
font-size: 90%;
font-weight: bold;
`


const CardStarting = styled.div`
position: absolute;
top: 44%;
height: 28%;
width: 50%;
border-bottom: 2px solid black;
text-align: left;
font-size: 90%;
font-weight: bold;
`
const CardEnding = styled.div`
position: absolute;
top: 72%;
height: 28%;
width: 20%;
text-align: left;
font-size: 90%;
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
left: 17.5%;
top: 35%;
`
function Check(props) {
    const onSave = e => {
      let wait = e.target[0].value;
      let throughput = e.target[1].value;
      let availableSeats = e.target[2].value;
      let availableDown = e.target[3].value;
      let data = {
        wait,
        throughput,
        availableSeats,
        availableDown
      };
      Check(data);
    };
};

const AttractionIntervals = () => {
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
        const [intervalList, setIntervalList] = useState([]);

        const submitAttraction = () =>{
            Axios.post('http://localhost:3001/addAttraction', {
                          timeValue: timeValue,
                          startingTime: startingTime,
                          endingTime: endingTime,
                          }).then(() =>{
                            alert('successful insert');
                        }).then( () => {
                          console.log("Successfully sent to port 3001");
                        });
          };
        //recieve data from backend to display
        const getIntervals = () => {
            Axios.get('http://localhost:3001/getInterval').then( (res) => {
            console.log(res.data)
            return setIntervalList(res.data);
         }); 
        }

    return (
        <>

            <CallsBorder>
                <RideName>The Joker</RideName>
                <PauseButton> Pause Calls </PauseButton>
                <EndButton> End Todays Calls </EndButton>
            </CallsBorder>

            <AddIntervalsBorder>

            <IntervalCard>
             
                <Button onClick={openModal}> <Image src={plus} Image/> </Button>
                <AttractionModal showModal={showModal} setShowModal={setShowModal} />
                    <GlobalStyle /> 
            
            </IntervalCard> 

            {useEffect( () =>{
                    const every5 = setInterval( () => {
                        getIntervals();
                    }, 5000);

                    return () => clearInterval(every5);
                }, [])}
                {intervalList.map((val, key) => {
                        return (
                            <>
                            <IntervalCard>
                            <CardTime>Every {val.timeValue} Minutes</CardTime>
                            <CardCollect>Collect <li> 

                                </li></CardCollect>
                            <CardStarting>Starting<ul>At Park Opening</ul> <ul>{val.startingTime}</ul></CardStarting>
                            <CardEnding>Ending<ul>At Park Closing</ul><ul>{val.endingTime}</ul></CardEnding>
                            </IntervalCard>
                            </>
                        );
                        })}

            </AddIntervalsBorder>

        </>
    )
}

export default AttractionIntervals