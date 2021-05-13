import styled from 'styled-components';

const Border = styled.div`
overflow: hidden;
background: transparent;
margin: 15px 0px;
position: absolute;
left: 0px;
width: 25%;
height: 240px;

border-right: 2px solid black;
`

const InfoContainer = styled.div`
overflow: hidden;
overflow-y: scroll;
background: transparent;
margin: 15px 0px;
position: absolute;
left: 0px;
width: 100%;
height: 200px;
`;

export const TH = styled.th`
width: 12.5%;
height: 20px;
border-bottom: 1px solid black;
border-left: 1px solid black;
border-right: 1px solid black;
background-color: darkgray;
`

export const TR = styled.tr`
width: 100%;
height: 40px;
border-bottom: 1px solid black;
`

export const TD = styled.td`
background-color: lightgrey;
width: 12.5%;
height: 20px;
border-bottom: 1px solid black;
border-left: 1px solid black;
border-right: 1px solid black;
text-align: center;
`

export const Table = styled.table`
width: 100%;
height: 100%;
overflow-y: scroll;
overflow: hidden;
`

const Label1 = styled.h1`
margin-left: 5%;
margin-top: 1%;
font-size: 175%;
text-align: left;
font-weight: normal;
`

const IntervalsCountDisplay = () => {
    return (
        <Border>
            <Label1> Attraction Intervals </Label1>
                <InfoContainer>
                    <Table>
                        <TR>
                            <TH>Name</TH>  <TH>Number of Specific Intervals</TH> 
                        </TR>

                        <TR>
                            <TD></TD>  <TD></TD>
                        </TR>
                        <TR>
                            <TD></TD>  <TD></TD>
                        </TR>
                        <TR>
                            <TD></TD>  <TD></TD>
                        </TR>
                        <TR>
                            <TD></TD>  <TD></TD>
                        </TR>
                        <TR>
                            <TD></TD>  <TD></TD>
                        </TR>
                        <TR>
                            <TD></TD>  <TD></TD>
                        </TR>
                        <TR>
                            <TD></TD>  <TD></TD>
                        </TR>
                        <TR>
                            <TD></TD>  <TD></TD>
                        </TR>
                        <TR>
                            <TD></TD>  <TD></TD>
                        </TR>
                        <TR>
                            <TD></TD>  <TD></TD>
                        </TR>
                    </Table>
                    </InfoContainer>    
 
        </Border>
    )
}

export default IntervalsCountDisplay