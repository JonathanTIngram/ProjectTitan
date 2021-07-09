import React from 'react'
import styled from 'styled-components';

export const MiniAndonContainer = styled.div`
background: transparent;
border-left: 2px solid black;
border-right: 2px solid black;
border-bottom: 2px solid black;
margin: 15px 0px;
position: absolute;
left: 0px;
top: 305px;
width: 30%;
height: 200px;
text-align: center;
align-content: center;
`;

const MainWeatherRadar = () => {
    return (
        <>

        <MiniAndonContainer>
                      <h1>Weather Radar</h1>
        </MiniAndonContainer>
        </>
    )
}

export default MainWeatherRadar