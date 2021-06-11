import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import '../../../node_modules/react-vis/dist/style.css';
import { XYPlot, LineSeries, HorizontalGridLines, VerticalGridLines, XAxis, YAxis, DecorativeAxis } from 'react-vis';


const saveSvgAsPng = require('save-svg-as-png')

function ChartLine() {



    function msToTime(duration) {
        var milliseconds = Math.floor((duration % 1000) / 100),
          seconds = Math.floor((duration / 1000) % 60),
          minutes = Math.floor((duration / (1000 * 60)) % 60),
          hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
    
        hours = (hours < 10) ? "0" + hours : hours;
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;
    
        return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
      }
    var [rideList, setRideList] = useState([]);
    var [statList, setStatList] = useState([]);
    var [dataList, setDataList] = useState([]);
    var graphData = [];

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


    {
        dataList.map((val, key) => {
            if (val.ride_name) {
                var time = new Date(val.ts).getTime(); //time conversion
                var date = val.ts;
                date = date.substring(0, 10)
                index = index + 1;
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
                adList.push(val.AvailableDown);

                console.log('');
            }
        })
    }

    const compareRide = () => {
        for (var i = 0; i < index; i++) {
            //check box list is compared with collected data
            if (rideList.includes(rList[i])) {
                console.log("Matched ", rList[i]);
                //each variable is compared with the selected stat
                if (statList.includes("Wait Time")) {
                    //locate variable
                    if (wList[i] != -1) {
                        console.log("Wait Time of " + rList[i] + " = " + wList[i]);
                    }
                }
                if (statList.includes("Throughput")) {
                    //locate variable
                    if (tList[i] != -1) {
                        console.log("Throughput of " + rList[i] + " = " + tList[i]);
                    }
                }
                if (statList.includes("Available Seats")) {
                    //locate variable
                    if (asList[i] != -1) {
                        console.log("Available seats of " + rList[i] + " = " + asList[i]);
                    }
                }
                if (statList.includes("Available Down")) {
                    //locate variable
                    if (adList[i] != -1) {
                        console.log("Available down of " + rList[i] + " = " + adList[i]);
                    }
                }


                console.log('');
            }
        }
    }

    var data = [];

    for (var i = 0; i < tList.length; i += 1) {
        if(tList[i] > 0)
        {
            data.push({
                 x:  timeList[i],
                y: tList[i]
            });
        }
    }

    // data.sort(sortFunction);

    // function sortFunction(a, b) {
    //     if (a[0] === b[0]) {
    //         return 0;
    //     }
    //     else {
    //         return (a[0] < b[0]) ? -1 : 1;
    //     }
    // }

    return (

        <div>

            {useEffect(() => {
                { window.addEventListener('load', CheckedData()) }
                { window.addEventListener('load', CheckedRideName()) }
                { window.addEventListener('load', CheckedStat()) }
            }, [])}
            {console.log("Amount of rides ", index)}
            {console.log("Ride names = ", rList)}
            {console.log("TimeList = ", timeList)}
            {console.log("DateList = ", dateList)}
            {console.log("WaitList = ", wList)}
            {console.log("ThroughputList = ", tList)}
            {console.log("AvailableSeatList = ", asList)}
            {console.log("AvailableDownList = ", adList)}


            {compareRide()}
            <div id="ride-graph">
                <XYPlot height={500} width={900} xType="ordinal">
                    <VerticalGridLines />
                    <HorizontalGridLines />

                    {/* <XAxis tickTotal={data.length}   tickLabelAngle={-25} 
                    tickValues={[1, 1.5, 2, 3]}
                        tickFormat={d => {
                            return msToTime(d).toString().substring(0,5)
                    }}/> */}

                    <XAxis top={0} hideLine tickValues={[0, 1, 3, 4, 5]} title="X" />
                        <XAxis tickFormat={v => `${msToTime(v)}`} tickLabelAngle={-20} />
                    <YAxis />
                    <LineSeries data={data} color="blue" />
                    
                </XYPlot>

            </div>
        </div>
    );
}

export default ChartLine