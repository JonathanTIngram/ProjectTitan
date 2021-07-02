import React, { useState, useEffect} from 'react';
import styled from 'styled-components';
import { saveLists } from './ChartLine';
import Axios from 'axios';


const Button = styled.button`
  border: none;
  background: none;
  cursor: pointer;
`;

export const SideNav = styled.div`
background: transparent;
border-bottom: 2px solid black;
position: absolute;
right: 0px;
width: 20%;
margin: 37px 0px;
`;
export const FavButton = styled.button`
display: block;
width: 100%;
height: 45px;
font-size: 16px;
border-top: 2px solid black;
border-left: 2px solid black;
text-align: center;
`;

export const CustomExport = styled.button`
width: 100%;
height: 45px;
font-size: 16px;
border-top: 2px solid black;
border-bottom: 1px solid black;
border-left: 2px solid black;
text-align: center;
`;



const FavoriteBar = () => {

  // const editParkInterval = (rides, stats) =>{
  //   Axios.put('http://localhost:3001/editParkInterval', {

  //       rides: rides,
  //       stats: stats
                    
  //       }).then( () => {
  //       console.log("Successfully sent to port 3001");
  //   });
  // };
    const [showModal, setShowModal] = useState(false);
    const [graphData, setGraphData] = useState();

    const openModal = () => {
      setShowModal(prev => !prev);
    };


    const sendFavGraph = (rides, stats) => {
      Axios.post('http://localhost:3001/favGraph', {

        rides: rides,
        stats: stats
                    
        }).then(() =>{
        alert('successful insert');

    })
    }
    return (
        <>
        <SideNav>

           <FavButton onClick={() => {
                setGraphData(saveLists());

                console.log(saveLists())


                sendFavGraph(saveLists().rideList, saveLists().statList);
                
               
      }}>My Favorite1</FavButton>
           <FavButton>My Favorite2 </FavButton>
           <FavButton>My Favorite3</FavButton>
           <FavButton>My Favorite4</FavButton>
           <CustomExport>Custom Export</CustomExport>
        </SideNav>
        </>
    )

}

export default FavoriteBar