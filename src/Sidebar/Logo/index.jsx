import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Link = styled(NavLink)`
  height: 52px;
  margin-bottom: 41px;
  display: block;
  cursor: pointer;
`;

export default () => (
  <Link to="/">
    <img src={require('./logo.png')} alt="logo" />
  </Link>
);
