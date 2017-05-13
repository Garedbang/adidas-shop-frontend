import React from 'react';
import Logo from './Logo';
import Search from './Search';
import ProductList from '../ProductList';
import styled from 'styled-components';

export default () => {
  const Sidebar = styled.aside`
  background: #0e0e0e;
  width: 414px;
  padding: 31px 22px;
  -ms-flex-align: center;
  -webkit-box-align: center;
  align-items: center;
  text-align: center;
  `;
  return (
    <Sidebar>
      <Logo />
      <Search />
      <ProductList />
    </Sidebar>
  );
};
