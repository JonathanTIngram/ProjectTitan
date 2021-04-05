import styled from 'styled-components';
import React, { useState, useEffect } from "react";

const InfoContainer = styled.div`
overflow: hidden;
overflow-y: scroll;
background: transparent;
border-bottom: 2px solid black;
margin: 15px 0px;
position: absolute;
left: 0px;
width: 88.8%;
height: 240px;
`;

export const TH = styled.th`
width: 12.5%;
height: 50px;
border-bottom: 2px solid black;
border-left: 2px solid black;
border-right: 2px solid black;
background-color: darkgray;
text-align: center;
`

export const TR = styled.tr`
width: 100%;
height: 50px;
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
overflow-y: scroll;
overflow: hidden;
`



const MainInfoDisplay = () => {
    return (
    <InfoContainer>
                <Table class="sortable">
                    <TR>
                        <TH>Ride Name</TH>
                        <TH>Operational Status</TH>
                        <TH>Last Hour Throughput</TH>
                        <TH>Last Hour Wait Time</TH>
                        <TH>Efficency %</TH>
                        <TH>Vehicles Operating</TH>
                        <TH>Total Daily Downtime</TH>
                        <TH>Employees At Ride</TH>
                    </TR>        
                    <TR>
                        <TD></TD>  <TD></TD>  <TD></TD>  <TD></TD>  <TD></TD>  <TD></TD>  <TD></TD>  <TD></TD>
                    </TR>
                    <TR>
                        <TD></TD>  <TD></TD>  <TD></TD>  <TD></TD>  <TD></TD>  <TD></TD>  <TD></TD>  <TD></TD>
                    </TR>
                    <TR>
                        <TD></TD>  <TD></TD>  <TD></TD>  <TD></TD>  <TD></TD>  <TD></TD>  <TD></TD>  <TD></TD>
                    </TR>
                    <TR>
                        <TD></TD>  <TD></TD>  <TD></TD>  <TD></TD>  <TD></TD>  <TD></TD>  <TD></TD>  <TD></TD>
                    </TR>
                    <TR>
                        <TD></TD>  <TD></TD>  <TD></TD>  <TD></TD>  <TD></TD>  <TD></TD>  <TD></TD>  <TD></TD>
                    </TR>
                    <TR>
                        <TD></TD>  <TD></TD>  <TD></TD>  <TD></TD>  <TD></TD>  <TD></TD>  <TD></TD>  <TD></TD>
                    </TR>
                    <TR>
                        <TD></TD>  <TD></TD>  <TD></TD>  <TD></TD>  <TD></TD>  <TD></TD>  <TD></TD>  <TD></TD>
                    </TR>
                    <TR>
                        <TD></TD>  <TD></TD>  <TD></TD>  <TD></TD>  <TD></TD>  <TD></TD>  <TD></TD>  <TD></TD>
                    </TR>
                    <TR>
                        <TD></TD>  <TD></TD>  <TD></TD>  <TD></TD>  <TD></TD>  <TD></TD>  <TD></TD>  <TD></TD>
                    </TR>
                    <TR>
                        <TD></TD>  <TD></TD>  <TD></TD>  <TD></TD>  <TD></TD>  <TD></TD>  <TD></TD>  <TD></TD>
                    </TR>

                </Table>
            </InfoContainer>
    )
}

export default MainInfoDisplay