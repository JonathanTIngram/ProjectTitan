import React, { useState } from 'react';
import styled from 'styled-components';

export const QuickToolsSideNav = styled.div`
 background: transparent;
 border-left: 2px solid black;
 border-right: 2px solid black;
 border-bottom: 2px solid black;
 position: absolute;
 right: 0px;
 width: 16.5%;
 height: 210px;
 margin: 13px -5px;
`;

export const QuickToolsHeader = styled.h1`
height: 17%;
border-bottom: 2px solid black;
border-top: 2px solid black;
background-color: darkgray;
text-align: center;
padding: 3px;
font-size: 150%;
font-weight: bold;
margin: 0px 0px;
`;

export const QuickToolsButtons = styled.button`
width: 100%;
height: 16.66%;
padding: 1px;
font-size: 16px;
border-bottom: 1px solid black;
`;

const QuickToolsGraph = () => {
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
                    Daily Summary
                    </QuickToolsButtons>
                    <QuickToolsButtons>
                    Weekly Summary
                    </QuickToolsButtons>
                    <QuickToolsButtons>
                    Graphs To Review
                    </QuickToolsButtons>
                    <QuickToolsButtons>
                    Significant Changes
                    </QuickToolsButtons>
                    <QuickToolsButtons>
                    Quick Export
                    </QuickToolsButtons>
            </QuickToolsSideNav>

        </>
    );
}
export default QuickToolsGraph
