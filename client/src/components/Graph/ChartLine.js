import React, { Component, useState, useEffect} from 'react';
import LineChart from 'react-linechart';
import Axios from 'axios';

//
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

    // const getGraphInfo = () => {

    //     Axios.post(`http://localhost:3001/getGraphInfo`).then(res => {
    //         rideList: CheckedRideName()
    //     }).catch(err => console.log(err));
    // }

    
    // window.addEventListener('load', () => {
    //     CheckedRideName();
    //     CheckedStat();
    // })
    let index = 0;
    var rList = [];
    var wList = [];
    var tList = [];
    var asList = [];
    var adList = [];
    var timeList = [];
    var dateList = [];
    var idList = [];

    var checkedRideList = [];
    {rideList.map((val, key) => {
        console.log(val);
        checkedRideList.push(val);
    
    })}

    var checkedStatList = [];
    {statList.map((val, key) => {
        console.log(val);
        checkedStatList.push(val);
    
    })}

    {dataList.map((val, key) => {	
        if (val.ride_name){
            var time = val.ts;
            time = time.substring(11,19);
            var date= val.ts;
            date = date.substring(0,10);
            index = index + 1;
            console.log("Ride name = ", val.ride_name);
            console.log("Time = ", time);
            console.log("Date = ", date);
            rList.push(val.ride_name);
            timeList.push(time);
            dateList.push(date)
            idList.push(val.id);

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
     })}

     const compareRide = () => {
        for(var i = 0; i < index; i++) {
            if(rideList.includes(rList[i])) {
                console.log("Matched ", rList[i]);
                if(statList.includes("Wait Time"))
                {
                    if(wList[i] != -1) {
                        console.log("Wait Time of " + rList[i] + " = " + wList[i]);
                     } 
                }
                if(statList.includes("Throughput"))
                {
                    if(tList[i] != -1) {
                        console.log("Throughput of " + rList[i] + " = " + tList[i]);
                    }
                }
                if(statList.includes("Available Seats"))
                {
                    if(asList[i] != -1) {
                        console.log("Available seats of " + rList[i] + " = " + asList[i]);
                    }
                }   
                if(statList.includes("Available Down"))
                {
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
                { x: 1, y: 64 },
                { x: 2, y: 61 },
                { x: 3, y: 64 },
                { x: 4, y: 62 },
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
            {console.log("IDList = ", idList)}
            {console.log("WaitList = ", wList)}
            {console.log("ThroughputList = ", tList)}
            {console.log("AvailableSeatList = ", asList)}
            {console.log("AvailableDownList = ", adList)}
            {console.log("Checked Ride List = ", checkedRideList)}
            {console.log("Checked Stat List = ", checkedStatList)}
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