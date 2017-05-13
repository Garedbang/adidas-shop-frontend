import React from 'react';
import styled from 'styled-components';

export default () => {
  const Link = styled.a`
  height: 52px;
  margin-bottom: 41px;
  display: block;
  `;
  return (
    <Link href="index.html"><img src={require(`./logo.png`)} alt="logo" /></Link>
  );
};
