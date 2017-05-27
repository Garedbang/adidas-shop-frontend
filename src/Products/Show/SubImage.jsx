import React from 'react';
import styled from 'styled-components';

const ButtonImg = styled.button`
  background-color: transparent;
  cursor: pointer;
  outline: none;
  padding: 0;
  height: 118px;
  width: 145px;
  border: solid 5px transparent;
  ${props => props.isSelected && `
    border: solid 5px #e8e8ea;
  `}

  &:hover {
    border: solid 5px #e8e8ea;
  }
`;
const Img = styled.img`
  cursor: pointer;
  width: 100%;
`;

export default ({ src, index, onClick, isSelected }) => (
  <ButtonImg onClick={() => onClick(index)} isSelected={isSelected}>
    <Img src={src} />
  </ButtonImg>
);
