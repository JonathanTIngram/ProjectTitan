import React from 'react'
import styled from 'styled-components';

export const RidePercentChangeContainer = styled.div`
background: transparent;
border-right: 2px solid black;
border-bottom: 2px solid black;
margin: 15px 0px;
position: absolute;
right: 0px;
top: 505px;
width: 30%;
height: 220px;
text-align: center;
align-content: center;
overflow-y: scroll;
`;

export const TH = styled.th`
width: 12.5%;
height: 50px;
border-bottom: 2px solid black;
border-right: 2px solid black;
border-left: 2px solid black;
background-color: darkgray;
text-align: center;
`

export const TR = styled.tr`
width: 100%;
height: 50px;
/* padding: 5%; */
border-bottom: 2px solid black;
`
export const TD = styled.td`
background-color: lightgrey;
width: 12.5%;
height: 50px;
border-bottom: 2px solid black;
border-left: 2px solid black;
border-right: 2px solid black;
text-align: center;
`

export const Table = styled.table`
width: 100%;
height: 100%;
/* text-align: center; */
overflow-y: scroll;
`


const MainRidePercentChange = () => {
    return (
        <>

        <RidePercentChangeContainer>
        <Table class = "sortable">
                    <TR>
                        <TH>Ride Name</TH>
                        <TH>Day Change</TH>
                        <TH>Day % Change</TH>
                    </TR>
                    <TR>
                        <TD></TD>  <TD></TD>  <TD></TD>
                    </TR>
                    <TR>
                        <TD></TD>  <TD></TD>  <TD></TD>
                    </TR>
                    <TR>
                        <TD></TD>  <TD></TD>  <TD></TD>
                    </TR>
                    <TR>
                        <TD></TD>  <TD></TD>  <TD></TD>
                    </TR>

                    <TR>
                        <TD></TD>  <TD></TD>  <TD></TD>
                    </TR>


                    </Table>
        </RidePercentChangeContainer>
        </>
    )
}

export default MainRidePercentChange