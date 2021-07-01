/* eslint-disable */
import '../../../node_modules/react-vis/dist/style.css';
import React, { useState, useEffect} from 'react';
import Plotly from "plotly.js-basic-dist";
import createPlotlyComponent from "react-plotly.js/factory";
import Axios from 'axios';
import styled from 'styled-components';

function ChartLine() {

    var Plot = createPlotlyComponent(Plotly);

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


    var intervalCard = [];
    {dataList.map((val, key) => {	
            var time = new Date(val.ts)
            var date = new Date(val.ts).getMonth() + "/" + new Date(val.ts).getDate() + "/" + new Date(val.ts).getFullYear();
            intervalCard.push({rideName: val.ride_name, WaitTime: val.WaitTime,
            Throughput: val.Throughput, AvailableSeats: val.AvailableSeats, 
            AvailableDown: val.AvailableDown, Time: time, Date: date})
        
     })}
  
    var data = []
    var selected = '';
    var organized = []
    //prints intervalCard in order
    const printOrdered = () => {
        var temp = [];
        var name = ''
        intervalCard.forEach(i => {
            name = i.rideName;
            if(!temp.includes(name)){
                temp.push(name)
            }
        });
            {intervalCard.map((val, key) => {	
            var j = 0
            if(temp[j] == val.rideName){
                j++;
                organized.push(val)
            }
            else{
                organized.unshift(val)
            }
        })}
        //console.log(organized)
        //console.log(temp)
    }
    var time = [];
    var select = [];
    var throughputState = [];
    var throughputTime = [];

    var waitTimeState = [];
    var waitTimeTime = [];

    var availableSeatsState = [];
    var availableSeatsTime = [];


    var availableDownState = [];
    var availableDownTime = [];

    var name = []
    var i = 0
    const graphStat = (ride) => {
        organized.map((val, key) => {

            if(ride.includes(val.rideName) && ride.length <= 1){
                if(statList.includes("Throughput") && val.Throughput >= 0){
                    throughputState.push(val.Throughput)
                    throughputTime.push(val.Time)                }

                if(statList.includes("Wait Time") && val.WaitTime >= 0){
                    waitTimeState.push(val.WaitTime);
                    waitTimeTime.push(val.Time)
                }

                if(statList.includes("Available Seats") && val.AvailableSeats >= 0){
                    availableSeatsState.push(val.AvailableSeats);
                    availableSeatsTime.push(val.Time)
                }

                if(statList.includes("Available Down") && val.AvailableDown >= 0){
                    availableDownState.push(val.AvailableDown);
                    availableDownTime.push(val.Time)
                }
            }
         })
    }
    //console.log(intervalCard)
    
    return (

        <div>
            {useEffect(() => {
            {window.addEventListener('load', CheckedData())}
            {window.addEventListener('load', CheckedRideName())}
            {window.addEventListener('load', CheckedStat())}
        }, [])}
            {printOrdered()}
            {graphStat(rideList)}	
            <div id='myDiv'>
                
            <Plot 
                data={[
                {
                    x: throughputTime,
                    y: throughputState,
                    name: "Throughput"
                },
                {
                    x: waitTimeTime,
                    y: waitTimeState,
                    name: "Wait Time"
                },
                {
                    x: availableSeatsTime,
                    y: availableSeatsState,
                    name: "Available Seats"
                },
                {
                    x: availableDownTime,
                    y: availableDownState,
                    name: "Available Down"
                }
            ]}
            layout={{
                width: 1000, height: 620,
                xaxis: {
                type: 'time'
                }, 
                title: rideList[0]
            }}
            />
            </div>		
        </div>
    );
    
}

export default ChartLine