import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import Axios from 'axios'


const Background = styled.div`
  width: 0px;
  height: 0px;
  background: red;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalWrapper = styled.div`
  top: 110px;
  width: 70rem;
  height: 700px;
  /* margin: 0px 0px; */
  margin-bottom: -170px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: lightgrey;
  color: #000;
  display: grid;
  grid-template-columns: 2fr 3fr;
  position: relative;
  z-index: 10;
  border-radius: 10px;
`;


const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  line-height: 1.8;
  color: #141414;
  p {
    margin-bottom: 1rem;
  }
  form{
    text-align: left;
    color: red;
  }
  header {
    
    font-size: 20pt;
    text-align: left;
  }
`;

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  left: 20px;
  width: 20px;
  height: 40px;
  padding: 0;
  z-index: 10;
`;

export const Modal = ({ showModal, setShowModal }) => {
  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 250
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`
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

  useEffect(
    () => {
      document.addEventListener('keydown', keyPress);
      return () => document.removeEventListener('keydown', keyPress);
    },
    [keyPress]
  );

  const [ride_name, setRide_name] = useState('');
  const [dailyOpening, setDailyOpening] = useState('');
  const [dailyClosing, setDailyClosing] = useState('');
  const [theoryCapacity, setTheoryCapacity] = useState('');
  const [targetCapacity, setTargetCapacity] = useState('');
  const [minVehicles, setMinVehicles] = useState('');
  const [maxVehicles, setMaxVehicles] = useState('');

  const submitReview = () =>{
    Axios.post('http://localhost:3001/api/insert', {ride_name: ride_name,
                  dailyOpening: dailyOpening,
                  dailyCLosing: dailyClosing,
                  theoryCapacity: theoryCapacity,
                  targetCapacity: targetCapacity,
                  minVehicles: minVehicles,
                  maxVehicles: maxVehicles}).then(() =>{
                    alert('successful insert');
                });
  }

  return (
    <>
      {showModal ? (
        <Background onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            <ModalWrapper showModal={showModal}>
              <ModalContent>

                <header>Add New Attraction Information</header>

                <form >Attraction Name:</form>
                <input type='text' name='ride_name' onChange={(e) => {
                  setRide_name(e.target.value);
                }}></input>

                <form> Daily Opening Time:</form>
                <input type='text' name='dailyOpening' onChange={(e) => {
                  setDailyOpening(e.target.value);
                }}></input>

                <form>Daily Closing Time:</form>
                <input type='text' name='dailyClosing' onChange={(e) => {
                  setDailyClosing(e.target.value);
                }}></input>

                <form>Theoretical Capacity:</form>
                <input type='text' name='theoryCapacity' onChange={(e) => {
                  setTheoryCapacity(e.target.value);
                }}></input>

                <form>Target Capacity:</form>
                <input type='text' name='targetCapacity' onChange={(e) => {
                  setTargetCapacity(e.target.value);
                }}></input>

                <form>Min Vehicles:</form>
                <input type='text' name='maxVehicles' onChange={(e) => {
                  setMaxVehicles(e.target.value);
                }}></input>

                <form>Max Vehicles:</form>
                <input type='text' name='minVehicles' onChange={(e) => {
                  setMinVehicles(e.target.value);
                }}></input>

                <button onClick={submitReview}>Submit</button>


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