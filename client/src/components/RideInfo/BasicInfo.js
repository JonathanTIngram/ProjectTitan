import styled from 'styled-components';
import React, { Component } from 'react';
import Axios from 'axios'

const Border = styled.div`
overflow: hidden;
background: transparent;
margin: 15px 0px;
position: absolute;
left: 0px;
width: 22%;
height: 600px;
border-right: 2px solid black;
border-bottom: 2px solid black;
`

const InfoContainer = styled.div`
overflow: hidden;
overflow-y: scroll;
background: transparent;
margin: 0px 0px;
position: absolute;
left: 0px;
width: 100%;
height: 600px;
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

export const Label1 = styled.div`
text-align: center;
font-size: 150%;
align-content: center;
border-bottom: 2px solid black;
font-weight: bold;
`

export const Label2 = styled.div`
text-align: center;
font-size: 125%;
align-content: center;
border-bottom: 2px solid black;
`
const styleGray = {backgroundColor : '#AFAFAF'};



class BasicInfo extends Component {

    render () {
    return (
        <Border>
            
            <Label2>Basic Information</Label2>
            <InfoContainer>
                <table className="table table-bordered table-striped">
                    <thead>
                        <tr style = {styleGray}>
                            <th scope="col">Property</th>
                            <th scope="col">Value</th>
                        </tr>
                    </thead>

                    <tbody>
                    <tr>
                    
                        <td>Name</td>   <td>   {this.props.ride_name}   </td>
                    </tr>
                    <tr>
                        <td>Location</td>   <td>     {this.props.ride_name}   </td>
                    </tr>
                    <tr>
                        <td>Model</td>   <td>        </td>
                    </tr>
                    <tr>
                        <td>Theoretical Throughput</td>   <td>        </td>
                    </tr>
                    <tr>
                        <td>Target Throughput</td>   <td>        </td>
                    </tr>
                    <tr>
                        <td>Max Vehicles</td>   <td>        </td>
                    </tr>
                    <tr>
                        <td>Min Vehicles</td>   <td>        </td>
                    </tr>
                    <tr>
                        <td>Max Seats</td>   <td>        </td>
                    </tr>
                    <tr>
                        <td>Primary Extension</td>   <td>        </td>
                    </tr>
                    <tr>
                        <td>Secondary Extension</td>   <td>        </td>
                    </tr>
                    <tr>
                        <td>Tertiary Extension</td>   <td>        </td>
                    </tr>
                    <tr>
                        <td>Max Staff</td>   <td>        </td>
                    </tr>
                    <tr><td></td><td></td></tr>     <tr><td></td><td></td></tr>     <tr><td></td><td></td></tr>     <tr><td></td><td></td></tr>     <tr><td></td><td></td></tr>     <tr><td></td><td></td></tr>     <tr><td></td><td></td></tr>     <tr><td></td><td></td></tr>     <tr><td></td><td></td></tr>     
                    </tbody>

                </table>
            </InfoContainer>    
 
        </Border>
    )
    }
}

export default BasicInfo