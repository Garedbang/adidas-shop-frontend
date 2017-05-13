import React from 'react';
import styled from 'styled-components';

const Link = styled.a`
  height: 52px;
  margin-bottom: 41px;
  display: block;
`;

export default () => {
  return (
    <Link href="index.html">
      <img src={require(`./logo.png`)} alt="logo" />
    </Link>
  );
};
