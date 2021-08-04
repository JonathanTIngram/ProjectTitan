/* eslint-disable */
import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import Axios from 'axios'


const SubmitButton = styled.button`
  height: 40px;
  width: 100%;
  border-radius: 9px;
  font-size: 20px;
`



function GraphCheck() {

  const sendStats = (statList) =>{
    Axios.post('http://18.204.6.173:3001/sendStatsBackend', {
      statList: statList
                  }).then(() =>{
                    alert('successful insert');
                }).then( () => {
                  console.log("Successfully sent to port 3001");
                });
  };

  const sendRideName = (rideList) =>{
    Axios.post('http://18.204.6.173:3001/sendRideNameBackend', {
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
        Axios.get('http://18.204.6.173:3001/getAttraction').then(res => {
        setAttractionList(res.data);
        }).catch(err => console.log(err));
        }, [])
}

  const [statState, setStatState] = useState([]);
  var [statList, setStatList] = useState([]);
  const styleGray = {backgroundColor : '#AFAFAF'};
  var [ride_name, setRide_name] = useState('');
  var [rideList, setRideList] = useState([]);
  const [attractionList, setAttractionList] = useState([]);
  useEffect(() => {
    let statState = [
      { id: 1, statistic: "Throughput", select: statList.includes("Throughput") ? true : false},
      { id: 2, statistic: "Wait Time", select: statList.includes("Wait Time") ? true : false},
      { id: 3, statistic: "Available Seats", select: statList.includes("Available Seats") ? true : false},
      { id: 4, statistic: "Available Down", select: statList.includes("Available Down") ? true : false},
    ];

    setStatState(
      statState.map(d => {
        return {
          select: d.select,
          id: d.id,
          statistic: d.statistic,
  
        };
      })
    );
  }, []);

  return (

    <>
      
    <div>
        {window.addEventListener('load', GetAttractions())}
        <table className="table table-bordered table-striped">
        <thead>
          <tr style={styleGray}>
            <th scope="col">Ride Name</th>
            <th scope="col">Include</th>
          </tr>
        </thead>
        <tbody>
        {/* <tr><td>ridename</td><td>data</td></tr> */}
                {attractionList.map((val, key) => {
                  return (
                    <>  
                        
                        <tr>
                          <td scope="row">{val.ride_name}</td> <td>
                            <input type="checkbox" onClick={() => {
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
                    let checked = event.target.checked;
                    setStatState(
                      statState.map(data => {
                        if (d.id === data.id) {
                          data.select = checked;
                        }
                        return data;
                      })
                    );
                  }}
                  type="checkbox"
                  checked={d.select}

                  onClick={() => {
                    console.log(d.statistic)
                    if (!statList.includes(d.statistic)){
                      statList = statList.push(d.statistic)
                    }
                  }}
                ></input>
                
              </th>
            </tr>
          ))}
        </tbody>
      </table>

    </div>

    <SubmitButton onClick={() => {
        localStorage.clear();
        console.log(statList);
        console.log(rideList)
        sendRideName(rideList);
        sendStats(statList);
        setTimeout(function(){
          window.location.reload(); 
         }, 2);
      }}>Submit</SubmitButton>

    </>
  );
}

export default GraphCheck;