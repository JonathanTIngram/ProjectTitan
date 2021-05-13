import React from 'react'
import styled from 'styled-components';

export const MiniAndonContainer = styled.div`
background: transparent;
border-bottom: 2px solid black;
margin: 15px 0px;
position: absolute;
right: 0px;
top: 305px;
width: 30%;
height: 200px;
text-align: center;
align-content: center;
`;

const MainMiniAndon = () => {
    return (
        <>

        <MiniAndonContainer>
                      <h1>Miniature Andon</h1>
        </MiniAndonContainer>
        </>
    )
}

export default MainMiniAndon