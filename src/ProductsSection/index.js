import React from 'react';
import Filters from './Filters';
import Products from './Products';
import styled from 'styled-components';

const Section = styled.section`
  flex: 2;
`;

export default () => {
  return (
    <Section>
      <Filters />
      <Products />
    </Section>
  );
};
