import React from 'react'
import styled from 'styled-components';
import Rides from '../components/Graph/RideCheck'
import Stats from '../components/Graph/StatCheck'
import Days from '../components/Graph/DayCheck'
import Options from '../components/Graph/MapEnable'
import QuickToolsSummary from '../components/Graph/QuickToolsSummary';
import FavBar from '../components/Graph/FavoriteBar';
import Units from '../components/Graph/GraphUnits'
import LC from '../components/Graph/ChartLine'
import Navbar from '../components/General/Navbar';
import Banner from '../components/General/Bannerbar';

const OuterBorder = styled.div`
  width: 100%;
  height: 685px;
  padding: 0;
  margin: 0px 1px;
  border-left: solid 2px;
  border-bottom: solid 2px;
`;
const Selection = styled.div`
  width: 100%;
  height: 22.5px;
  padding: 0;
  margin: 15px 0px;
`;
const Border = styled.div`
  border-top: solid 2px;
  border-right: solid 2px;
  height: 95%;
  width: 80%;
  padding: 0;
  margin: 9px 0px;
  overflow: hidden;
`;

const CheckBoxWidget = styled.div`
  font-size: 14px;
  border-right: solid 2px;
  border-bottom: solid 2px;
  width: 22%;
  height: 40%;
  overflow: scroll;
`;

const DayCheckWidget = styled.div`
  font-size: 14px;
  border-right: solid 2px;
  width: 22%;
  height: 20%;
  overflow: scroll;
`;

const MapWidget = styled.nav`
  margin-top: -450px;
  font-size: 14px;
  overflow: hidden;
  padding-left: 80%;
  padding-right: -20%;
  width:100%;
`;

const ChartBorder = styled.nav`
  overflow: hidden;
  padding-left: 2%;
  position: absolute;
  left: 17%;
  top: 15%;
  width: 62%;
  height: 100%;
`;


export default function Graph() {
    return (
        <>
        <Navbar />
        <Banner />  
          <OuterBorder>
          <QuickToolsSummary/>
          <Selection> <Units></Units> </Selection>
          <Border>
            <CheckBoxWidget>  <Rides></Rides> </CheckBoxWidget> 
            <CheckBoxWidget> <Stats></Stats> </CheckBoxWidget>
            <DayCheckWidget>  <Days></Days> </DayCheckWidget>
            <ChartBorder> <LC></LC> </ChartBorder>
           </Border>
            <MapWidget> <Options></Options> </MapWidget>
            <FavBar/>
          </OuterBorder>
        </>
    );
}