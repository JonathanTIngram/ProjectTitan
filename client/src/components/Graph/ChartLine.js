import React, { Component, useState, useEffect} from 'react';
import LineChart from 'react-linechart';
import Axios from 'axios';

//
function ChartLine() {


    var [rideList, setRideList] = useState([]);
    var [statList, setStatList] = useState([]);
    var [dataList, setDataList] = useState([]);

    const CheckedRideName = () => {

            Axios.get(`http://18.204.6.173:3001/sendRideNameGraph`).then(res => {
                //console.log(res.data)
                setRideList(res.data)
            }).catch(err => console.log(err));
    }


    const CheckedStat = () => {

        Axios.get(`http://18.204.6.173:3001/sendStatsGraph`).then(res => {
            //console.log(res.data)
            setStatList(res.data)
        }).catch(err => console.log(err));
    }

    const CheckedData = () => {

        Axios.get(`http://18.204.6.173:3001/getCollectedData`).then(res => {
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
            var time = val.ts;
            time = time.substring(11,19)
            var date= val.ts;
            date = date.substring(0,10)
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
     
    const data = [
        {						
            color: "steelblue", 
            points: [
  
            ]
        }
    ];  

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