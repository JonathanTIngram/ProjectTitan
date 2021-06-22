/* eslint-disable */
import React, { Component, useState, useEffect} from 'react';
import '../../../node_modules/react-vis/dist/style.css';
import {XYPlot, Borders, VerticalGridLines, HorizontalGridLines, XAxis, YAxis, LineMarkSeries} from 'react-vis';
import {
  FlexibleXYPlot,
  FlexibleWidthXYPlot,
  FlexibleHeightXYPlot
} from 'react-vis';
import Plot from 'react-plotly.js';
import Plotly from 'plotly.js';
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
                console.log(rideList)
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
        var i = 0;
        if (val.ride_name == rideList){
            var time = new Date(val.ts)
            var date = new Date(val.ts).getMonth() + "/" + new Date(val.ts).getDate() + "/" + new Date(val.ts).getFullYear();
            intervalCard.push({rideName: val.ride_name, WaitTime: val.WaitTime,
            Throughput: val.Throughput, AvailableSeats: val.AvailableSeats, 
            AvailableDown: val.AvailableDown, Time: time, Date: date})
        }
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
        console.log(organized)
        console.log(temp)
    }
    var time = []
    var select = []
    var lines = {'Throughput': {'y': []},
                 'WaitTime': {'y': []},
                 'AvailableSeats': {'y': []},
                 'AvailableDown': {'y': []}}
    const graphStat = () => {

        for ( var i = 0 ; i < intervalCard.length ; i++ ) {


            if(statList == "Throughput") {
                // selected = intervalCard[i].Throughput
                lines.Throughput.y.push(intervalCard[i].Throughput);
            }
            if(statList == "Wait Time") {
                lines.WaitTime.y.push(intervalCard[i].WaitTime);
            }
            if(statList == "Available Seats"){
                lines.AvailableSeats.y.push(intervalCard[i].AvailableSeats);
            }
            if(statList == "Available Down") {
                lines.AvailableDown.y.push(intervalCard[i].AvailableDown);
            }
            if(selected != -1){
                var x = intervalCard[i].Time
                var y = lines
                console.log(`the fucking interval card ride name: ${intervalCard.ride_name}`)
                time.push(x)
                select.push(y)
            }
        }

        var result = {
            x: time,
            y: select,
        };
        console.log(select)
        data.push(result);
        data.sort((a, b) => (a.x > b.x) ? 1 : (a.x === b.x) ? 1 : -1)
    
    }

    var data2 = {
        x: [10, 20, 30],
        y: [1, 3, 6]

    }
    return (

        <div>
            {useEffect(() => {
            {window.addEventListener('load', CheckedData())}
            {window.addEventListener('load', CheckedRideName())}
            {window.addEventListener('load', CheckedStat())}
        }, [])}
            {printOrdered()}
            {graphStat()}

            <div id='myDiv'>
                
            <Plot 

            data={[
                {data}
            ]}
            layout={{
                xaxis: {
                type: 'time'
                }, 
            }}
            > 
            </Plot>

            </div>				
        </div>
    );
    
}

export default ChartLine