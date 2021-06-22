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
        var i = 0;
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

    var time = []
    var select = []
    var name = []
    const graphStat = (ride) => {
        for ( var i = 0 ; i < organized.length ; i++ ) {
            if(statList == "Throughput") {
                selected = organized[i].Throughput
            }
            if(statList == "Wait Time") {
                selected = organized[i].WaitTime
            }
            if(statList == "Available Seats"){
                selected = organized[i].AvailableSeats
            }
            if(statList == "Available Down") {
                selected = organized[i].AvailableDown
            }
            if(selected != -1){
                    var x = organized[i].Time
                    var y = selected
                    var z = organized[i].rideName
                    time.push(x)
                    select.push(y)
                    name.push(z)
            }
            var result = {
                x: time,
                y: select,
                z: name
            };
            //console.log(select)
        }
        for (var i = 0 ; i < ride.length ; i++ ) {
            data.push(result)
        }

        
        //data.sort((a, b) => (a.x > b.x) ? 1 : (a.x === b.x) ? 1 : -1)
    
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
            data={data}
            layout={{
                width: 1000, height: 620,
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