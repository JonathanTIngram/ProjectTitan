

import React, { useState } from 'react';
import styled from 'styled-components';
import { Modal } from './Modal';
import { GlobalStyle } from '../globalStyles';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Button = styled.button`

  border: none;
  background: none;
  cursor: pointer;
`;

export const QuickToolsSideNav = styled.div`
background: transparent;
border-left: 2px solid black;
border-right: 2px solid black;
border-bottom: 2px solid black;
margin: 15px 0px;
position: absolute;
  right: 0px;
  width: 11.5%;
  height: 200px;
  margin: 13px -5px;
`;

export const QuickToolsHeader = styled.h1`
height: 17%;
border-bottom: 2px solid black;
text-align: center;
padding: 3px;
font-size: 20px;
font-weight: bold;
margin: 0px 0px;
`;

export const QuickToolsButtons = styled.button`
width: 100%;
height: 28%;
padding: 1px;
font-size: 16px;
border-bottom: 1px solid black;
`;

const QuickToolsPanel = () => {
const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(prev => !prev);
  };
    return (
        <>
            <QuickToolsSideNav>
                <QuickToolsHeader>
                    Quick Tools
                </QuickToolsHeader>
                    <QuickToolsButtons>
                    <Button onClick={openModal}>New Attraction</Button>
                    <Modal showModal={showModal} setShowModal={setShowModal} />
                    <GlobalStyle />
                    </QuickToolsButtons>

                    <QuickToolsButtons>
                            Edit Attraction
                    </QuickToolsButtons>
                    <QuickToolsButtons>
                            Delete Attraction
                    </QuickToolsButtons>
            </QuickToolsSideNav>
        </>
    );
}

export default QuickToolsPanel