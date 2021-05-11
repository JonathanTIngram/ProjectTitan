import styled from 'styled-components';
import plus from './plusSign.png'
import { AttractionModal } from './AttractionModal';
import { GlobalStyle } from '../../globalStyles';
import React, { useState, useEffect } from 'react';
import Axios from 'axios'
import { MdClose } from 'react-icons/md';
import { IntervalCollectModal } from './IntervalCollectModal';

const CallsBorder = styled.div`
overflow: hidden;
background: transparent;
margin: 15px 0px;
position: absolute;
left: 25%;
width: 20%;
height: 240px;
border-right: 2px solid black;
align-content: center;
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
height: 12%;
width: 50%;
border-bottom: 2px solid black;
text-align: center;
border-bottom: 2px solid black;
font-size: 90%;
font-weight: bold;
`
const CardCollect = styled.div`
position: absolute;
top: 12%;
text-align: left;
font-size: 90%;
font-weight: bold;
`


const CardStarting = styled.div`
border-top: 2px solid black;
position: absolute;
top: 47%;
height: 28%;
width: 50%;
border-bottom: 2px solid black;
text-align: left;
font-size: 90%;
font-weight: bold;
`
const CardEnding = styled.div`
position: absolute;
top: 75%;
height: 28%;
width: 20%;
text-align: left;
font-size: 90%;
font-weight: bold;
`
const Image = styled.img`
display:flex;
height: 70px;
border: none;
`
const Button = styled.button`
display: inline-block;
background: transparent;
position: absolute;
left: 17.5%;
top: 35%;
border: none;
`
const RideSelect = styled.select`
align-content: right;
`
const RideButton = styled.button`
background: lightgray;
font-size: 20px;
width: 30%;
border-radius: 10px;
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

const IntervalDataButton = styled.button`
border: none;
padding: none;
`
const AttractionIntervals = (props) => {
    const [showModal, setShowModal] = useState(false);
    const [showCollectModal, setShowCollectModal] = useState(false);

    const openModal = () => {
    setShowModal(prev => !prev);
    };

    const openCollectModal = () => {
        setShowCollectModal(prev => !prev);
    }
        //states
        const [startingTime, setStartingTime] = useState('');
        const [endingTime, setEndingTime] = useState('');
        const [timeValue, setTime] = useState('');
        const [typeState, setTypeState] = useState([]);
        const [unitState, setUnitState] = useState("");
        const [intervalList, setIntervalList] = useState([]);
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

        const GetIntervals = () => {

            Axios.get(`http://localhost:3001/getInterval/:${rideSelect}`).then(res => {
            console.log(rideSelect)
            setIntervalList(res.data)
            }).catch(err => console.log(err));
        }
        
        const deleteInterval = (ride_name) => {
            Axios.delete(`http://localhost:3001/deleteInterval/${ride_name}`);
          };

    return (
        <>

            <CallsBorder>
                <RideName>  
                {window.addEventListener('load', GetAttractions())}
                    <RideSelect onChange={(e) => {
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
        <RideButton onClick={() => {
            GetIntervals()
        }}>Submit</RideButton>

                </RideName>
                <PauseButton> Pause Calls </PauseButton>
                <EndButton> End Todays Calls </EndButton>
            </CallsBorder>

            <AddIntervalsBorder>

            <IntervalCard>
             
                <Button onClick={openModal}> <Image src={plus} Image/> </Button>
                <AttractionModal showModal={showModal} setShowModal={setShowModal} ride={rideSelect} />
                    <GlobalStyle /> 
            
            </IntervalCard> 

            {/* {useEffect(() => {
            Axios.get(`http://localhost:3001/getInterval/:${rideSelect}`).then(res => {
            console.log(rideSelect)
            setIntervalList(res.data)
            }).catch(err => console.log(err));
            }, [])} */}
                {intervalList.map((val, key) => {
                    var id = val.id;
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

                    const checkCollectedId = (id) => {
                        if (val.id == 2){
                            return <IntervalCollectModal showCollectModal={showCollectModal} setShowCollectModal={setShowCollectModal} id={id}/>
                        }
                    }
                        return (
                            <>


                            <IntervalCard>
                            <CardTime>Every {val.timeValue} Minutes
                            <DeleteButton
                             onClick={() => {console.log(id); deleteInterval(id);
                                  setTimeout(function(){
                                    window.location.reload(); 
                                   }, 2);
                               }}/>
                             
                             </CardTime>


                            <CardCollect>
                            <IntervalDataButton onClick={() =>{
                                console.log(val.id);
                                openCollectModal()
                            }
                            }>Collect</IntervalDataButton>
                            {checkCollectedId(val.id)}

                                {/* <IntervalDataButton onClick={() => {console.log(id); collectData(id);
                                    setTimeout(() => {
                                        window.location.reload();
                                    }, 2);

                                }}>Collect</IntervalDataButton> */}
                                {checkWait()}
                                {checkThroughput()}
                                {checkAvailable()}
                                {checkDown()}
                                </CardCollect>
                            <CardStarting>Starting<ul>At Park Opening </ul> {val.startingTime}</CardStarting>
                            <CardEnding>Ending<ul>At Park Closing</ul>{val.endingTime}</CardEnding>
                            </IntervalCard>
                            </>
                        );
                        })}

            </AddIntervalsBorder>

        </>
    )
}

export default AttractionIntervals