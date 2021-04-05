import React from 'react'
import styled from 'styled-components';
import Titan from './Titan.png'
import Clock from './clock.png'
import Bell from './bell.png'
import User from './user.png'

export const Banner = styled.nav`
  background: transparent;
  border-bottom: 2px solid black;
  justify-content: space-between;
  padding: 0;
  margin: -15px 0px;
  height: 100%;
  /* z-index: 10; */
`;

export const BannerInfo = styled.nav`
  font-size: 100%;
  border-right: 2px solid black;
  color: black;
  /* display: flex; */
  flex-flow: row nowrap;
  padding: 5px;
  width: 50%;
  text-align: center;
`;
export const BannerInfo2 = styled.nav`
  font-size: 100%;
  border-right: 2px solid black;
  color: black;
  display: flex;
  flex-flow: row nowrap;
  
  width: 100px;
`;
export const BannerInfo3 = styled.nav`
  font-size: 100%;
  border-right: 2px solid black;
  color: black;
  display: flex;
  /* flex-flow: row nowrap; */
  padding: 5px;
  width: 120px;
`;
export const BannerMenu = styled.div`
  display: flex;
  align-content: center;
  margin-right: -5px;
`;

const Image = styled.img`
height: 30px;
width: 100px;
`
const Icon = styled.img`
margin-left: 10px;
height: 20px;
width: 30px;

`

const Bannerbar = () => {
    return (
        <>
        <Banner>
            <BannerMenu>
                <BannerInfo2>
                <Image src={Titan}></Image>
                </BannerInfo2>
                <BannerInfo>
                  78{'\u00b0'}  - 0 Storms  in Range
                </BannerInfo>
                <BannerInfo>
                  18,982 guests in park
                </BannerInfo>
                <BannerInfo>
                  PARK  STATUS: Operating
                </BannerInfo>
                <BannerInfo>
                  41{'\u00b0'} Operating Effiecency
                </BannerInfo>
                <BannerInfo3>
                <Icon src={Clock}></Icon>
                <Icon src={Bell}></Icon>
                <Icon src={User}></Icon>
                </BannerInfo3>
            </BannerMenu>
        </Banner>
        </>
    )
}

export default Bannerbar