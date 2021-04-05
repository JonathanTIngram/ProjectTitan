import React, { useState } from 'react';
import styled from 'styled-components';

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
height: 21%;
padding: 1px;
font-size: 16px;
border-bottom: 1px solid black;
`;

const QuickToolsMain = () => {
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
                    Collect Data Now
                    </QuickToolsButtons>
                    <QuickToolsButtons>
                            Cell Notifications
                    </QuickToolsButtons>
                    <QuickToolsButtons>
                            Send Message
                    </QuickToolsButtons>
                    <QuickToolsButtons>
                            Generate Report
                    </QuickToolsButtons>
            </QuickToolsSideNav>

        </>
    );
}
export default QuickToolsMain