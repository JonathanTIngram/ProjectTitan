import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import Axios from 'axios';


const Background = styled.div`
  width: 0px;
  height: 0px;
  position: fixed;
  display: flex;
  align-items: center;
  z-index: 10;
`;

const ModalWrapper = styled.div`
  top: 200px;
  width: 485px;
  height: 100%;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: grey;
  position: relative;
  border-radius: 10px;
`;


const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  line-height: 1.8;
  p {
    margin-bottom: 1rem;
  }
  form {
    text-align: left;
    color: lightblue;
  }
  header {
    
    font-size: 20pt;
    text-align: left;
  }
`;

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 0px;
  right: 20px;
  width: 20px;
  height: 40px;
  padding: 0;
  z-index: 10;
`;

const InputStyle = styled.input`
margin-bottom: 20px;
width: 40%;
`
const Submit = styled.button`
margin-top: 20px;
width: 50%;
position: relative;
left: 20%;
`
const TR = styled.div`
padding-right: 10px;
font-size: 17px;
`

const Menu = styled.div`
  display: flex;
  width: 100%;
  overflow-x: auto;
`;

const Form = styled.form`

width: 11%;
`
export const ParkwideModal = ({ showModal, setShowModal, ride }) => {
  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 250
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(100%)`
  });

  const closeModal = e => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    e => {
      if (e.key === 'Escape' && showModal) {
        setShowModal(false);
        console.log('I pressed');
      }
    },
    [setShowModal, showModal]
  );

  useEffect(() => {
      document.addEventListener('keydown', keyPress);
      return () => document.removeEventListener('keydown', keyPress);
    },
    [keyPress]
  );

  //states
  const [startingTime, setStartingTime] = useState('');
  const [endingTime, setEndingTime] = useState('');
  const [timeValue, setTime] = useState('');
  const [typeState, setTypeState] = useState([]);

  useEffect(() => {
    let typeState = [
      { id: 1, type: "Wait Time"},
      { id: 2, type: "Throughput"},
      { id: 3, type: "Available Seats"},
      { id: 4, type: "Available Down"},
    ];
    setTypeState(
      typeState.map(d => {
        return {
          select: false,
          id: d.id,
          type: d.type,
        };
      })
    );
  }, []);
  //state to get all attractions
  //send the attraction data to the backend running on port 3001
  //specifically /addAttraction
  
  const submitInterval = () =>{
    Axios.post('http://18.204.6.173:3001/addParkInterval', {
                  ride_name: ride,
                  timeValue: timeValue,
                  typeState: typeState.map((d, i)=>  {
                  if (d.select === true) {

                    const checkData = {
                      isChecked: true,
                      id: d.id,
                      type: d.type
                    }
                    //[d.id, d.type, d.select]                    

                    return checkData;
                  }
                  else {
                    const checkData = {
                      isChecked: false,
                      id: d.id,
                      type: d.type
                    }
                    //[d.id, d.type, d.select]                    

                    return checkData;
                  }
                  }),
                  startingTime: startingTime,
                  endingTime: endingTime}).then(() =>{
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
      if(element == 'dataID'){
        document.getElementById("collectDataID").style.color = "red";
      }
      if(element == 'timeValueID'){
        document.getElementById("timeID").style.color = "red";
      }
      if(element == 'startingTimeID'){
        document.getElementById("startingID").style.color = "red";
      }
      if(element == 'endingTimeID'){
        document.getElementById("endingID").style.color = "red";
      }
    }
  }
var checkArray = [];
  const checkEmpty = () => {
    var empty = false;
    if(timeValue == '') {
      alert("Time Value is empty");
      emptyBoxArray.push('timeValueID');
      empty = true;
    }
    typeState.map((d)=>  {
    if (d.select === false) {
        checkArray.push(d.type)
    }})
    if(checkArray.length == typeState.length) {
      alert("No checkboxes are selected");
      emptyBoxArray.push('dataID');
      empty = true;
    }
    if(startingTime == '') {
      alert("Starting Time is empty");
      emptyBoxArray.push('startingTimeID');
      empty = true;
    }
    if(endingTime == '') {
      alert("Ending Time is empty");
      emptyBoxArray.push('endingTimeID');
      empty = true;
    }
    return empty;
  }
  return (
    <>
      {showModal ? (
        <Background onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            <ModalWrapper showModal={showModal}>
              <ModalContent>

                <header>Add an Interval</header>
                {/* <form> Ride Name</form>
                <InputStyle type='text' name='Name' onChange={(e) => {
                  setRideName(e.target.value);
                }}></InputStyle> */}
                <form id='timeID' >Time Value:</form>
                <InputStyle id='timeValueID' type='number' name='Time' onChange={(e) => {
                  setTime(e.target.value);
                }}></InputStyle>
                <form id='collectDataID' >Collect:            </form>
                  <Menu>
                {typeState.map((d, i) => ( 
                <TR key={d.id}>
             <th>
     
                <input 
                  id = 'dataID'
                  class="checkbox"
                  onChange={event => {
                    let checked = event.target.checked;
                    setTypeState(
                      typeState.map(data => {
                        if (d.id === data.id) {
                          data.select = checked;
                          var checkID = d.id;
                          console.log(checkID);
                        }
                        return data;
                      })
                    );
                  }}
                  type="checkbox"
                  checked={d.select}
                ></input>
                  </th>
              <td>{d.type}</td>

            </TR>
                ))}
                </Menu>

                <form id='startingID'>Starting:</form>

                <InputStyle id='startingTimeID' type='time' name='startingTime' onChange={(e) => {
                  setStartingTime(e.target.value);
                }}></InputStyle>

                <form id='endingID'>Ending:</form>
                <InputStyle id='endingTimeID' type='time' name='endingTime' onChange={(e) => {
                  setEndingTime(e.target.value);
                }}></InputStyle>

<Submit 
                onClick={() => {

                                  if(checkEmpty() == true){
                                    changeInputColor(emptyBoxArray);
                                  }
                                  else {
                                    setShowModal(prev => !prev);
                                    submitInterval();
                                    setTimeout(function(){
                                      window.location.reload(); 
                                    }, 1);
                                  }

                               }}>Submit</Submit>
              
                


              </ModalContent>
              <CloseModalButton
                aria-label='Close modal'
                onClick={() => setShowModal(prev => !prev)}
              />

            </ModalWrapper>
          </animated.div>
        </Background>
      ) : null}
    </>
  );
};
