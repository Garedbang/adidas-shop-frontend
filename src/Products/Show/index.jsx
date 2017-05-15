import React from 'react';
import styled from 'styled-components';
import { Row } from 'react-flexbox-grid';

import { Label } from '../../Components/Label';

const Section = styled.section`
  flex: 2;
`;
const Wrapper = styled.div`
  padding: 26px 31px 135px 31px;
`;
const Name = styled.h1`
  color: #3a3a3a;
  font-size: 64px;
  margin: 0;
  line-height: 1;
  z-index: 1;
`;
const Colors = styled.span`
  padding-right: 15px;
`;
const Sale = styled(Label)`
  position: relative;
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
`;
const Price = styled.h2`
  font-size: 80px;
  color: #e2e2e2;
  margin: 0;
  padding-top: 22px;
  position: relative;
`;
const Save = styled.button`
  padding: 25px 14px;
  background-color: #e3e3e3;
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
`;
const Images = styled.div`
  margin-top: -200px;
  z-index: 0;
`;
const AcitveImage = styled.img`
  height: 525px;
  display: block;
  margin: 0 auto;
`;
const ButtonImg = styled.button`
  background-color: transparent;
  cursor: pointer;
  outline: none;
  margin-right: 15px;
  padding: 0;
  height: 118px;
  width: 145px;
  border: ${props => (props.active ? 'solid 5px #e8e8ea' : 'solid 5px transparent')};

  &:hover {
    border: solid 5px #e8e8ea;
  }
`;
const Img = styled.img`
  cursor: pointer;
  width: 100%;
`;
const WrapperGreyLines = styled.div`
  width: 160px;
  margin-right: 15px;
`;
const GreyLines = styled.span`
  background-color: #e7e7e7;
  width: 100%;
  height: 3px;
  border-radius: 2px;
  display: block;
  margin-bottom: 3px;
`;
const ShowMore = styled.button`
  flex: 0 1 55px;
  width: 64px;
  text-align: left;
  font-size: 14px;
  color: #c0c0c0;
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
`;
const Description = styled.p`
  font-size: 33px;
  line-height: 1.52;
  color: #d8d8d8;
  font-family: avenir-next-reg, sans-serif;
  font-weight: lighter;
`;
const GreyText = styled.span`
  color: #6e6e6e;
`;
const BuyNow = styled.button`
  background-image: linear-gradient(to right, #4949aa, #27275d);
  position: fixed;
  bottom: 0;
  width: calc(100% - 414px);
  padding: 35px 0;
  z-index: 2;
  font-size: 32px;
  color: #ffffff;
  font-family: avenir-next-bold, sans-serif;
  font-weight: bold;
  border: none;
  cursor: pointer;
  outline: none;

  &:hover {
    background-image: linear-gradient(to right, #27275d, #4949aa);
  }
`;

export default () => (
  <Section>
    <Wrapper>
      <Row between="xs">
        <Name>
          ULTRA
          <br />
          BOOST
        </Name>
        <div>
          <Colors>
            <Button style={{ background: '#c5c5c5' }} />
            <Button style={{ background: '#4d87ca' }} />
            <Button style={{ background: '#4a4a4a' }} />
            <Button style={{ background: '#e0e0e0' }} />
          </Colors>
          <Sale>SALE</Sale>
          <Price>
            $170
          </Price>
        </div>
      </Row>
      <Save>SAVE</Save>
      <Images>
        <AcitveImage src={require('./product_ultra-boost.jpg')} />
        <Row middle="xs">
          <ButtonImg>
            <Img src={require('./product_ultra-boost_2.jpg')} />
          </ButtonImg>
          <ButtonImg>
            <Img src={require('./product_ultra-boost_3.jpg')} />
          </ButtonImg>
          <ButtonImg>
            <Img src={require('./product_ultra-boost_4.jpg')} />
          </ButtonImg>
          <ButtonImg active>
            <Img src={require('./product_ultra-boost.jpg')} />
          </ButtonImg>
          <WrapperGreyLines>
            <GreyLines />
            <GreyLines />
            <GreyLines />
          </WrapperGreyLines>
          <ShowMore>
            see
            <br />
            more
            <br />
            photos
          </ShowMore>
        </Row>
      </Images>
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
