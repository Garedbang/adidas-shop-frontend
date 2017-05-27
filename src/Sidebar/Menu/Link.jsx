import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Link = styled(NavLink)`
  font-size: 24px;
  padding-bottom: 25px;
  font-family: andale-mono, sans-serif;
  font-weight: lighter;
  display: block;
  text-decoration: none;
  cursor: pointer;
  color: #3c3c3c;

  &:hover {
    color: #ffffff;
  }
  &.is-active {
    color: #ffffff;
  }
  &:last-child {
    padding-bottom: 51px;
  }
`;

export default ({ to, children }) => <Link to={to} activeClassName="is-active">{children}</Link>;
