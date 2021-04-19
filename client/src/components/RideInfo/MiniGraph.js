import styled from 'styled-components';

const Border = styled.div`
overflow: hidden;
background: transparent;
position: absolute;
top: 450px;
right: 0px;
width: 38%;
height: 230px;
border-bottom: 2px solid black;
`

const MiniGraph = () => {
    return (
        <Border>  <h1> Import Graph Here</h1> </Border>
    )
}

export default MiniGraph
