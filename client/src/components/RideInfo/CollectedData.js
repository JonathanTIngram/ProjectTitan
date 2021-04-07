import styled from 'styled-components';

const Border = styled.div`
overflow: hidden;
background: transparent;
margin: 15px 0px;
position: absolute;
left: 22%;
width: 40%;
height: 600px;
border-right: 2px solid black;
border-bottom: 2px solid black;
`

const InfoContainerLeft = styled.div`
overflow: hidden;
overflow-y: scroll;
background: transparent;
margin: 0px 0px;
position: absolute;
left: 0px;
width: 50%;
height: 600px;
border-right: 2px solid black;
`;

const InfoContainerRight = styled.div`
overflow: hidden;
overflow-y: scroll;
background: transparent;
margin: 0px 0px;
position: absolute;
right: 0px;
width: 50%;
height: 600px;
`;

export const TH = styled.th`
width: 12.5%;
height: 20px;
border-bottom: 1px solid black;
border-left: 1px solid black;
border-right: 1px solid black;
background-color: darkgray;
`

export const TR = styled.tr`
width: 100%;
height: 40px;
border-bottom: 1px solid black;
`

export const TD = styled.td`
background-color: lightgrey;
width: 12.5%;
height: 20px;
border-bottom: 1px solid black;
border-left: 1px solid black;
border-right: 1px solid black;
text-align: center;
`

export const Table = styled.table`
width: 100%;
height: 100%;
overflow-y: scroll;
overflow: hidden;
`

export const Label1 = styled.div`
text-align: center;
font-size: 150%;
align-content: center;
border-bottom: 2px solid black;
`

export const Label2 = styled.div`
text-align: center;
font-size: 125%;
align-content: center;
border-bottom: 2px solid black;
width: 50%;
left: 0px;
border-right: 2px solid black;
display: inline-block;
`

export const Label3 = styled.div`
text-align: center;
font-size: 125%;
align-content: center;
border-bottom: 2px solid black;
width: 50%;
left: 50%;
display: inline-block;
`

const styleGray = {backgroundColor : '#AFAFAF'};

const CollectedData = () => {
    return (
        <Border>
            
            <Label1> Collected Data </Label1>
            <Label2>Today</Label2>
            <Label3><select>
                <option>Lifetime</option>
                <option>1 hour</option>
                <option>4 hours</option>
                <option>1 day</option>
                <option>1 week</option>
                <option>1 month</option>
                <option>3 months</option>
                <option>6 months</option>
                <option>12 months</option>
                </select>
            </Label3>
            
            <InfoContainerLeft>
                <table className="table table-bordered table-striped">
                    <thead>
                        <tr style = {styleGray}>
                            <th scope="col">Property</th>
                            <th scope="col">Value</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>Opening</td>   <td>        </td>
                        </tr>
                        <tr>
                            <td>Closing</td>   <td>        </td>
                        </tr>
                        <tr>
                            <td>Low Wait</td>   <td>        </td>
                        </tr>
                        <tr>
                            <td>High Wait</td>   <td>        </td>
                        </tr>
                        <tr>
                            <td>Low Throughput</td>   <td>        </td>
                        </tr>
                        <tr>
                            <td>High Throughput</td>   <td>        </td>
                        </tr>
                        <tr>
                            <td>Avg Throughput</td>   <td>        </td>
                        </tr>
                        <tr>
                            <td>Downtime Incidents</td>   <td>        </td>
                        </tr>
                        <tr>
                            <td>Total Downtime</td>   <td>        </td>
                        </tr>
                        <tr>
                            <td>Low Vehichles</td>   <td>        </td>
                        </tr>
                        <tr>
                            <td>High Vehicles</td>   <td>        </td>
                        </tr>

                    <tr><td></td><td></td></tr>     <tr><td></td><td></td></tr>     <tr><td></td><td></td></tr>     <tr><td></td><td></td></tr>     <tr><td></td><td></td></tr>     <tr><td></td><td></td></tr>     <tr><td></td><td></td></tr>     <tr><td></td><td></td></tr>     <tr><td></td><td></td></tr>     
                    </tbody>
                </table>
            </InfoContainerLeft> 

            <InfoContainerRight>
            <table className="table table-bordered table-striped">
                    <thead>
                        <tr style = {styleGray}>
                            <th scope="col">Property</th>
                            <th scope="col">Value</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>Opening</td>   <td>        </td>
                        </tr>
                        <tr>
                            <td>Closing</td>   <td>        </td>
                        </tr>
                        <tr>
                            <td>Low Wait</td>   <td>        </td>
                        </tr>
                        <tr>
                            <td>High Wait</td>   <td>        </td>
                        </tr>
                        <tr>
                            <td>Low Throughput</td>   <td>        </td>
                        </tr>
                        <tr>
                            <td>High Throughput</td>   <td>        </td>
                        </tr>
                        <tr>
                            <td>Avg Throughput</td>   <td>        </td>
                        </tr>
                        <tr>
                            <td>Downtime Incidents</td>   <td>        </td>
                        </tr>
                        <tr>
                            <td>Total Downtime</td>   <td>        </td>
                        </tr>
                        <tr>
                            <td>Low Vehichles</td>   <td>        </td>
                        </tr>
                        <tr>
                            <td>High Vehicles</td>   <td>        </td>
                        </tr>

                    <tr><td></td><td></td></tr>     <tr><td></td><td></td></tr>     <tr><td></td><td></td></tr>     <tr><td></td><td></td></tr>     <tr><td></td><td></td></tr>     <tr><td></td><td></td></tr>     <tr><td></td><td></td></tr>     <tr><td></td><td></td></tr>     <tr><td></td><td></td></tr>     
                    </tbody>
                </table>
            </InfoContainerRight>     
 
        </Border>
    )
}

export default CollectedData