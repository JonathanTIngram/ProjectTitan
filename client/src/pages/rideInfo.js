import React from 'react';
import BasicInfo from '../components/RideInfo/BasicInfo';
import CollectedData from '../components/RideInfo/CollectedData';
import QuickToolsGraph from '../components/RideInfo/QuickToolsGraph';
import Interval from '../components/RideInfo/SubIntervals';
import Options from '../components/RideInfo/Options';
import Graph from '../components/RideInfo/MiniGraph';
const RideInfo = () => {
    return (
        <>
        <BasicInfo></BasicInfo>
        <CollectedData></CollectedData>
        <QuickToolsGraph></QuickToolsGraph>
        <Interval> </Interval>
        <Options></Options> 
        <Graph></Graph>
        </>
      );
}

export default RideInfo