import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import Axios from 'axios'

const SubmitButton = styled.button`
  height: 40px;
  width: 100%;
  border-radius: 9px;
  font-size: 20px;
`
// var lastRideList = ChartLine.saveLists().rideList;
// var lastStatList = ChartLine.saveLists().statList;
var checkStats = JSON.parse(localStorage.getItem('data') || '[]');
var base = [null, false, false, false, false];
var checked;

function GraphCheck() {

  const sendStats = (statList) =>{
    Axios.post('http://localhost:3001/sendStatsBackend', {
      statList: statList
                  }).then(() =>{
                    alert('successful insert');
                }).then( () => {
                  console.log("Successfully sent to port 3001");
                });
  };

  const sendRideName = (rideList) =>{
    Axios.post('http://localhost:3001/sendRideNameBackend', {
      rideList: rideList
                  }).then(() =>{
                    alert('successful insert');
                }).then( () => {
                  console.log("Successfully sent to port 3001");
                });
  };

  const GetAttractions = () => {
    //console.log(res.data)
    useEffect(() => {
        Axios.get('http://localhost:3001/getAttraction').then(res => {
        setAttractionList(res.data);
        }).catch(err => console.log(err));
        }, [])
}


  
  const styleGray = {backgroundColor : '#AFAFAF'};
  var [ride_name, setRide_name] = useState('');
  var [rideList, setRideList] = useState([]);
  var [statList, setStatList] = useState([]);
  const [attractionList, setAttractionList] = useState([]);


  var [checkS, setCheckS] = useState();



  var statState = [
    { id: 1, statistic: "Throughput", select: checkStats[1]},
    { id: 2, statistic: "Wait Time", select: checkStats[2]},
    { id: 3, statistic: "Available Seats", select: checkStats[3]},
    { id: 4, statistic: "Available Down", select: checkStats[4]},
  ];

  function setStatState(stat)
  {
    statState.map(d => {
      if(statState.statistic == stat)
      {
        if(checkStats[d.id] = true)
        {
          checkStats[d.id] = false;
        }
        else{
          checkStats[d.id] = true;
        }
        
      }
    })
  }

  return (
      
    <div>
        {window.addEventListener('load', GetAttractions())}
        {/* {window.addEventListener('load', console.log(base))} */}

        <table className="table table-bordered table-striped">
        <thead>
          <tr style={styleGray}>
            <th scope="col">Ride Name</th>
            <th scope="col">Include</th>
          </tr>
        </thead>
        <tbody>

                {attractionList.map((val, key) => {
                  return (
                    <>  
                        
                        <tr>
                          <td scope="row">{val.ride_name}</td> <td><input type="checkbox" onClick={() => {
                            console.log(val.ride_name)
                            setRide_name(val.ride_name)
                            if (!rideList.includes(val.ride_name)){
                              rideList = rideList.push(val.ride_name)
                            }
                          }}></input> </td>
                        </tr>
                    </>
                  );
                  })}
        </tbody>
      </table>
      <table className="table table-bordered table-striped">
        <thead>
          <tr style={styleGray}>
            <th scope="col">Statistic</th>
            <th scope="col">Include</th>
          </tr>
        </thead>
        <tbody>
          {statState.map((d, i) => (
            <tr key={d.id}>
              <td>{d.statistic}</td>
              <th scope="row">
             
                <input
                  
                  onChange={event => {
                    checked = event.target.checked;
                    checkStats[d.id] = checked
                      if(statList.includes(d.statistic))
                      {

                        statList = statList.filter(e => e !== d.statistic);
                        statList.pop(d.statistic)
                        checkStats[d.id] = false;
                        setCheckS(false)
                        console.log('removing from list', d.statistic)
                        console.log(checkStats[d.id])
                        
                      }
                      else{

                        statList.push(d.statistic)
                        checkStats[d.id] = true;
                        setCheckS(true);
                        console.log('adding to list', d.statistic)
                        console.log(checkStats[d.id])
                        
                      }
                  }}
                  type="checkbox"
                  checked={checkStats[d.id]}
                ></input>
                
              </th>
            </tr>
          ))}
        </tbody>
      </table>
      <SubmitButton onClick={() => {
        localStorage.clear();
        localStorage.setItem('data', JSON.stringify(checkStats))
        
        sendRideName(rideList);
        sendStats(statList);
        console.log('data')
        console.log(checkStats)

        setTimeout(function(){
          window.location.reload(); 
         }, 2);
      }}>Submit</SubmitButton>
    </div>
  );
}

export default GraphCheck;
