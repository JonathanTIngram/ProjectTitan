import React, { useState } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const QuickToolsSideNav = styled.div`
background: transparent;
position: absolute;
  top: 68px;
  right: 5px;
  width: 11.5%;
  height: 80px;
  margin: 13px -5px;
`;

export const QuickToolsHeader = styled.h1`
height: 30%;
border-bottom: 2px solid black;
border-left: 2px solid black;
border-right: 2px solid black;
text-align: center;
padding: 12%;
font-size: 20px;
font-weight: bold;
margin: 0px 0px;
`;

export const QuickToolsButtons = styled.button`
width: 100%;
height: 88%;
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
                    <NavLink to = '/CreatePage'>
                    <QuickToolsButtons>New Attraction</QuickToolsButtons>
                    </NavLink>



            </QuickToolsSideNav>
        </>
    );
}

export default QuickToolsPanel