import React, {Component} from 'react';
import Sidebar from './Sidebar';
import Products from './ProductsSection';
import 'normalize.css';
import {Row, Col} from 'flexboxgrid';
import styled from 'styled-components';
import './App.css';

const Wrapper = styled.main`
  display: flex;
  min-height: 100vh;
  font-family: avenir-next-bold, sans-serif;
  align-items: stretch;
`;

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Sidebar />
        <Products />
      </Wrapper>
    );
  }
}

export default App;
