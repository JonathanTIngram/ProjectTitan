/* eslint-disable */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Axios from 'axios';

const Border = styled.div`
overflow: hidden;
background: transparent;
margin: 15px 0px;
position: absolute;
left: 0px;
width: 25%;
height: 240px;
border-right: 2px solid black;
`

const InfoContainer = styled.div`
overflow: hidden;
overflow-y: scroll;
background: transparent;
position: absolute;
left: 0px;
width: 100%;
height: 200px;
`;

const Label1 = styled.h1`
margin-top: 2%;
margin-left: 0%;
font-size: 175%;
text-align: center;
font-weight: normal;
`
const styleBlue = {backgroundColor : '#8EAAD1'};
const styleGray = {backgroundColor : '#AFAFAF'};
const IntervalsCountDisplay = () => {

    //state to get all attractions
    const [attractionList, setAttractionList] = useState([]);

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
        <Border>
     
            <Label1> Attraction Intervals </Label1>
                <InfoContainer>
                {window.addEventListener('load', GetAttractions())}
                <table className="table table-bordered table-striped">
                    <thead>
                        <tr style = {styleGray}>
                            <th scope="col">Name</th>
                            <th scope="col"># of Specific Intervals</th>
                        </tr>
                    </thead>

                    {attractionList.map((val, key) => {
                        var ride = val.ride_name;
                        var cardCount = 0;
                        
                        return(
                    <tbody>

                        <tr>
                            <td>{ride}</td>
                            <td>{cardCount}</td>
                        </tr>

                    </tbody>
                        );
                    })}

                    
                </table>
                    </InfoContainer>    
 
        </Border>
    )
}

export default IntervalsCountDisplay
