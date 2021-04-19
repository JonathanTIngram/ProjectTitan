import React from 'react';
import fire from '../fire';
import { Redirect } from "react-router";
import styled from 'styled-components';

export const Button = styled.button`
width: 50%;
height: 10%;
font-size: 100px;
`;

class Home extends React.Component {

  logout() {
    fire.auth().signOut().then(function() {
        console.log('Signed Out');
      }, function(error) {
        console.error('Sign Out Error', error);
      });

  }

  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <Button onClick = {this.logout}>Logout</Button>
      </div>
    )
  }
}

export default Home;