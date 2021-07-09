import React from 'react'
import styled from 'styled-components';

export const DownTimeContainer = styled.div`
background: transparent;
border-left: 2px solid black;
border-right: 2px solid black;
border-bottom: 2px solid black;
margin: 15px 0px;
position: absolute;
left: 0px;
top: 505px;
width: 40%;
height: 220px;
text-align: center;
align-content: center;
`;

const MainDownTime = () => {
    return (
        <>

        <DownTimeContainer>
                      <h1>Downtime Events</h1>
        </DownTimeContainer>
        </>
    )
}

export default MainDownTime