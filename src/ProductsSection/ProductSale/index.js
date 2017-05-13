import React from 'react';
import styled from 'styled-components';

const Sale = styled.span`
  background-color: #ff5c5c;
  font-size: 14px;
  color: #ffffff;
  padding: 6px 20px;
  position: absolute;
  top: 12px;
  right: 14px;
`;

export default () => {
  return <Sale>SALE</Sale>;
};
