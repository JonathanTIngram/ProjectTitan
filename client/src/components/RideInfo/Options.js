import styled from 'styled-components';
import DatePicker from 'react-date-picker';
import React, { useState, useEffect } from "react";

const Border = styled.section`
overflow: hidden;
background: transparent;
position: absolute;
top: 290px;
right: 0px;
width: 38%;
height: 170px;
border-bottom: solid black 2px;
`
const GraphHeader = styled.div`
font-size: 15px;
text-align: center;
background: transparent;
position: absolute;
top: 1px;
width: 57.5%;
height: 30px;
border: solid black 1px;
padding-top: 1%;
`
const Graph = styled.div`
background: transparent;
position: absolute;
top: 30px;
height: 140px;
width: 57.5%;
border-right: solid black 2px;
`

const Map = styled.div`
overflow: scroll;
background: transparent;
position: absolute;
right: -4px;
height: 180px;
width: 43%;
`
export const Select = styled.select`
height: 35px;
width: 50%;
`
export const DateBorder = styled.div`
display: flex;
overflow: hidden;
justify-content: center;
`
export const nbsp = '\u00A0';
const Options = () => {
    const [valueStart, onChangeStart] = useState(new Date());
    const [valueEnd, onChangeEnd] = useState(new Date());
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
        <Border>
        <GraphHeader>
            Graph Options
        </GraphHeader>
        <Graph>
        <Select>
            <option >Weeks</option> <option >Months</option> <option >Years</option>
        </Select>

        <Select>
            <option >Line Chart</option> <option >Bar Graph</option>

        </Select>

        <Select>
            <option>Graph 1</option> <option> Graph 2</option> <option >Graph 3</option> <option > Graph 4 </option>
        </Select>

        <Select>
        <option>Graph 2</option> <option> Graph 1</option> <option >Graph 3</option> <option > Graph 4 </option> 
        
        </Select>

        <Select>
        <option>Graph 3</option> <option> Graph 1</option> <option >Graph 2</option> <option > Graph 4 </option> 
        </Select>

        <Select>
        <option>Graph 4</option> <option> Graph 1</option> <option >Graph 2</option> <option > Graph 3 </option> 
        </Select>
        <DateBorder>
        <DatePicker
            disableCalendar={true}
            onChange={onChangeStart}
            value={valueStart}
           />
           {nbsp}through{nbsp}
           <DatePicker
            disableCalendar={true}
            onChange={onChangeEnd}
            value={valueEnd}
           />
         </DateBorder>
        </Graph>

        <Map>

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

        </Map>
        </Border>
    )
}

export default Options