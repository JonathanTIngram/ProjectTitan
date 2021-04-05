import React from 'react';
import QuickToolsPanel from '../components/NewAttraction/QuickToolsPanel'
import AttractionManagerTable from '../components/NewAttraction/AttractionManagerTable'
import AttractionManagerTitle from '../components/NewAttraction/AttractionManagerTitle'

const newAttraction = () => {
    return (
        <>                    
            <AttractionManagerTitle></AttractionManagerTitle>
            <AttractionManagerTable></AttractionManagerTable>
            <QuickToolsPanel/>
        </>
      );
    };
    
    export default newAttraction
