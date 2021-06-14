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

    let index = 0;
    var rList = [];
    var wList = [];
    var tList = [];
    var asList = [];
    var adList = [];
    var timeList = [];
    var dateList = [];


    {dataList.map((val, key) => {	
        if (val.ride_name){
            var minutes = new Date(val.ts).getMinutes();
            if(minutes < 10){
                minutes = "0" + minutes;
            }
            var time = new Date(val.ts).getHours() + ":" + minutes;
            var date = new Date(val.ts).getMonth() + "/" + new Date(val.ts).getDate() + "/" + new Date(val.ts).getFullYear();
            console.log("Ride name = ", val.ride_name);
            console.log("Time = ", time);
            console.log("Date = ", date);
            rList.push(val.ride_name);
            timeList.push(time);
            dateList.push(date)
            console.log("Wait Time = ", val.WaitTime);
            wList.push(val.WaitTime);
        
            console.log("Throughput = ", val.Throughput)
            tList.push(val.Throughput);


            console.log("Available Seats = ", val.AvailableSeats)
            asList.push(val.AvailableSeats);
            console.log("Available Down = ", val.AvailableDown)
            adList.push( val.AvailableDown);

            console.log('');
     }
     })}

     const compareRide = () => {
        for(var i = 0; i < index; i++) {
            //check box list is compared with collected data
            if(rideList.includes(rList[i])) {
                console.log("Matched ", rList[i]);
       
                //each variable is compared with the selected stat
                if(statList.includes("Wait Time"))
                {
                    //locate variable
                    if(wList[i] != -1) {
                        console.log("Wait Time of " + rList[i] + " = " + wList[i]);
         

                     } 
                }
                if(statList.includes("Throughput"))
                {
                     //locate variable
                    if(tList[i] != -1) {
                        console.log("Throughput of " + rList[i] + " = " + tList[i]);
   
                    }
                }
                if(statList.includes("Available Seats"))
                {
                     //locate variable
                    if(asList[i] != -1) {
                        console.log("Available seats of " + rList[i] + " = " + asList[i]);

                    }
                }   
                if(statList.includes("Available Down"))
                {
                     //locate variable
                    if(adList[i] != -1) {
                        console.log("Available down of " + rList[i] + " = " + adList[i]);
      
                    }
                }

                
                console.log('');
            }
        }
    }
     
   var data = []
    const eachStat = (list) => {
        for (let i = 0; i < list.length; i++) {
            if(list[i] != -1){
            data.push({
                x: timeList[i],
                y: list[i]
            })
            data.sort((a, b) => (a.x > b.x) ? 1 : (a.x === b.x) ? 1 : -1)
            }
        }
    }
    const selectedRide = () => {
        var count = 0
        for (let i = 0; i < rList.length; i++) {
             var element = rList[i];
             if(rideList.includes(element)){
                console.log(rideList.includes(element));
                count++;
             }
        }
        console.log(count)
    }

    const selectedStat = (list) => {
        if(list == "Throughput") {
            eachStat(tList)
        }
        if(list == "Wait Time") {
            eachStat(wList)
        }
        if(list == "Available Seats") {
            eachStat(asList)
        }
        if(list == "Available Down") {
            eachStat(adList)
        }
    }

    

    return (

        <div>

            {useEffect(() => {
            {window.addEventListener('load', CheckedData())}
            {window.addEventListener('load', CheckedRideName())}
            {window.addEventListener('load', CheckedStat())}
        }, [])}
            {console.log("Amount of rides ", index)}
            {console.log("Ride names = ", rList)}
            {console.log("TimeList = ", timeList)}
            {console.log("DateList = ", dateList)}
            {console.log("WaitList = ", wList)}
            {console.log("ThroughputList = ", tList)}
            {console.log("AvailableSeatList = ", asList)}
            {console.log("AvailableDownList = ", adList)}
            {selectedRide()}
            {selectedStat(statList)}
            {compareRide()}

            <div className="App">

             <FlexibleXYPlot height={500} width={900} xType="ordinal">
                <VerticalGridLines />
                <HorizontalGridLines />

                <XAxis title="Time of interval card"
                style={{
                    line: {stroke: 'black'},
                    text: {stroke: 'none', fill: '#6b6b76', fontWeight: 600}
                    
                  }}
                tickTotal={data.length} 
                tickLabelAngle={-25} 
                tickFormat={d => {
                 return d
                }}
                />
                <YAxis title={statList}
                 style={{
                    line: {stroke: 'black'},
                    text: {stroke: 'none', fill: '#6b6b76', fontWeight: 600}
                  }}/>

                 <LineMarkSeries 
                 
                    data={data} 
                    onValueMouseOver={(datapoint, event)=>{
                        console.log(datapoint)
                      }}
                      
                    curve={'curveMonotoneX'} color="#ADDDE1"
                    markStyle={{stroke: 'black'}}
                    style={{ strokeLinejoin: "round"}}
                    strokeStyle="solid"/>
            </FlexibleXYPlot>
            </div>				
        </div>
    );
    
}

export default ChartLine