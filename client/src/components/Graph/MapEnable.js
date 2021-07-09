import React, { useState, useEffect } from "react";

function MapEnable() {
  const [mapState, setMapState] = useState([]);
  const styleGray = {backgroundColor : '#AFAFAF'};
  useEffect(() => {
    let mapState = [
      { id: 1, option: "Normalize data for open close"},
      { id: 2, option: "Highlight outliers"},
      { id: 3, option: "Other stuff"},
    ];

    setMapState(
      mapState.map(d => {
        return {
          select: false,
          id: d.id,
          option: d.option,
        };
      })
    );
  }, []);

  return (
    <div>
      <table className="table table-bordered table-striped">
        <thead>
          <tr style={styleGray}>
            <th scope="col">Map Option</th>
            <th scope="col">Enable</th>
          </tr>
        </thead>
        <tbody>
          
          {mapState.map((d, i) => (
            <tr key={d.id}>
              <td>{d.option}</td>
              <th scope="row">
                <input
                  onChange={event => {
                    let checked = event.target.checked;
                    setMapState(
                      mapState.map(data => {
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
export default MapEnable;