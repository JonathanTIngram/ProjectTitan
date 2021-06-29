/* eslint-disable */
import React, { useState, useEffect} from 'react';
import Plotly from "plotly.js-basic-dist";
import createPlotlyComponent from "react-plotly.js/factory";
import Axios from 'axios';
import styled from 'styled-components';
var Plot = createPlotlyComponent(Plotly);

function ChartLine() {


    var [rideList, setRideList] = useState([]);
    var [statList, setStatList] = useState([]);
    var [dataList, setDataList] = useState([]);

    var throughputState = [];
    var waitTimeState = [];
    var availableSeatsState = [];
    var availableDownState = [];


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
            console.log(statList)
        }).catch(err => console.log(err));
    }

    const CheckedData = () => {

        Axios.get(`http://localhost:3001/getCollectedData`).then(res => {
            //console.log(res.data)
            setDataList(res.data)
        }).catch(err => console.log(err));
    }



    var intervalCard = [];
    var throughput;

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
    var throughputData = [];
    var waitTimeData = [];
    var availableSeatsData = [];
    var availableDownData = [];
    var name = []

    var tmpRideName;

    const graphStat = (ride) => {
        organized.map((val, key) => {

            if(rideList.includes(val.rideName) && rideList.length <= 1){
                if(statList.includes("Throughput") && val.Throughput >= 0){
                    throughputState.push([val.Throughput,val.Time]);
                    console.log(throughputState)
                }

                if(statList.includes("Wait Time") && val.WaitTime >= 0){
                    waitTimeState.push(val.WaitTime);
                }

                if(statList.includes("Available Seats") && val.AvailableSeats >= 0){
                    availableSeatsState.push(val.AvailableSeats);
                }

                if(statList.includes("Available Down") && val.AvailableDown >= 0){
                    availableDownState.push(val.AvailableDown);
                }
            }

         })

    }
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
                    x: [1,3,4],
                    y: throughputState,
                    name: "Throughput"
                },
                {
                    x: [2,4,8],
                    y: waitTimeState,
                    name: "Wait Time"
                },
                {
                    x: [3, 6, 9],
                    y: availableSeatsState,
                    name: "Available Seats"
                },
                {
                    x: [6, 12, 20],
                    y: availableDownState,
                    name: "Available Down"
                }
            ]}
            layout={{
                width: 750, height: 520,
                xaxis: {
                type: 'time'
                }, 
            }}
            />
            </div>				
        </div>
    );
    
}

export default ChartLine