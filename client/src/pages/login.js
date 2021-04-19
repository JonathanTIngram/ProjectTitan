import React from 'react';
import fire from '../fire';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const NavLink = styled(Link)`
  color: black;
  display: block;
  align-items: center;
  text-decoration: none;
  padding: 2px;
  height: 100%;
  cursor: default;
`;

export const Div = styled.div`
margin: auto;
text-align: center;
height: 600px;
width: 400px;
background-color: #44639b;
`;

export const Button = styled.button`
width: 50%;
height: 10%;
font-size: 25px;
`;

export const Box = styled.div`
padding-top: 40px;
font-size: 25px;
margin-bottom: 30px;
text-align: center;
height: 100px;
`;


export const Name = styled.div`
color: silver;
`;

class Login extends React.Component {


  login() {
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    fire.auth().signInWithEmailAndPassword(email, password)
      .then((u) => {
        console.log('Successfully Logged In');
      })
      .catch((err) => {
        console.log('Error: ' + err.toString());
      })
  }

  render() {
    return (
      <Div>
        <Box>
          <Name>Email</Name>
          <input id="email" placeholder="Enter Email.." type="text"/>
        </Box>
        <Box>
          <Name>Password</Name>
          <input id="password" placeholder="Enter Password.." type="password"/>
        </Box>
        <NavLink to='Main'> <Button style={{margin: '40px'}} onClick={this.login}> Login </Button> </NavLink>
      </Div>
    )
  }
}

export default Login;