import styled from 'styled-components';

export const MainCodeContainer = styled.div`
background: transparent;
border-left: 2px solid black;
border-right: 2px solid black;
border-bottom: 2px solid black;
margin: 20px 0px;
position: absolute;
right: 0px;
 width: 11.5%;
 height: 45px;
 margin: 210px -5px;
`;

export const Label = styled.label`
position: absolute;
font-size: 16px;
margin-top: 10px;
margin-left: 5px;
`
export const Select = styled.select`
position: absolute;
padding: 5px;
margin-top: 8px;
text-align: center;
width: 65%;
right:5px;
`



const MainCodeMenu = () => {
    return (
        <>
        <MainCodeContainer>
            <Label for="codes">Code:</Label>
            <Select name="codes" id="codes">
                    <option value="operating">Operating</option>
                    <option value="closed">Closed</option>

            </Select>

        </MainCodeContainer>
        </>
    );
}

export default MainCodeMenu