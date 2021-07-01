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

    var throughputTime = [];
    var waitTimeTime = [];
    var availableSeatsTime = [];
    var availableDownTime = [];


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

    var graphData = [];

    const graphStat = (ride) => 
    {

        for(let i = 0; i < ride.length; i++)
        {
            var foundData = false;
            var temp = ride[i];
            var TEMPthroughputData = [];
            var TEMPwaitTimeData = [];
            var TEMPavailableSeatsData = [];
            var TEMPavailableDownData = [];
            var TEMPthroughputTime = [];
            var TEMPwaitTimeTime = [];
            var TEMPavailableSeatsTime = [];
            var TEMPavailableDownTime = [];

                for(let i = 0; i < organized.length; i++) 
                {   
                    if(organized[i].rideName == temp)
                    {

                        if(statList.includes("Throughput") && organized[i].Throughput >= 0){
                            TEMPthroughputTime.push(organized[i].Time)
                            TEMPthroughputData.push(organized[i].Throughput);
                            foundData = true;
                        }

                        if(statList.includes("Wait Time") && organized[i].WaitTime >= 0){
                            TEMPwaitTimeData.push(organized[i].WaitTime);
                            TEMPwaitTimeTime.push(organized[i].Time)
                            foundData = true;
                        }

                        if(statList.includes("Available Seats") && organized[i].AvailableSeats >= 0){
                            TEMPavailableSeatsData.push(organized[i].AvailableSeats);
                            TEMPavailableSeatsTime.push(organized[i].Time)
                            foundData = true;
                        }

                        if(statList.includes("Available Down") && organized[i].AvailableDown >= 0){
                            TEMPavailableDownData.push(organized[i].AvailableDown);
                            TEMPavailableDownTime.push(organized[i].Time)
                            foundData = true;
                        }
                        
                        if(organized[i].rideName != temp)
                        {
                            break;
                        }
                    }  
                }
                if(foundData)
                {
                    graphData.push({temp ,TEMPthroughputTime, TEMPthroughputData, TEMPwaitTimeTime, TEMPwaitTimeData, TEMPavailableSeatsTime, TEMPavailableSeatsData, TEMPavailableDownTime, TEMPavailableDownData})
                }
                
              getGraphData();  
        }
    }
    var tempRide = '';
    var rideTraceArray = [];
    const getGraphData = () => {
        console.log(graphData)
        

        for(let i = 0; i < graphData.length; i++)
        {   
            for(let j = 0; j < statList.length; j++)
            {
                if(statList.includes("Throughput"))
                {
                    tempRide = graphData[i].temp;
                    tempRide = `${tempRide}Trace`;
                    window[tempRide] = {
                        x: graphData[i].TEMPthroughputTime,
                        y: graphData[i].TEMPthroughputData,
                    };
                    rideTraceArray.push(window[tempRide])
                }
                if(statList.includes("Wait Time"))
                {
                    tempRide = graphData[i].temp;
                    tempRide = `${tempRide}Trace`;
                    window[tempRide] = {
                        x: graphData[i].TEMPwaitTimeTime,
                        y: graphData[i].TEMPwaitTimeData,
                    };
                    rideTraceArray.push(window[tempRide])
                }
                if(statList.includes("Available Seats"))
                {
                    tempRide = graphData[i].temp;
                    tempRide = `${tempRide}Trace`;
                    window[tempRide] = {
                        x: graphData[i].TEMPavailableSeatsTime,
                        y: graphData[i].TEMPavailableSeatsData,
                    };
                    rideTraceArray.push(window[tempRide])
                }
                if(statList.includes("Available Down"))
                {
                    tempRide = graphData[i].temp;
                    tempRide = `${tempRide}Trace`;
                    window[tempRide] = {
                        x: graphData[i].TEMPavailableDownTime,
                        y: graphData[i].TEMPavailableDownData,
                    };
                    rideTraceArray.push(window[tempRide])
                }
                
            }

        }
        console.log("rideTraceArray")
        console.log(rideTraceArray)
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
            data={rideTraceArray}
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