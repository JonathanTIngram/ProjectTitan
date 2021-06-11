/* eslint-disable */
import React, { Component, useState, useEffect} from 'react';
import '../../../node_modules/react-vis/dist/style.css';
import {XYPlot, LineSeries, VerticalGridLines, HorizontalGridLines, XAxis, YAxis, LineMarkSeries} from 'react-vis';
import {
  FlexibleXYPlot,
  FlexibleWidthXYPlot,
  FlexibleHeightXYPlot
} from 'react-vis';
import Axios from 'axios';
import {timeFormatDefaultLocale} from 'd3-time-format';
timeFormatDefaultLocale({
    dateTime    : '%a %b %e %X %Y',
    date        : '%d/%m/%Y',
    time        : '%H : %M : %S',
    periods     : ['AM', 'PM'],
    days        : ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
    shortDays   : ['Di', 'Lu', 'Ma', 'Me', 'Je', 'Ve', 'Sa'],
    months      : ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Decembre'],
    shortMonths : ['Jan', 'Fev', 'Mar', 'Avr', 'Mai', 'Jui', 'Juil', 'Aou', 'Sep', 'Oct', 'Nov', 'Dec']
});
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
            var time = new Date(val.ts).getTime();
            var date = new Date(val.ts).toString().substring(0,15);
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

   for (let i = 0; i < tList.length; i++) {
       data.push({
           x: timeList[i],
           y: tList[i]
       })
   }

   function msToTime(duration) {
    var milliseconds = Math.floor((duration % 1000) / 100),
      seconds = Math.floor((duration / 1000) % 60),
      minutes = Math.floor((duration / (1000 * 60)) % 60),
      hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
  
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
  
    return hours + ":" + minutes
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


            {compareRide()}
            <div className="App">
             <FlexibleXYPlot height={500} width={900}>
                <VerticalGridLines />
                <HorizontalGridLines />
    
                <XAxis title="Time of interval card"
                tickTotal={data.length} 
                tickLabelAngle={-25} 
            

                tickFormat={d => {
                 return msToTime(d).toString()
                }}
                />
                <YAxis title="throughput"/>

                 <LineMarkSeries data={data} color="lightblue"
                       markStyle={{stroke: 'black'}}
                       style={{ strokeWidth: '3px' }}
                       strokeStyle="solid"/>
            </FlexibleXYPlot>
            </div>				
        </div>
    );
}

export default ChartLine