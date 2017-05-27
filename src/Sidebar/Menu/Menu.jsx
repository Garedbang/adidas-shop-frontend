import React from 'react';
import styled from 'styled-components';

const Category = styled.div`

`;

const Button = styled.button`
  font-family: avenir-next-bold, sans-serif;
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
  background: transparent;
  border: none;
  position: relative;
  color: #ffffff;
  outline: none;
  padding-bottom: ${props => (props.active ? '21px' : '36px')};

  &:hover {
    color: #ffffff;
  }
  &:after {
    content: "";
    background: url(${require('./dropdown-icon.svg')});
    background-size: 100% 100%;
    width: 14px;
    height: 9px;
    position: absolute;
    top: 10px;
    padding-left: 10px;
  }
  ${props => props.isOpened && `
    padding-bottom: 20px;
    &:after {
      transform: rotate(180deg);
    }
  `}
`;

export default class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpened: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({ isOpened: !prevState.isOpened }));
  }

  render() {
    return (
      <Category>
        <Button onClick={this.handleClick} isOpened={this.state.isOpened}>
          {this.props.title}
        </Button>
        {this.state.isOpened && this.props.children}
      </Category>
    );
  }
}
