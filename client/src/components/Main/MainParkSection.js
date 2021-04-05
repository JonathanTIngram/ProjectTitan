import React from 'react'
import styled from 'styled-components';

export const ParkSectionContainer = styled.div`
background: transparent;
border-right: 2px solid black;
border-bottom: 2px solid black;
margin: 15px 0px;
position: absolute;
left: 40%;
top: 505px;
width: 30%;
height: 220px;
text-align: center;
align-content: center;
`;

const MainParkSection = () => {
    return (
        <>

        <ParkSectionContainer>
                      <h1>Park Section Data</h1>
        </ParkSectionContainer>
        </>
    )
}

export default MainParkSection