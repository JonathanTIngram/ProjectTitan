/* eslint-disable */
import React, { Component, useState, useEffect} from 'react';
import '../../../node_modules/react-vis/dist/style.css';
import {XYPlot, Borders, VerticalGridLines, HorizontalGridLines, XAxis, YAxis, LineMarkSeries} from 'react-vis';
import {
  FlexibleXYPlot,
  FlexibleWidthXYPlot,
  FlexibleHeightXYPlot
} from 'react-vis';
import Axios from 'axios';
import styled from 'styled-components';

function ChartLine() {


    var [rideList, setRideList] = useState([]);
    var [statList, setStatList] = useState([]);
    var [dataList, setDataList] = useState([]);


    const CheckedRideName = () => {

            Axios.get(`http://localhost:3001/sendRideNameGraph`).then(res => {
                //console.log(res.data)
                setRideList(res.data)
            }).catch(err => console.log(err));
    }


    const CheckedStat = () => {

        Axios.get(`http://localhost:3001/sendStatsGraph`).then(res => {
            //console.log(res.data)
            setStatList(res.data)
        }).catch(err => console.log(err));
    }

    const CheckedData = () => {

        Axios.get(`http://localhost:3001/getCollectedData`).then(res => {
            //console.log(res.data)
            setDataList(res.data)
        }).catch(err => console.log(err));
    }


    var showRideList = () => {


        rideList.map((val, key) => {

            return (

                    <>
                                            <VerticalGridLines />
                <HorizontalGridLines />

                <XAxis title="Time of interval card"
                style={{
                    line: {stroke: 'black'},
                    text: {stroke: 'none', fill: '#6b6b76', fontWeight: 600}
                    
                  }}
                tickLabelAngle={-25} 
                tickFormat={d => {
                var minutes = new Date(d).getMinutes();
                if(minutes < 10){
                    minutes = "0" + minutes;
                }
                 return new Date(d).getHours()+ ":" + minutes
                }}
                />
                <YAxis title={selected}
                 style={{
                    line: {stroke: 'black'},
                    text: {stroke: 'none', fill: '#6b6b76', fontWeight: 600}
                  }}/>
            {rideList.map((i) => {
                {checkStat(i)}
                return (
                    <LineMarkSeries 
                 
                    data={data} 
                    onValueMouseOver={(datapoint, event)=>{
                        console.log(datapoint)
                      }}
                      
                    curve={'curveMonotoneX'} color="#ADDDE1"
                    markStyle={{stroke: 'black'}}
                    style={{ strokeLinejoin: "round"}}
                    strokeStyle="solid"/>
                )
                })}
                    
                    </>
                
                
            );
        });
        
    }



    var intervalCard = [];
    {dataList.map((val, key) => {	
        if (val.ride_name){
            var time = new Date(val.ts)
            var date = new Date(val.ts).getMonth() + "/" + new Date(val.ts).getDate() + "/" + new Date(val.ts).getFullYear();
            intervalCard.push({rideName: val.ride_name, WaitTime: val.WaitTime,
            Throughput: val.Throughput, AvailableSeats: val.AvailableSeats, 
            AvailableDown: val.AvailableDown, Time: time, Date: date})
     }
     })}
    
    
    //  const compareRide = () => {
    //     for(var i = 0; i < index; i++) {
    //         //check box list is compared with collected data
    //         if(rideList.includes(rList[i])) {
    //             console.log("Matched ", rList[i]);
    //             check = true;
    //             //each variable is compared with the selected stat
    //             if(statList.includes("Wait Time"))
    //             {
    //                 //locate variable
    //                 if(wList[i] != -1) {
    //                     console.log("Wait Time of " + rList[i] + " = " + wList[i]);
         

    //                  } 
    //             }
    //             if(statList.includes("Throughput"))
    //             {
    //                  //locate variable
    //                 if(tList[i] != -1) {
    //                     console.log("Throughput of " + rList[i] + " = " + tList[i]);
   
    //                 }
    //             }
    //             if(statList.includes("Available Seats"))
    //             {
    //                  //locate variable
    //                 if(asList[i] != -1) {
    //                     console.log("Available seats of " + rList[i] + " = " + asList[i]);

    //                 }
    //             }   
    //             if(statList.includes("Available Down"))
    //             {
    //                  //locate variable
    //                 if(adList[i] != -1) {
    //                     console.log("Available down of " + rList[i] + " = " + adList[i]);
      
    //                 }
    //             }

                
    //             console.log('');
    //         }
    //     }
    // }
     
    var data = []
    var selected = '';
    const checkStat = (ride) => {	
        console.log(intervalCard)
        {intervalCard.map((val) => {
            if(val.rideName == ride){
            if(statList == "Throughput") {
                selected = val.Throughput
            }
            if(statList == "Wait Time") {
                selected = val.WaitTime
            }
            if(statList == "Available Seats"){
                selected = val.AvailableSeats
            }
            if(statList == "Available Down") {
                selected = val.AvailableSeats
            }
            if(selected != -1) 
            {
                data.push({
                    x: val.Time,
                    y: selected
                })
            }
        }
        })}
        data.sort((a, b) => (a.x > b.x) ? 1 : (a.x === b.x) ? 1 : -1)
    }

    return (

        <div>
            {useEffect(() => {
            {window.addEventListener('load', CheckedData())}
            {window.addEventListener('load', CheckedRideName())}
            {window.addEventListener('load', CheckedStat())}
        }, [])}




            <div className="App">

            {rideList.map((val, key) => {

                return (
                    <>
                                <FlexibleXYPlot height={500} width={900} xType="time">



<VerticalGridLines />
<HorizontalGridLines />

<XAxis title="Time of interval card"
style={{
    line: {stroke: 'black'},
    text: {stroke: 'none', fill: '#6b6b76', fontWeight: 600}
    
  }}
tickLabelAngle={-25} 
tickFormat={d => {
var minutes = new Date(d).getMinutes();
if(minutes < 10){
    minutes = "0" + minutes;
}
 return new Date(d).getHours()+ ":" + minutes
}}
/>
<YAxis title={selected}
 style={{
    line: {stroke: 'black'},
    text: {stroke: 'none', fill: '#6b6b76', fontWeight: 600}
  }}/>
{rideList.map((i) => {
{checkStat(i)}
return (
    <LineMarkSeries 
 
    data={data} 
    onValueMouseOver={(datapoint, event)=>{
        console.log(datapoint)
      }}
      
    curve={'curveMonotoneX'} color="#ADDDE1"
    markStyle={{stroke: 'black'}}
    style={{ strokeLinejoin: "round"}}
    strokeStyle="solid"/>
)
})}
</FlexibleXYPlot>
                    </>
                );
            })}
 
            </div>				
        </div>
    );
    
}

export default ChartLine