import React, { useState, useEffect } from "react";
import styled from 'styled-components';


const SubmitButton = styled.button`
  height: 40px;
  width: 100%;
  font-size: 20px;
`

function StatCheck() {
  const [statState, setStatState] = useState([]);
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
          <tr>
           <td>Check All</td>
           <th scope="row">
              <input
                type="checkbox"
                onChange={e => {
                  let checked = e.target.checked;
                  setStatState(
                    statState.map(d => {
                      d.select = checked;
                      return d;
                    })
                  );
                }}
              ></input>
              </th>
              </tr>
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
                ></input>
                
              </th>
            </tr>
          ))}
        </tbody>
      </table>
      <SubmitButton>Submit</SubmitButton>
    </div>
  );
}

export default StatCheck;