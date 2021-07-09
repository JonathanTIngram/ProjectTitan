/* eslint-disable */
import React, { useState } from 'react';
import styled from 'styled-components';

const saveSvgAsPng = require('save-svg-as-png')

const Button = styled.button`
  border: none;
  background: none;
  cursor: pointer;
`;

export const QuickToolsSideNav = styled.div`
background: transparent;
border-bottom: 2px solid black;
margin: 150px 0px;
position: absolute;
right: 0px;
width: 20%;
height: 150px;
margin: 0% 0px;
`;

export const QuickToolsHeader = styled.h1`
height: 27%;
border-bottom: 2px solid black;
border-left: 2px solid black; 
text-align: center;
padding: 6px;
font-size: 21px;
font-weight: bold;
margin: 0px 0px;
`;

export const QuickToolsButtons = styled.button`
width: 100%;
height: 28%;
font-size: 16px;
border-bottom: 1px solid black;
border-left: 2px solid black; 
`;

const QuickToolsSummary = () => {
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
                        Graphs to Review
                    </QuickToolsButtons>

                    <QuickToolsButtons>
                        Significant Changes
                    </QuickToolsButtons>

                    <QuickToolsButtons onClick={() => {

                            var element = document.getElementsByClassName('rv-xy-plot__inner');
                            saveSvgAsPng.saveSvgAsPng(element[0], 'ride-graph.png');

                    }}>
                        Quick Export
                    </QuickToolsButtons>
            </QuickToolsSideNav>
        </>
    );
}

export default QuickToolsSummary