import React from 'react';
import styled from 'styled-components';
import media from '../../media';

const Link = styled.a`
  font-family: avenir-next-bold, sans-serif;
  font-size: 24px;
  font-weight: bold;
  display: block;
  text-decoration: none;
  cursor: pointer;
  ${media.tablet`display:none`}
  padding-bottom: ${props => (props.active ? '21px' : '36px')};
  position: ${props => (props.active ? 'inherit' : 'relative')};
  color: ${props => (props.active ? '#ffffff' : '#3c3c3c')};

  &:hover {
    color: #ffffff;
  }
  &:after {
    content: "";
    background: url(${require('./dropdown-icon.svg')});
    background-size: 100% 100%;
    width: 14px;
    height: 9px;
    position: relative;
    top: -4px;
    margin: 0px 0 0 11px;
    display: ${props => (props.active ? 'inline-block' : 'initial')};
  }
  &:last-child {
    padding-bottom: 0;
  }
`;

const SubLink = styled.a`
  font-size: 24px;
  padding-bottom: 25px;
  font-family: andale-mono, sans-serif;
  font-weight: lighter;
  display: block;
  text-decoration: none;
  cursor: pointer;
  ${media.tablet`display:none`}
  color: ${props => (props.active ? '#ffffff' : '#3c3c3c')};

  &:hover {
    color: #ffffff;
  }
  &:last-child {
    padding-bottom: 51px;
  }
`;

export default () => (
  <nav>
    <Link active href="#">SPORTS</Link>
    <nav>
      <SubLink active href="#">SHOES</SubLink>
      <SubLink href="#">CLOTHING</SubLink>
      <SubLink href="#">ACCESORIES</SubLink>
    </nav>
    <Link href="#">MICOACH</Link>
    <Link href="#">BRANDS</Link>
  </nav>
);
