import React, { useState, useEffect} from 'react';
import styled from 'styled-components';
import { saveLists } from './ChartLine';
import Axios from 'axios';

var rideListSend;
var statListSend;
export function sendGraphData()
    {
        return {
          rideList: rideListSend,
          statList: statListSend
        }
    }
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

    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
      setShowModal(prev => !prev);
    };


    const sendFavGraph = (rides, stats, id) => {
      Axios.post('http://localhost:3001/favGraph', {

        rides: rides,
        stats: stats,
        id: id
                    
        }).then(() =>{
        alert('successful insert');

    })
    }
    var returnData;
    var getFavGraph = (rides, stats) => {

          Axios.get('http://localhost:3001/getFavGraph').then(res => {
          // setSelectedFav(res.data);
          returnData = res.data;
          //console.log(res.data)
          }).catch(err => console.log(err));

    }

    const prevFavCheck = (id) => {
        var databaseData = returnData;
        console.log(databaseData)
        console.log(databaseData[id].rides)
        console.log(databaseData[id].stats)
        if(databaseData[id].rides == '' || databaseData[id].rides == null)
        {
          sendFavGraph(saveLists().rideList, saveLists().statList, id);
        }
        else{
          alert("Fav button has already been set!")
        }
        // rideListSend;
        // statListSend;
    }
    


    return (
        <>

        {
        
        useEffect(() => {
          window.addEventListener('load', getFavGraph())
          }, [])
        }

        <SideNav>

                <FavButton onClick={() => {
                      let id = 1;
                      prevFavCheck(id);
                }}>My Favorite 1</FavButton>

                <FavButton onClick={() => {
                      let id = 2;
                      prevFavCheck(id);
                }}>My Favorite 2</FavButton>

                <FavButton onClick={() => {
                      let id = 3;
                      prevFavCheck(id);
                }}>My Favorite 3</FavButton>

               <FavButton onClick={() => {
                      let id = 4;
                      prevFavCheck(id);
                }}>My Favorite 4</FavButton>

           <CustomExport>Custom Export</CustomExport>
        </SideNav>
        </>
    )

}

export default FavoriteBar