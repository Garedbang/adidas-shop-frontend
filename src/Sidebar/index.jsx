import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import Search from './Search';
import ProductsList from '../ProductsList';

const Sidebar = styled.aside`
  background: #0e0e0e;
  width: 414px;
  padding: 31px 22px;
  box-sizing: border-box;
  align-items: center;
  text-align: center;
`;

export default () => (
  <Sidebar>
    <Logo />
    <Search />
    <ProductsList />
  </Sidebar>
);
