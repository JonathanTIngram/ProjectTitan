import React from 'react'
import styled from 'styled-components';
const Border = styled.div`
overflow-y: auto;
background: transparent;
margin: 15px 0px;
position: absolute;
left: 62%;
width: 21.9%;
height: 210px;
border-bottom: solid black 2px;
border-right: solid black 2px;
`
export const TH = styled.th`
width: 12.5%;
height: 40px;
font-size: 20px;
text-align: center;
border-bottom: 3px solid black;
border-top: 1px solid black;
background-color: transparent;
padding-top: 2%;
font-weight: normal;
`
export const Interval = styled.div`
height: 85px;
border-bottom: 2px solid black;
overflow-y: auto;
`
export const Time = styled.div`
font-weight: bold;
font-size: 18px;
text-align: center; 
`
export const Property = styled.div`
font-size: 15px;
padding-left: 2%;
`
const GraphOption = () => {
    return (
        <Border>
            <TH> Subscribed Intervals</TH>
            <Interval> <Time>Every 30 Minutes</Time>
                       <Property> Wait Time </Property>
                       <Property> Throughput </Property>
             </Interval>

            <Interval> <Time>Every 60 Minutes</Time>
                       <Property> Number of Operating Vehicles </Property>
                       <Property> Number of Employees </Property>
            </Interval>

            <Interval> <Time>Every 90 Minutes</Time> 
                       <Property> Wait Time </Property>
                       <Property> Throughput </Property>
                       <Property> Number of Operating Vehicles </Property>
                       <Property> Number of Employees </Property>
            
            </Interval>
        </Border>
    )
}

export default GraphOption