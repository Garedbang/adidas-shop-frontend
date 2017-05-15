import React from 'react';
import styled from 'styled-components';
import Filters from './Filters';
import Products from './Products';

const Section = styled.section`
  flex: 2;
`;

export default () => (
  <Section>
    <Filters />
    <Products />
  </Section>
);
