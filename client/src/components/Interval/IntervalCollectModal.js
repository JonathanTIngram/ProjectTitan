import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';

const Background = styled.div`
  width: 0px;
  height: 0px;
  position: fixed;
  display: flex;
  align-items: center;
  z-index: 10;
`;

const ModalWrapper = styled.div`
  top: 100px;
  width: 300px;
  height: 100%;
  right: 80%;
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

export const Menu = styled.div`
  display: flex;
  width: 100%;
  overflow-x: auto;
`;

export const IntervalCollectModal = ({ showCollectModal, setShowCollectModal, id}) => {

  //console.log(id);
  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 250
    },
    opacity: showCollectModal ? 1 : 0,
    transform: showCollectModal ? `translateY(0%)` : `translateY(100%)`
  });

  const closeModal = e => {
    if (modalRef.current === e.target) {
      setShowCollectModal(false);
    }
  };

  const keyPress = useCallback(
    e => {
      if (e.key === 'Escape' && showCollectModal) {
        setShowCollectModal(false);
        console.log('I pressed');
      }
    },
    [setShowCollectModal, showCollectModal]
  );

  useEffect(() => {
      document.addEventListener('keydown', keyPress);
      return () => document.removeEventListener('keydown', keyPress);
    },
    [keyPress]
  );

  //states
  const [ride_name, setRideName] = useState('');
  const [startingTime, setStartingTime] = useState('');
  const [endingTime, setEndingTime] = useState('');
  const [timeValue, setTime] = useState('');
  const [typeState, setTypeState] = useState([]);
  const [unitState, setUnitState] = useState("");
  const [intervalList, setIntervalList] = useState([]);

  //state to get all attractions
  //send the attraction data to the backend running on port 3001
  //specifically /addAttraction
  
  return (
    <>
      {showCollectModal ? (
        <Background onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            <ModalWrapper showCollectModal={showCollectModal}>
              <ModalContent>

                <header>Add Collected Data</header>
                {/* <form> Ride Name</form>
                <InputStyle type='text' name='Name' onChange={(e) => {
                  setRideName(e.target.value);
                }}></InputStyle> */}
                <form>Wait Time:</form>
                <InputStyle type='number' name='Time' onChange={(e) => {
                  setTime(e.target.value);
                }}></InputStyle>
                  <Menu>
                {typeState.map((d, i) => ( 
                <TR key={d.id}>


            </TR>
                ))}
                </Menu>
                <Submit 
                onClick={() => { setShowCollectModal(prev => !prev);
                                  setTimeout(function(){
                                    window.location.reload(); 
                                }, 1);
                               }}>Submit</Submit>
              
                


              </ModalContent>
              <CloseModalButton
                aria-label='Close modal'
                onClick={() => setShowCollectModal(prev => !prev)}
              />

            </ModalWrapper>
          </animated.div>
        </Background>
      ) : null}
    </>
  );
};