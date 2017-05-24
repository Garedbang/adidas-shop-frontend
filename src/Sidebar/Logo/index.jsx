import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import media from '../../media';

const LinkToHome = styled(Link)`
  height: 52px;
  margin-bottom: 41px;
  display: block;
  cursor: pointer;
  ${media.tablet`
    height: 29px;
    margin-bottom: 0;
    text-align: left;
    `}
`;
const Img = styled.img`
  height: 100%;
`;

export default () => (
  <LinkToHome to="/">
    <Img src={require('./logo.svg')} alt="logo" />
  </LinkToHome>
);
