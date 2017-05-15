import React from 'react';
import styled from 'styled-components';

const Link = styled.a`
  font-family: avenir-next-bold, sans-serif;
  font-size: 24px;
  font-weight: bold;
  display: block;
  text-decoration: none;
  cursor: pointer;
  padding-bottom: ${props => (props.active ? '6px' : '20px')};
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
  padding-bottom: 15px;
  font-family: andale-mono, sans-serif;
  font-weight: lighter;
  display: block;
  text-decoration: none;
  cursor: pointer;
  color: ${props => (props.active ? '#ffffff' : '#3c3c3c')};

  &:hover {
    color: #ffffff;
  }
  &:last-child {
    padding-bottom: 40px;
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
