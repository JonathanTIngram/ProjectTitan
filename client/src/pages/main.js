import React from 'react'
import QuickToolsMain from '../components/Main/QuickToolsMain'
import MainCodeMenu from '../components/Main/MainCodeMenu'
import MainInfoDisplay from '../components/Main/MainInfoDisplay'
import MainMiniAndon from '../components/Main/MainMiniAndon'
import MainGraphDisplay from '../components/Main/MainGraphDisplay'
import MainWeatherRadar from '../components/Main/MainWeatherRadar'
import MainDownTime from '../components/Main/MainDownTime'
import MainParkSection from '../components/Main/MainParkSection'
import MainRidePercentChange from '../components/Main/MainRidePerecentChange'
import Navbar from '../components/General/Navbar';
import Banner from '../components/General/Bannerbar';

const Main = () => {
    return (
        <div>
          <Navbar />
          <Banner />
          <QuickToolsMain></QuickToolsMain>
          <MainCodeMenu></MainCodeMenu>
          <MainInfoDisplay></MainInfoDisplay>
          <MainMiniAndon></MainMiniAndon>
          <MainGraphDisplay></MainGraphDisplay>
          <MainWeatherRadar></MainWeatherRadar>
          <MainDownTime></MainDownTime>
          <MainParkSection></MainParkSection>
          <MainRidePercentChange></MainRidePercentChange>
        </div>
      );
};

export default Main 