import React, { useState, useEffect } from "react";
import Axios from 'axios'
import styled from 'styled-components';
const SubmitButton = styled.button`
  height: 40px;
  width: 100%;
  font-size: 20px;
  border-radius: 9px;
`

function DayCheck() {
  const [dayState, setDayState] = useState([]);
  const styleGray = {backgroundColor : '#AFAFAF'};
  const styleLight = {backgroundColor : '#DFDFDF'};

  useEffect(() => {
    let dayState = [
      { id: 1, day: "Sunday"},
      { id: 2, day: "Monday"},
      { id: 3, day: "Tuesday"},
      { id: 4, day: "Wednesday"},
      { id: 5, day: "Thursday"},
      { id: 6, day: "Friday"},
      { id: 7, day: "Saturday"},

    ];

    setDayState(
      dayState.map(d => {
        return {
          select: false,
          id: d.id,
          day: d.day,
        };
      })
    );
  }, []);

  return (
    <div>
      <table className="table table-bordered table-striped">
        <thead>
          <tr style={styleGray}>
            <th scope="col">Day</th>
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
                  setDayState(
                    dayState.map(d => {
                      d.select = checked;
                      return d;
                    })
                  );
                }}
              ></input>
              </th>
              </tr>
          {dayState.map((d, i) => (
            <tr key={d.id}>
              <td>{d.day}</td>
              <th scope="row">
             
                <input
                  onChange={event => {
                    let checked = event.target.checked;
                    setDayState(
                      dayState.map(data => {
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

export default DayCheck;