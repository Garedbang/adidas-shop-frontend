import React from 'react';
import styled from 'styled-components';
import { Row } from 'react-flexbox-grid';
import media from '../../media';
import Colors from './Colors';

import { Label } from './../../Components/Label';

const Name = styled.h1`
  color: #3a3a3a;
  font-size: 64px;
  margin: 0;
  line-height: 1;
  z-index: 1;
  ${media.tablet`
    width: 100%;
    font-size: 36px;
    padding: 4px 0 0 7px;
  `}
`;

const Br = styled.br`
  ${media.tablet`display: none`}
 `;
const Save = styled.button`
  padding: 25px 14px;
  border-radius: 50%;
  color: #ffffff;
  font-size: 18px;
  margin-top: 10px;
  z-index: 1;
  position: relative;
  font-weight: bold;
  border: none;
  cursor: pointer;
  outline: none;
  z-index: 1;
  ${props => props.color && `background-color: ${props.color};`}
  ${media.tablet`display: none`}
`;
const Price = styled.h2`
  font-size: 80px;
  ${props => props.color && `color:${props.color};`}
  margin: 0;
  padding-top: 29px;
  position: relative;
  ${media.tablet`padding: 5px 0 16px 0;`}
`;
const Sale = styled(Label)`
  position: relative;
`;
const Div = styled.div`
  ${media.tablet`
    flex-direction: column-reverse;
    display: flex;
    flex: 1;
    padding-left: 7px;
  `}
`;

export default ({ color, setColor }) => (
  <div>
    <Row between="xs">
      <Name>
        ULTRA
        <Br />
        BOOST
      </Name>
      <Div>
        <span>
          <Colors setColor={setColor} />
          <Sale>SALE</Sale>
        </span>
        <Price color={color}>
          $170
        </Price>
      </Div>
    </Row>
    <Save color={color}>SAVE</Save>
  </div>
);
