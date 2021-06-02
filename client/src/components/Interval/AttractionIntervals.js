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

const Variables = styled.li`
font-size: 11.5px;
margin-left: 10%;
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
const AttractionIntervals = (props) => {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
    setShowModal(prev => !prev);
    };


        //states
        const [intervalList, setIntervalList] = useState([]);
        const [rideSelect, setRideSelect] = useState('');


        var cardCount = 0;

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

          var emptyCollectData = [];

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

                    var emptyArrayTest = `emptyArray${id}`;

                    emptyArrayTest = [];


                    const checkWait = () => {

                        if (WaitTime == ""){
                            emptyArrayTest.push(`waitTime${id}`)
                        }
                        if (val.checkedWaitTime == true){
                            return (
                                <div>
                                    <Variables>Wait Time {'\u00A0'} {'\u00A0'} {'\u00A0'} {'\u00A0'} {'\u00A0'}<InputVariables id={`waitTime${id}`} type="text" onChange={(e) => {
                                setWaitTime(e.target.value)}}></InputVariables></Variables>
                                </div>
                            );
                        }

                    }

                    const checkThroughput = () => {

                        if (Throughput == ""){
                            emptyArrayTest.push(`throughput${id}`)
                        }

                        return (
                            <div>
                                <Variables>Throughput {'\u00A0'} {'\u00A0'} {'\u00A0'} <InputVariables id={`throughput${id}`} type="text" onChange={(e) => {
                                setThroughput(e.target.value)}}></InputVariables></Variables>
                            </div>
                        );

                        
                    }

                    const checkAvailable = () => {

                        if (AvailableSeats == ""){
                            emptyArrayTest.push(`available${id}`)
                        }

                        if (val.checkedAvailableSeats == true){
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

                            if (AvailableDown == ""){
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
                            <>

                            {cardCount = cardCount + 1}
                            {console.log(cardCount)}

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

                                    console.log(id)

                                    var wait = `waitTime${id}`;
                                    var throughput = `throughput${id}`;
                                    var available = `available${id}`;
                                    var down = `down${id}`;

                                    var refresh = 0;


                                    if(emptyArrayTest.includes(wait)){
                                        document.getElementById(wait).style.background = 'pink';
                                        refresh = 1;
                                    }

                                    if(emptyArrayTest.includes(throughput)){
                                        document.getElementById(throughput).style.background = 'pink';
                                        refresh = 1;
                                    }

                                    if(emptyArrayTest.includes(available)){
                                        document.getElementById(available).style.background = 'pink';
                                        refresh = 1;
                                    }

                                    if(emptyArrayTest.includes(down)){
                                        document.getElementById(down).style.background = 'pink';
                                        refresh = 1;
                                    }

                                    if (refresh == 0){
                                        setTimeout(function(){
                                            window.location.reload(); 
                                           }, 2);
                                    }



                                    
                                    // document.getElementById(throughput).style.background = 'pink';
                                    // document.getElementById(available).style.background = 'pink';
                                    // document.getElementById(down).style.background = 'pink';


                                    // document.getElementById('3').style.background = "pink";

                                    editInterval(id, val.ride_name)
                                    // window.location.reload();
                                }}>Submit</SubmitButton>
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