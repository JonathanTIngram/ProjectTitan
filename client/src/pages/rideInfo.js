
import React, { useState, useRef, useEffect, useCallback, Component } from 'react';
import BasicInfo from '../components/RideInfo/BasicInfo';
import CollectedData from '../components/RideInfo/CollectedData';
import QuickToolsGraph from '../components/RideInfo/QuickToolsGraph';
import Interval from '../components/RideInfo/SubIntervals';
import Options from '../components/RideInfo/Options';
import Graph from '../components/RideInfo/MiniGraph';

import styled from 'styled-components';
import Axios from 'axios';


const RideSelect = styled.select`
    align: right;
`

// //recieve data from backend to display
// const GetAttractions = () => {

  
//   //console.log(res.data)
//   useEffect(() => {
      
//       Axios.get('http://localhost:3001/getAttraction').then(res => {
//       setAttractionList(res.data);
//       console.log(res.data)
//       }).catch(err => console.log(err));
//       }, [])
// }


class RideInfo extends Component {
    

    render () {

    return (
        <>


        <BasicInfo ride_name={this.props.location.ride_name.ride}
                   parkSection={this.props.location.parkSection}
                   rideModel={this.props.location.rideModel}
                   maxVehicles={this.props.location.maxVehicles}
                   minVehicles={this.props.location.minVehicles}
                   maxStaff={this.props.location.maxStaff}
                   maxSeats={this.props.location.maxSeats}
        ></BasicInfo>
        <CollectedData></CollectedData>
        <QuickToolsGraph></QuickToolsGraph>
        <Interval> </Interval>
        <Options></Options> 
        <Graph></Graph>
        
        </>
      );
    }
}

export default RideInfo