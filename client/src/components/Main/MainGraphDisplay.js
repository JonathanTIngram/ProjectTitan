import React from 'react'
import styled from 'styled-components';

export const MainGraphContainer = styled.div`
background: transparent;
border-right: 2px solid black;
border-bottom: 2px solid black;
margin: 15px 0px;
position: absolute;
right: 30%;
top: 305px;
width: 40%;
height: 200px;
text-align: center;
align-content: center;
`;

const MainGraphDisplay = () => {
    return (
        <>

        <MainGraphContainer>
                      <h1>Todays Versus Average Throughput</h1>
        </MainGraphContainer>
        </>
    )
}

export default MainGraphDisplay