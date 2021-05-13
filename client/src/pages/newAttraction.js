import React from 'react';
import QuickToolsPanel from '../components/NewAttraction/QuickToolsPanel'
import AttractionManagerTable from '../components/NewAttraction/AttractionManagerTable'
import AttractionManagerTitle from '../components/NewAttraction/AttractionManagerTitle'
import Navbar from '../components/General/Navbar';
import Banner from '../components/General/Bannerbar';
const newAttraction = () => {
    return (
        <>       
            <Navbar />
            <Banner />             
            <AttractionManagerTitle></AttractionManagerTitle>
            <AttractionManagerTable></AttractionManagerTable>
            <QuickToolsPanel/>
        </>
      );
    };
    
    export default newAttraction
