import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import DatePicker from 'react-date-picker';

export const Menu = styled.div`
  display: flex;
  justify-content: flex-end;
  align-content: center;
  padding-top: 9px;
  width: 80%;
  padding-left: 20px;
`;
const Button = styled.div`
  border: none;
  background: none;
  cursor: pointer;
  margin-right: 15px;
`;

const UnitTab = styled.nav`
  align-content: center;
  padding-left: 7%;;
`;

const DateTab = styled.div`
    align-content: center;
    margin-top: -4px;

`;

const Dropdown = styled.span`
  display: flex;
  justify-content: flex-end;
  padding-right: 10px;
  width: 100%;
`;

export const nbsp = '\u00A0';
function GraphUnits() {
    const [typeState, setTypeState] = useState([]);
    const [unitState, setUnitState] = useState("");
    const [valueStart, onChangeStart] = useState(new Date());
    const [valueEnd, onChangeEnd] = useState(new Date());
    useEffect(() => {
        let typeState = [
          { id: 1, type: "Rides"},
          { id: 2, type: "Section"},
          { id: 3, type: "Park"},
        ];
    
        setTypeState(
            typeState.map(d => {
              return {
                select: false,
                id: d.id,
                type: d.type,
              };
            })
          );
        }, []);
        return (
         <Menu>
          {typeState.map((d, i) => (
            <Button>
            <tr key={d.id}>
             <th>
                <input 
                  onChange={event => {
                    let checked = event.target.checked;
                    setTypeState(
                      typeState.map(data => {
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
              <td>{d.type}</td>
            </tr>
            </Button>
            
          ))}
          <Dropdown>
          <UnitTab>
          Unit: {nbsp}
          <select value={unitState}  onChange={(e) => {
            const selectedUnit = e.target.value;
            setUnitState(selectedUnit);
          }}>
                  <option value="Hours">Hours</option>
                  <option value="Days">Days</option>
                  <option value="Weeks">Weeks</option>
                  <option value="Months">Months</option>
                  <option value="Years">Years</option>
          </select> {nbsp}
          </UnitTab>
          <DateTab>
          Start: {nbsp}
          <DatePicker
            onChange={onChangeStart}
            value={valueStart}
           /> {nbsp}
          </DateTab>
          <DateTab>
          End: {nbsp}
          <DatePicker
            onChange={onChangeEnd}
            value={valueEnd}
           /> {nbsp}
          </DateTab>
          <div>
          Graph Style: {nbsp}
          <select>
                  <option value="Chart1">Line Chart</option>
          </select> 
          </div>
          </Dropdown>
          </Menu>
          );
    }

export default GraphUnits;
