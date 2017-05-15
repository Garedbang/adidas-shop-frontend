import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LinkToHome = styled(Link)`
  height: 52px;
  margin-bottom: 41px;
  display: block;
  cursor: pointer;
`;

export default () => (
  <LinkToHome to="/">
    <img src={require('./logo.png')} alt="logo" />
  </LinkToHome>
);
