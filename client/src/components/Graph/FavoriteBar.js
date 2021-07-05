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

    var [selectedFav, setSelectedFav] = useState();

    var [favStored, setFavStored] = useState(false);

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

    var getFavGraph = (rides, stats) => {

          Axios.get('http://localhost:3001/getFavGraph').then(res => {
          setSelectedFav(res.data);
          }).catch(err => console.log(err));

    }


    const updateFavGraph = (rides, stats, id) => {
      Axios.post('http://localhost:3001/updateFavGraph', {
        rides: rides,
        stats: stats,
        id: id
        }).then(() =>{
        alert('successful update of ' + rides + ' (' + stats + ')' + ' to ' + id);

      })
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

                setGraphData(saveLists());

                // console.log(saveLists())


                console.log(`Rides from backend : ${selectedFav.rides}`);
                console.log(`Stats from backend : ${selectedFav.stats}`);
                console.log(`Id from backend : ${selectedFav.id}`);


                let id = 1;
                console.log(favStored);
                if(favStored == false){
                  sendFavGraph(saveLists().rideList, saveLists().statList, id);
                  setFavStored(true);
                }
                else {
                  //update
                  updateFavGraph(saveLists().rideList, saveLists().statList, id);
                }


                
               
      }}>My Favorite1</FavButton>
           <FavButton id='2'>My Favorite2 </FavButton>
           <FavButton id='3'>My Favorite3</FavButton>
           <FavButton id='4'>My Favorite4</FavButton>
           <CustomExport>Custom Export</CustomExport>
        </SideNav>
        </>
    )

}

export default FavoriteBar