import React from 'react';
import styled from 'styled-components';
import media from '../media';

import Logo from './Logo';
import Search from './Search';
import Menu from './Menu';

const Wrapper = styled.aside`
  background: #0e0e0e;
  flex-basis: 414px;
  padding: 31px 22px;
  box-sizing: border-box;
  align-items: center;
  text-align: center;
  z-index: 2;
  ${media.tablet`
    width: 100%;
    position: fixed;
    top: 0;
    padding: 17px 15px;
    height: 64px;
    max-height: 100vh;
    overflow: auto;
    ${props => props.isOpened && `
      height: 100vh;
      overflow: scroll;
    `}
  `}
  ${media.desktop`flex-basis: 327px`}
`;

const Toggle = styled.button`
  display: none;
  ${media.tablet`
    display: inline-block;
    cursor: pointer;
    background: transparent url(${require('./menu-icon.svg')}) no-repeat;
    width: 40px;
    height: 30px;
    position: absolute;
    right: 16px;
    top: 16px;
    border: none;
    outline: none;
  `}
`;

export default class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpened: false };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({ isOpened: !prevState.isOpened }));
  }
  render() {
    return (
      <Wrapper isOpened={this.state.isOpened}>
        <Logo />
        <Toggle onClick={this.toggle} />
        <Search />
        <Menu />
      </Wrapper>
    );
  }
}
