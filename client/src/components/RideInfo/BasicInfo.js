import styled from 'styled-components';
import React, { useState, useRef, useEffect, useCallback, Component } from 'react';
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

const RideSelect = styled.select`
    align: right;
`
const styleGray = {backgroundColor : '#AFAFAF'};





//For some reason you have to put useState in a React component function
// you cant put use state variable in a class or define them at the top level
const RideData = (props) => {
    //for the drop down menu
    const [rideSelect, setRideSelect] = useState('');
    const [ride_name, setRideName] = useState('');
    const [parkSection, setParkSection] = useState('');

    //state to get all attractions
    const [attractionList, setAttractionList] = useState([]);


    var ridePassed = props.ride;



    return (

        <td>{attractionList.map((val, key) => {
            var parkSection;
            if (ride_name == ridePassed){
                parkSection = val.parkSection;
                console.log(parkSection)
            }
          return (
              <> 
              
                <p>{console.log(parkSection)}</p> 
              </>
          );
          })}
        </td>
    );
}

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

                        
                    
                        <td>Name</td>   <td>   {this.props.ride_name}  </td>
                    </tr>

                    
                    <tr>
                        <td>Location</td>   <td>  {this.props.parkSection.parkSection}  </td>
                    </tr>
                    <tr>
                        
                        <td>Model</td>   <td>   {this.props.rideModel.rideModel}   </td>
                    </tr>
                    <tr>
                        <td>Theoretical Throughput</td>   <td>        </td>
                    </tr>
                    <tr>
                        <td>Target Throughput</td>   <td>        </td>
                    </tr>
                    <tr>
                        <td>Max Vehicles</td>   <td>   {this.props.maxVehicles.maxVehicles}     </td>
                    </tr>
                    <tr>
                        <td>Min Vehicles</td>   <td> {this.props.minVehicles.minVehicles}    </td>
                    </tr>
                    <tr>
                        <td>Max Seats</td>   <td> {this.props.maxSeats.maxSeats}  </td>
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
                        <td>Max Staff</td>   <td> {this.props.maxStaff.maxStaff}    </td>
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