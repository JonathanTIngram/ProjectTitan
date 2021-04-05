import React from 'react'

import {
  Nav,
  NavLink,
  NavMenu,
} from './NavbarData';

const Navbar = () => {
    return (
    <>
     <Nav>
         <NavMenu>
             <NavLink to='/Main' activeStyle>
                 Main
             </NavLink>
             <NavLink to='Historical' activeStyle>
                 Historical
             </NavLink>
             <NavLink to='/Graph' activeStyle>
                 Graph
             </NavLink>
             <NavLink to='/Andon' activeStyle>
                 Andon
             </NavLink>
             <NavLink to='/Weather' activeStyle>
                 Weather
             </NavLink>
             <NavLink to='/Attraction' activeStyle>
                 Attraction Timeline
             </NavLink>
         </NavMenu>
     </Nav>
    </>
    );
};

export default Navbar
