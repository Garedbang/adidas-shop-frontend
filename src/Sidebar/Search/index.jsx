import React from 'react';
import styled from 'styled-components';

const Search = styled.form`
  position: relative;
  padding-bottom: 130px;
`;
const Input = styled.input`
  width: 100%;
  border: 0;
  font-size: 24px;
  background: transparent;
  border-bottom: 4px solid rgba(55, 55, 55, .5);;
  outline: none;
  padding: 0 0 6px 48px;
  color: #3a3a3a;
  font-weight: bold;

  &::placeholder {
    color: #3a3a3a;
  }
`;
const Icon = styled.button`
  position: absolute;
  left: 14px;
  top: 0;
  background: url(${require('./search-icon.svg')});
  background-size: 100% 100%;
  width: 28px;
  height: 30px;
  border: none;
  cursor: pointer;
  outline: none;
`;

export default () => (
  <Search>
    <Icon type="submit" />
    <Input type="search" />
  </Search>
);
