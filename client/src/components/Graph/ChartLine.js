/* eslint-disable */
import React, { Component, useState, useEffect} from 'react';
import '../../../node_modules/react-vis/dist/style.css';
import Plot from 'react-plotly.js';
import Axios from 'axios';
import styled from 'styled-components';

function ChartLine() {


    var [rideList, setRideList] = useState([]);
    var [statList, setStatList] = useState([]);
    var [dataList, setDataList] = useState([]);

    var state = [];
    var state2 = [];


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
    const graphStat = (ride) => {
        organized.map((val, key) => {
            console.log(val.Throughput)
            state.push(val.Throughput);
            state2.push(val.WaitTime);
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
                    y: state
                },
                {
                    x: [2,4,8],
                    y: state2
                }
            ]}
            layout={{
                width: 800, height: 520,
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