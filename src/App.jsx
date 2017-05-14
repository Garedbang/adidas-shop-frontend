import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styled from 'styled-components';
import 'normalize.css';
import Sidebar from './Sidebar';
import ProductsList from './ProductsSection/List';
import Product from './ProductsSection/Product';
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
        <Route exact path="/" component={ProductsList} />
        <Route path="/product" component={Product} />
      </Wrapper>
    </Router>
  );
}

export default App;
// Comment for push
