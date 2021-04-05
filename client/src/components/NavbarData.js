
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  background: transparent;
  border-bottom: 2px solid black;
  border-top: 2px solid black;

  height: 34px;
  display: flex;
  padding: 0.5rem calc((62vw - 1000px) / 2);
  margin: 15px 0px;
  z-index: 10;
`;

export const NavLink = styled(Link)`
  color: black;
  border-bottom: 25px solid lightgray;
  border-right: 10px solid transparent;
  display: block;
  margin: 0 -0.3%;
  align-items: center;
  text-decoration: none;
  padding: 2px;
  height: 100%;
  cursor: default;
  &.active {
    color: black;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
`;