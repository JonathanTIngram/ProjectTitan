import React from 'react'
import QuickToolsMain from '../components/Main/QuickToolsMain'
import Attraction from '../components/Interval/AttractionIntervals'
import ParkwideIntervals from '../components/Interval/ParkwideIntervals'
import MainCodeMenu from '../components/Main/MainCodeMenu'
import Navbar from '../components/General/Navbar';
import Banner from '../components/General/Bannerbar';
const Interval = () => {
    return (
        <>  
            <Navbar/>
            <Banner/>
            <QuickToolsMain></QuickToolsMain>
            <MainCodeMenu></MainCodeMenu>
            <Attraction></Attraction>
            <ParkwideIntervals></ParkwideIntervals>
        </>
      
      );
}
export default  Interval