import React from 'react';
import styled from 'styled-components';
import media from '../../media';
import Header from './Header';
import Carousel from './Carousel';

const Section = styled.section`
  flex: 2;
`;
const Wrapper = styled.div`
  padding: 26px 31px 135px 31px;
  ${media.tablet`padding: 89px 15px 60px 15px;`}
`;
const Description = styled.p`
  font-size: 33px;
  line-height: 1.52;
  color: #d8d8d8;
  font-family: avenir-next-reg, sans-serif;
  font-weight: lighter;
  padding: 25px 0;
  ${media.desktop`
    padding: 30px 0 50px 0;
    margin: 0;
    `}
`;
const GreyText = styled.span`
  color: #6e6e6e;
`;
const BuyNow = styled.button`
  background-image: linear-gradient(to right, #4949aa, #27275d);
  position: fixed;
  bottom: 0;
  width: calc(100% - 414px);
  padding: 39px 0;
  z-index: 2;
  font-size: 32px;
  color: #ffffff;
  font-family: avenir-next-bold, sans-serif;
  font-weight: bold;
  border: none;
  cursor: pointer;
  outline: none;
  ${media.tablet`width: 100% !important`}
  ${media.desktop`width: calc(100% - 327px)`}

  &:hover {
    background-image: linear-gradient(to right, #27275d, #4949aa);
  }
`;

export default class Show extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: '' };
    this.handleColorChange = this.handleColorChange.bind(this);
  }

  handleColorChange(color) {
    this.setState({ color });
  }

  render() {
    return (
      <Section>
        <Wrapper>
          <Header setColor={this.handleColorChange} color={this.state.color} />
          <Carousel />
          <Description>
            <GreyText>Adidas </GreyText>
            is a German multinational corporation, headquartered in Herzogenaurach,
            Germany, that designs and manufactures shoes, clothing and accessories.
          </Description>
        </Wrapper>
        <BuyNow>
          BUY NOW
        </BuyNow>
      </Section>
    );
  }
}
