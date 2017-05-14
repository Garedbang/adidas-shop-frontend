import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styled from 'styled-components';

import 'normalize.css';
import Sidebar from './Sidebar';
import ProductList from './ProductList';
import ProductShow from './ProductShow';

import './fonts.css';
import './App.css';

const Wrapper = styled.main`
  display: flex;
  min-height: 100vh;
  font-family: avenir-next-bold, sans-serif;
  align-items: stretch;
`;

function App() {
  return (
    <Router>
      <Wrapper>
        <Sidebar />
        <Route exact path="/" component={ProductList} />
        <Route path="/product" component={ProductShow} />
      </Wrapper>
    </Router>
  );
}

export default App;
