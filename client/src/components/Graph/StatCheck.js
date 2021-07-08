import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import Axios from 'axios'


const SubmitButton = styled.button`
  height: 40px;
  width: 100%;
  border-radius: 9px;
  font-size: 20px;
`



function StatCheck() {

  const sendStats = (statList) =>{
    Axios.post('http://18.204.6.183:3001/sendStatsBackend', {
      statList: statList
                  }).then(() =>{
                    alert('successful insert');
                }).then( () => {
                  console.log("Successfully sent to port 3001");
                });
  };

  const [statState, setStatState] = useState([]);
  var [statList, setStatList] = useState([]);

  const styleGray = {backgroundColor : '#AFAFAF'};
  const styleLight = {backgroundColor : '#DFDFDF'};
  useEffect(() => {
    let statState = [
      { id: 1, statistic: "Throughput"},
      { id: 2, statistic: "Wait Time"},
      { id: 3, statistic: "Available Seats"},
      { id: 4, statistic: "Available Down"},
    ];

    setStatState(
      statState.map(d => {
        return {
          select: false,
          id: d.id,
          statistic: d.statistic,
  
        };
      })
    );
  }, []);

  return (
    <div>
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
      <SubmitButton onClick={() => {
        localStorage.clear()
        console.log(statList);
        sendStats(statList);
        setTimeout(function(){
          window.location.reload(); 
         }, 2);
      }}>Submit</SubmitButton>
    </div>
  );
}

export default StatCheck;