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
export const Select = styled.select`
height: 95%;
width: 95%;
font-size: 100%;
font-weight: bold;
`
export const SelectTimeFrame = styled.select`
height: 50%;
width: 45%;
font-size: 100%;
font-weight: bold;
`

const MainRidePercentChange = () => {
    return (
        <>

        <RidePercentChangeContainer>
        <Table>
                    <TR>
                        <TH><Select><option>Ride Name</option></Select></TH>
                        <TH><SelectTimeFrame><option>Day</option><option>Hour</option><option>Week</option><option>Month</option></SelectTimeFrame> Change</TH>
                        <TH><SelectTimeFrame><option>Day</option><option>Hour</option><option>Week</option><option>Month</option></SelectTimeFrame> % Change</TH>
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