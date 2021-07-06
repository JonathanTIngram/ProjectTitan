/* eslint-disable */
import React, { useState, useEffect} from 'react';
import Plotly from "plotly.js-basic-dist";
import createPlotlyComponent from "react-plotly.js/factory";
import Axios from 'axios';
import styled from 'styled-components';
import { sendGraphData } from './FavoriteBar';
var Plot = createPlotlyComponent(Plotly);
var rideListSend;
var statListSend;

export function saveLists()
    {
        return {
        rideList: rideListSend,
        statList: statListSend
        }
    }

function ChartLine() {


    var [rideList, setRideList] = useState([]);
    var [statList, setStatList] = useState([]);
    var [dataList, setDataList] = useState([]);

    

    const CheckedRideName = () => {

            Axios.get(`http://localhost:3001/sendRideNameGraph`).then(res => {
                //console.log(res.data)
                setRideList(res.data)
                rideListSend = res.data;
            }).catch(err => console.log(err));
    }


    const CheckedStat = () => {

        Axios.get(`http://localhost:3001/sendStatsGraph`).then(res => {
            //console.log(res.data)
            setStatList(res.data)
            statListSend = res.data;
        }).catch(err => console.log(err));
    }

    const CheckedData = () => {

        Axios.get(`http://localhost:3001/getCollectedData`).then(res => {
            //console.log(res.data)
            setDataList(res.data)
        }).catch(err => console.log(err));
    }
    var returnData;
    var [selectedFav, setSelectedFav] = useState();
    var getFavGraph = () => {

        Axios.get('http://localhost:3001/getFavGraph').then(res => {
        setSelectedFav(res.data);
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

                for(let i = 0; i < intervalCard.length; i++) 
                {   
                    if(intervalCard[i].rideName == temp)
                    {

                        if(statList.includes("Throughput") && intervalCard[i].Throughput >= 0){
                            TEMPthroughputTime.push(intervalCard[i].Time)
                            TEMPthroughputData.push(intervalCard[i].Throughput);
                            foundData = true;
                        }

                        if(statList.includes("Wait Time") && intervalCard[i].WaitTime >= 0){
                            TEMPwaitTimeData.push(intervalCard[i].WaitTime);
                            TEMPwaitTimeTime.push(intervalCard[i].Time)
                            foundData = true;
                        }

                        if(statList.includes("Available Seats") && intervalCard[i].AvailableSeats >= 0){
                            TEMPavailableSeatsData.push(intervalCard[i].AvailableSeats);
                            TEMPavailableSeatsTime.push(intervalCard[i].Time)
                            foundData = true;
                        }

                        if(statList.includes("Available Down") && intervalCard[i].AvailableDown >= 0){
                            TEMPavailableDownData.push(intervalCard[i].AvailableDown);
                            TEMPavailableDownTime.push(intervalCard[i].Time)
                            foundData = true;
                        }
                        
                        if(intervalCard[i].rideName != temp)
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
    var rideTraceArray = [];
    var tempRide = '';
    const getGraphData = () => {
        //console.log(graphData)
        for(let i = 0; i < graphData.length; i++)
        {   
            if(statList.includes("Throughput"))
            {
                tempRide = graphData[i].temp;
                tempRide = `${tempRide}Trace`;
                window[tempRide] = {
                    x: graphData[i].TEMPthroughputTime,
                    y: graphData[i].TEMPthroughputData,
                    name: graphData[i].temp + " Throughput"
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
                    name: graphData[i].temp + " Wait Time"
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
                    name: graphData[i].temp +  " Available Seats"
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
                    name: graphData[i].temp + " Available Down"
                };
                rideTraceArray.push(window[tempRide])
            } 
        }
        const unique = [...new Map(rideTraceArray.map(o => [o.name, o])).values()]
        rideTraceArray = unique
    }

    var title = ''
    for (let i = 0; i < rideList.length; i++) {
        if(rideList.length == 1) {
            title = rideList[0] + ' ' + title + '(' + statList + ')'
            if(statList == ''){
                title = rideList[0]
            }
        }
        else if(rideList.length == 2) {
            title = rideList[0] + ' and ' + rideList[1]
        }
        else if(rideList.length > 2) {
            var tmp = [...new Set(rideList)]
            var last = tmp.pop();
            var result = tmp.join(', ') + ' and ' + last;
            title = result
        }
    }



    return (

        <div>
            {useEffect(() => {
            {window.addEventListener('load', CheckedData())}
            {window.addEventListener('load', CheckedRideName())}
            {window.addEventListener('load', CheckedStat())}
            {window.addEventListener('load', getFavGraph())}
        }, [])}
            {graphStat(rideList)}
            {console.log(selectedFav)}
            {/* {console.log('trace', rideTraceArray), console.log('data', graphData)} */}
            <div id='myDiv'>
            <Plot 
            data={rideTraceArray}
            layout={{
                width: 950, height: 570,
                xaxis: {
                title: 'Time',
                type: 'time'
                }, 
                yaxis: {
                    title: 'Amount',
                }, 
                title: title
            }}
            />
            </div>				
        </div>
    );
    
}

export default ChartLine