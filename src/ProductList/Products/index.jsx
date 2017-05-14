import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Card from '../Card';

export default () => (
  <Grid fluid>
    <Row>
      <Col xs={12} sm={6} md={4}>
        <Card />
      </Col>
      <Col xs={12} sm={6} md={4}>
        <Card />
      </Col>
      <Col xs={12} sm={6} md={4}>
        <Card />
      </Col>
      <Col xs={12} sm={6} md={4}>
        <Card />
      </Col>
      <Col xs={12} sm={6} md={4}>
        <Card />
      </Col>
      <Col xs={12} sm={6} md={4}>
        <Card />
      </Col>
      <Col xs={12} sm={6} md={4}>
        <Card />
      </Col>
      <Col xs={12} sm={6} md={4}>
        <Card />
      </Col>
      <Col xs={12} sm={6} md={4}>
        <Card />
      </Col>
    </Row>
  </Grid>
);
