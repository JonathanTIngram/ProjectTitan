import React, { Component, useState, useEffect} from 'react';
import LineChart from 'react-linechart';
import Axios from 'axios';

//
function ChartLine() {


    const [rideList, setRideList] = useState([]);
    var statList = [];




    const CheckedRideName = () => {

            Axios.get(`http://localhost:3001/sendRideNameGraph`).then(res => {
                setRideList(res.data)
            }).catch(err => console.log(err));
        
    }


    const CheckedStat = () => {

        Axios.get(`http://localhost:3001/sendStatsGraph`).then(res => {
            statList = res.data;
            return statList;
        }).catch(err => console.log(err));
    }

    // const getGraphInfo = () => {

    //     Axios.post(`http://localhost:3001/getGraphInfo`).then(res => {
    //         rideList: CheckedRideName()
    //     }).catch(err => console.log(err));
    // }

    
    // window.addEventListener('load', () => {
    //     CheckedRideName();
    //     CheckedStat();
    // })

    const data = [
        {						
    			
            color: "steelblue", 
            points: [
                { x: 1, y: 64 },
                { x: 2, y: 61 },
                { x: 3, y: 64 },
                { x: 4, y: 62 },
                { x: 5, y: 64 },
                { x: 6, y: 60 },
                { x: 7, y: 58 },
                { x: 8, y: 59 },
                { x: 9, y: 53 },
                { x: 10, y: 54 },
                { x: 11, y: 61 },
                { x: 12, y: 60 },
                { x: 13, y: 55 },
                { x: 14, y: 60 },
                { x: 15, y: 56 },
                { x: 16, y: 60 },
                { x: 17, y: 59.5 },
                { x: 18, y: 63 },
                { x: 19, y: 58 },
                { x: 20, y: 54 },
                { x: 21, y: 59 },
                { x: 22, y: 64 },
                { x: 23, y: 59 }
            ]
        }
    ];


    
    return (
        
        <div>
            {useEffect(() => {
            {window.addEventListener('load', CheckedRideName())}
            {window.addEventListener('load', CheckedStat())}
            console.log(rideList[2])
            console.log(statList);
        }, [])}
            <div className="App">
                <LineChart 
                    width={850}
                    height={630}
                    data={data}
                />
            </div>				
        </div>
    );
}

export default ChartLine
