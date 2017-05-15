import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import ProductCard from '../ProductCard';

export default () => (
  <Grid fluid>
    <Row>
      <Col xs={12} sm={6} md={4}>
        <ProductCard />
      </Col>
      <Col xs={12} sm={6} md={4}>
        <ProductCard />
      </Col>
      <Col xs={12} sm={6} md={4}>
        <ProductCard />
      </Col>
      <Col xs={12} sm={6} md={4}>
        <ProductCard />
      </Col>
      <Col xs={12} sm={6} md={4}>
        <ProductCard />
      </Col>
      <Col xs={12} sm={6} md={4}>
        <ProductCard />
      </Col>
      <Col xs={12} sm={6} md={4}>
        <ProductCard />
      </Col>
      <Col xs={12} sm={6} md={4}>
        <ProductCard />
      </Col>
      <Col xs={12} sm={6} md={4}>
        <ProductCard />
      </Col>
    </Row>
  </Grid>
);
