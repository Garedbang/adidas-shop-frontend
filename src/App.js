import React, { Component } from 'react';
import Sidebar from './Sidebar';
import Content from './ContentSection';
import normalizer from 'normalizer';
import { Row, Col } from 'flexboxgrid';
import styled from 'styled-components';
import './App.css';

class App extends Component {
  render() {
    const Wrapper = styled.main`
    display: -ms-flexbox;
    display: -webkit-box;
    display: flex;
    min-height: 100vh;
    font-family: avenir-next-bold, sans-serif;
    -ms-flex-align: stretch;
    -webkit-box-align: stretch;
    align-items: stretch;
    `;
    return (
        <Wrapper>
          <Sidebar />
          <Content />
        </Wrapper>
    );
  }
}

export default App;
