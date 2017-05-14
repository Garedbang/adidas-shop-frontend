import React from 'react';
import styled from 'styled-components';

const Link = styled.a`
  font-family: avenir-next-bold, sans-serif;
  font-size: 24px;
  font-weight: bold;
  display: block;
  text-decoration: none;
  cursor: pointer;
  padding-bottom: ${props => (props.active ? '15px' : '25px')};
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
  position: ${props => (props.active ? 'absolute' : 'inherit')};
  margin: ${props => (props.active ? '8px 0 0 20px' : '0')};
}
&:last-child {
  padding-bottom: 0;
}
`;

const SubLink = styled.a`
  font-size: 24px;
  padding-bottom: 21px;
  font-family: andale-mono, sans-serif;
  font-weight: normal;
  display: block;
  text-decoration: none;
  cursor: pointer;
  color: ${props => (props.active ? '#ffffff' : '#3c3c3c')};

&:hover {
  color: #ffffff;
}
&:last-child {
  padding-bottom: 50px;
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
