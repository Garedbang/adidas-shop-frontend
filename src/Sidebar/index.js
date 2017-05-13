import React from 'react';
import Logo from './Logo';
import Search from './Search';
import ProductList from '../ProductList';
import styled from 'styled-components';

const Sidebar = styled.aside`
  background: #0e0e0e;
  width: 414px;
  padding: 31px 22px;
  box-sizing: border-box;
  align-items: center;
  text-align: center;
`;

export default () => {
  return (
    <Sidebar>
      <Logo />
      <Search />
      <ProductList />
    </Sidebar>
  );
};
