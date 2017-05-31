import React from 'react';
import styled from 'styled-components';
import media from '../../media';

const Colors = styled.div`
  display: inline-block;
  padding-right: 15px;
  ${media.tablet`
    position: absolute;
    right: 0;
    padding-right: 0;
  `}
`;
const Button = styled.button`
  background-color: #c5c5c5;
  height: 18px;
  width: 18px;
  border-radius: 50%;
  margin-right: 13px;
  border: none;
  cursor: pointer;
  outline: none;
  position: relative;
  background: ${props => (props.color ? `${props.color};` : '#c5c5c5;')};
`;

const colors = ['#c5c5c5', '#4d87ca', '#4a4a4a', '#e0e0e0'];

export default ({ setColor }) => (
  <Colors>
    {colors.map(color => <Button onClick={() => setColor(color)} color={color} />)}
  </Colors>
);
