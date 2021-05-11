import React from 'react';
import fire from '../fire';
import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

export const NavLink = styled(Link)`
  color: black;
  display: block;
  align-items: center;
  text-decoration: none;
  padding: 2px;
  cursor: default;
`


export const Button = styled.button`
width: 70px;
height: 70px;
font-size: 35px;
margin-left: 10px;
`


class Logout extends React.Component {

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
        <h1>Are you sure you want to Logout?</h1>
        <Button onClick = {this.logout}>
        <NavLink to='/' activeStyle>Yes </NavLink>
        </Button>
        <Button>
        <NavLink to='/Main' activeStyle>No</NavLink>
        </Button>
      </div>
    )
  }
}

export default Logout;