import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Sale from '../../ProductSale';

const Div = styled.div`
  background-color: #f4f4f4;
  margin: 6px 10px;
  padding-bottom: 9px;
  position: relative;
`;
const Image = styled.img`
  padding: 9px 9px 13px 9px;
  width: 100%;
  box-sizing: border-box;
`;
const ProductLink = styled(Link)`
  display: block;
  padding: 24px 0;
  font-size: 30px;
  text-align: center;
  background: #ffffff;
  margin: 0 10px;
  font-weight: 900;
  text-decoration: none;
  cursor: pointer;
  color: ${props => (props.active ? '#ffffff' : '#000000')};
  background-image: ${props => (props.active ? 'linear-gradient(107deg, #0c09bf, #966dd8)' : '#ffffff')};

&:hover {
  background-image: linear-gradient(107deg, #0c09bf, #966dd8);
  color: #ffffff;
}
`;

export default () => (
  <Div>
    <Sale />
    <Image src={require('./content-img-1.jpg')} alt="" />
    <ProductLink active to="/product">$1024</ProductLink>
  </Div>
);
