/* eslint-disable */
import React, { useState, useEffect } from "react";
import Axios from 'axios'
import { MdSignalCellularConnectedNoInternet4Bar } from "react-icons/md";
import styled from 'styled-components';

const SubmitButton = styled.button`
  height: 40px;
  width: 100%;
  font-size: 20px;
  border-radius: 9px;
`

const sendRideName = (rideList) =>{
  Axios.post('http://localhost:3001/sendRideNameBackend', {
    rideList: rideList
                }).then(() =>{
                  alert('successful insert');
              }).then( () => {
                console.log("Successfully sent to port 3001");
              });
};

function RideCheck() {
  
  const styleGray = {backgroundColor : '#AFAFAF'};
  const styleLight = {backgroundColor : '#DFDFDF'};
  var [ride_name, setRide_name] = useState('');
  var [rideList, setRideList] = useState([]);
  const [attractionList, setAttractionList] = useState([]);
  //recieve data from backend to display



  //recieve data from backend to display
const GetAttractions = () => {
      //console.log(res.data)
      useEffect(() => {
          Axios.get('http://localhost:3001/getAttraction').then(res => {
          setAttractionList(res.data);
          }).catch(err => console.log(err));
          }, [])
}

  
  return (
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
      <SubmitButton onClick={() => {
                console.log(rideList)
                sendRideName(rideList);
                setTimeout(function(){
                  window.location.reload(); 
                 }, 1);
      }
      }>Submit</SubmitButton>
    </div>
  );
}
export default RideCheck;