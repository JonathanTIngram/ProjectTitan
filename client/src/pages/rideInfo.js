import React, { useState, useRef, useEffect, useCallback, Component } from 'react';
import BasicInfo from '../components/RideInfo/BasicInfo';
import CollectedData from '../components/RideInfo/CollectedData';
import QuickToolsGraph from '../components/RideInfo/QuickToolsGraph';
import Interval from '../components/RideInfo/SubIntervals';
import Options from '../components/RideInfo/Options';
import Graph from '../components/RideInfo/MiniGraph';
import Navbar from '../components/General/Navbar';
import Banner from '../components/General/Bannerbar';

class RideInfo extends Component {
    

    render () {

    return (
        <>
        <Navbar/>
        <Banner/>
        {console.log(this.props.location.ride_name.ride)}
        <BasicInfo ride_name={this.props.location.ride_name.ride}></BasicInfo>
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