import styled from 'styled-components';
import plus from './plusSign.png'
import { AttractionModal } from './AttractionModal';
import { GlobalStyle } from '../../globalStyles';
import React, { useState, useEffect } from 'react';
import Axios from 'axios'
import { MdClose } from 'react-icons/md';


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
overflow: hidden;
`

const PauseButton = styled.button`
margin-top: 70px;
margin-left: 20px;
justify-content: center;
height: 17%;
width: 85%;
border: 2px solid black;
background: transparent;
overflow: hidden;
`
const EndButton = styled.button`
margin-top: 2px;
margin-left: 20px;
justify-content: center;
height: 17%;
width: 85%;
border: 2px solid black;
background: transparent;
overflow: hidden;
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
overflow: hidden;
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
overflow: hidden;
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
overflow: auto;
`

const DeleteButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 0px;
  right: 15px;
  width: 20px;
  height: 30px;
  padding: 0;
  overflow: hidden;
`

const Variables = styled.li`
font-size: 11.5px;
margin-left: 15px;
overflow: hidden;
`
const InputVariables = styled.input`
width: 70px;
`
const SubmitButton = styled.button`
  position: absolute;
  bottom: 0px;
  left: 200px;
  height: 20px;
  font-size: 10px;

`

const Border = styled.div`
overflow: hidden;
background: transparent;
margin: 15px 0px;
position: absolute;
left: 0px;
width: 25%;
height: 240px;
border-right: 2px solid black;
`

const InfoContainer = styled.div`
overflow: hidden;
overflow-y: scroll;
background: transparent;
position: absolute;
left: 0px;
width: 100%;

`;

const Label1 = styled.h1`
margin-top: 2%;
margin-left: 0%;
font-size: 175%;
text-align: center;
font-weight: normal;
`
const AttractionIntervals = (props) => {
    const [showModal, setShowModal] = useState(false);
    const styleGray = {backgroundColor : '#AFAFAF'};
    const openModal = () => {
    setShowModal(prev => !prev);
    };


        //states
        const [intervalList, setIntervalList] = useState([]);
        const [rideSelect, setRideSelect] = useState('');
        var cardCount = 0;
        var currentRide = '';


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

          //edit info
          const [WaitTime, setWaitTime] = useState('');
          const [Throughput, setThroughput] = useState('');
          const [AvailableSeats, setAvailableSeats] = useState('');
          const [AvailableDown, setAvailableDown] = useState('');

          const editInterval = (id, rideName) =>{
            Axios.put('http://localhost:3001/editInterval', {

                id: id,
                ride_name: rideName,
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
          var emptyBoxArray = [];
          const changeInputColor = (emptyBoxArray) => {
            for (let index = 0; index < emptyBoxArray.length; index++) {
              var element = emptyBoxArray[index];
              console.log(document.getElementById(element));
              document.getElementById(element).style.backgroundColor = "pink";
            }
          }
          const checkEmpty = () => {
            var empty = false;
            if(WaitTime == '') {
              alert("Wait time is empty");
              emptyBoxArray.push('waitTimeID');
              empty = true;
            }
            if(Throughput == '') {
            alert("Throughput is empty");
            emptyBoxArray.push('throughputID');
            empty = true;
            }
            if(AvailableSeats == '') {
                alert("Available Seats is empty");
                emptyBoxArray.push('seatsID');
                empty = true;
            }
            if(AvailableDown == '') {
                alert("Available Down is empty");
                emptyBoxArray.push('downID');
                empty = true;
            }

            return empty;
        }
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
                            return (
                                <div>
                                    <Variables>Wait Time {'\u00A0'} {'\u00A0'} {'\u00A0'} {'\u00A0'} {'\u00A0'}<InputVariables id="waitTimeID" type="text" onChange={(e) => {
                                setWaitTime(e.target.value)}}></InputVariables></Variables>

                                </div>
                            );
                        }
                    }

                    const checkThroughput = () => {
                        if (val.checkedThroughput == true){
                        return (
                            <div>
                                
                                <Variables>Throughput {'\u00A0'} {'\u00A0'} {'\u00A0'} <InputVariables id="throughputID" type="text" onChange={(e) => {
                                setThroughput(e.target.value)}}></InputVariables></Variables>
                            </div>
                        );
                        }
                    }

                    const checkAvailable = () => {
                        if (val.checkedAvailableSeats == true){
                            return (
                                <div>
                                    <Variables>Available Seats <InputVariables id="seatsID" type="text" onChange={(e) => {
                                setAvailableSeats(e.target.value)}}></InputVariables></Variables>
                                </div>
                            );
                        }
                    }

                    const checkDown = () => {
                        if (val.checkedAvailableDown == true){
                            return (
                                <div>
                                    <Variables>Available Down <InputVariables  id="downID" type="text" onChange={(e) => {
                                setAvailableDown(e.target.value)}}></InputVariables></Variables>
                                </div>
                            );
                        }
                    }
                    {currentRide = val.ride_name}
                    {cardCount = cardCount + 1}


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
                                {checkWait()}
                                {checkThroughput()}
                                {checkAvailable()}
                                {checkDown()}
                                <SubmitButton  onClick={() =>{
                                if(checkEmpty() == true){
                                changeInputColor(emptyBoxArray);
                                alert("error")
                                }
                                else {
                                editInterval(id, val.ride_name);
                                window.location.reload(); 
                                }
                                }}>Submit</SubmitButton>
                                </CardCollect>
                                
                            <CardStarting>Starting<ul>At Park Opening </ul> {val.startingTime}</CardStarting>
                            <CardEnding>Ending<ul>At Park Closing</ul>{val.endingTime}</CardEnding>
                            
                            </IntervalCard>
                            
                            </>
                        );
                        })}
            </AddIntervalsBorder>
            <Border>
            <Label1> Attraction Intervals </Label1>
                <InfoContainer>
                {window.addEventListener('load', GetAttractions())}
                <table className="table table-bordered table-striped">
                    <thead>
                        <tr style = {styleGray}>
                            <th scope="col">Name</th>
                            <th scope="col"># of Specific Intervals</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr><td>{currentRide}</td><td>{cardCount}</td></tr>
                    </tbody>

                    {/* {attractionList.map((val, key) => {
                        var ride = val.ride_name;
                 
                        return(
                    <tbody>
                        <tr><td>{ride}</td><td>{cardCount}</td></tr>
                    </tbody>
                        );
                    })} */}

             
                </table>
                </InfoContainer>    

            </Border>

        </>
    )
}

export default AttractionIntervals