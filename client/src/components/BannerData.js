import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Banner = styled.nav`
  background: transparent;
  border-bottom: 2px solid black;
  border-top: 0px solid black;
  height: 30px;
  padding: 0;
  margin: -15px 0px;
  z-index: 10;
`;

export const BannerInfo = styled.div`
  color: black;
  display: flex;
  border-right: 2px solid black;
  align-items: center;
  text-decoration: none;
  padding: 5px;
  height: 100%;
  width: 25%;
`;

export const BannerMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -5px;
`;

