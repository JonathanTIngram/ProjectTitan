import React, { useState, useEffect } from "react";
import Axios from 'axios'

function RideCheck() {
  
  const styleGray = {backgroundColor : '#AFAFAF'};
  const styleLight = {backgroundColor : '#DFDFDF'};
  const [ride_name, setRide_name] = useState('');
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
  const [rideState, setRideState] = useState([]);
    
  


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
                          <td scope="row">{val.ride_name}</td> <input type="checkbox" onClick={() => {
                            console.log(val.ride_name)
                          }}></input>
                        </tr>
                    </>
                  );
                  })}
        </tbody>
      </table>
    </div>
  );
}
export default RideCheck;