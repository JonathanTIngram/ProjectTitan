import React, { useState, useEffect } from "react";

function RideCheck() {
  const [rideState, setRideState] = useState([]);
  const styleGray = {backgroundColor : '#AFAFAF'};
  const styleLight = {backgroundColor : '#DFDFDF'};
  useEffect(() => {
    let rideState = [
      { id: 1, ridename: "The Joker"},
      { id: 2, ridename: "Superman"},
    ];

    setRideState(
      rideState.map(d => {
        return {
          select: false,
          id: d.id,
          ridename: d.ridename,
        };
      })
    );
  }, []);

  return (
    <div>
      <table className="table table-bordered table-striped">
        <thead>
          <tr style={styleGray}>
            <th scope="col">Ride Name</th>
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
                  setRideState(
                    rideState.map(d => {
                      d.select = checked;
                      return d;
                    })
                  );
                }}
              ></input>
              </th>
            </tr>
          {rideState.map((d, i) => (
            <tr key={d.id}>
              <td>{d.ridename}</td>
              <th scope="row">
             
                <input
                  onChange={event => {
                    let checked = event.target.checked;
                    setRideState(
                      rideState.map(data => {
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
    </div>
  );
}
export default RideCheck;