import React from 'react'
import QuickToolsMain from '../components/Main/QuickToolsMain'
import IntervalsCountDisplay from '../components/Interval/IntervalsCountDisplay'
import Attraction from '../components/Interval/AttractionIntervals'
import ParkwideIntervals from '../components/Interval/ParkwideIntervals'
import MainCodeMenu, { MainCodeContainer } from '../components/Main/MainCodeMenu'
import Navbar from '../components/General/Navbar';
import Banner from '../components/General/Bannerbar';
const Interval = () => {
    return (
        <>  
            <Navbar/>
            <Banner/>
            <QuickToolsMain></QuickToolsMain>
            <MainCodeMenu></MainCodeMenu>
            <IntervalsCountDisplay></IntervalsCountDisplay>
            <Attraction></Attraction>
            <ParkwideIntervals></ParkwideIntervals>
        </>
      
      );
}

export default Interval