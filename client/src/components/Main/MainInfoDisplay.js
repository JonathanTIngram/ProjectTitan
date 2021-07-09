/* eslint-disable */
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

export const Select = styled.select`
height: 95%;
width: 95%;
font-size: 100%;
font-weight: bold;
`

const MainInfoDisplay = () => {
    return (
    <InfoContainer>
                <Table>
                    <TR>
                        <TH><Select><option>Ride Name</option></Select></TH>
                        <TH><Select><option>Operational Status</option></Select></TH>
                        <TH><Select><option>Last Hour Throughput</option></Select></TH>
                        <TH><Select><option>Last Hour Wait Time</option></Select></TH>
                        <TH><Select><option>Efficency %</option></Select></TH>
                        <TH><Select><option>Vehicles Operating</option></Select></TH>
                        <TH><Select><option>Total Daily Downtime</option></Select></TH>
                        <TH><Select><option>Employees At Ride</option></Select></TH>
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