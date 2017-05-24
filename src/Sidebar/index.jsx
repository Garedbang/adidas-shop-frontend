import React from 'react';
import styled from 'styled-components';
import media from '../media';

import Logo from './Logo';
import Search from './Search';
import Menu from './Menu';

const Sidebar = styled.aside`
  background: #0e0e0e;
  width: 414px;
  padding: 31px 22px;
  box-sizing: border-box;
  align-items: center;
  text-align: center;
  z-index: 2;
  ${media.tablet`
    width: 100% !important;
    position: fixed;
    top: 0;
    padding: 17px 15px;
  `}
  ${media.desktop`width: 327px`}
`;

export default () => (
  <Sidebar>
    <Logo />
    <Search />
    <Menu />
  </Sidebar>
);
