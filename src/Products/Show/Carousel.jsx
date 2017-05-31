import React from 'react';
import styled from 'styled-components';
import { Row } from 'react-flexbox-grid';
import media from '../../media';

import SubImage from './SubImage';

const Images = styled.div`
  margin-top: -200px;
  z-index: 0;
  ${media.tablet`margin-top: 10px;`}
`;
const AcitveImage = styled.img`
  height: 525px;
  margin: 0 auto;
  display: block;
  ${media.giant`
    height: auto;
    width: 100%;
    `}
`;

const images = [
  require('./product_ultra-boost.jpg'),
  require('./product_ultra-boost_2.jpg'),
  require('./product_ultra-boost_3.jpg'),
  require('./product_ultra-boost_4.jpg'),
];

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedIndex: 0 };
    this.handleImageChange = this.handleImageChange.bind(this);
  }

  handleImageChange(selectedIndex) {
    this.setState({ selectedIndex });
  }

  render() {
    return (
      <Images>
        <AcitveImage src={images[this.state.selectedIndex]} isActive={this.state.selectedIndex} />
        <Row middle="xs" around="xs">
          {images.map((img, index) => (
            <SubImage
              src={img}
              key={img}
              index={index}
              isSelected={this.state.selectedIndex === index}
              onClick={this.handleImageChange}
            />
          ))}
        </Row>
      </Images>
    );
  }
}
