import { css } from 'styled-components';

const sizes = {
  giant: 1200,
  desktop: 992,
  tablet: 768,
  phone: 376,
};

const media = Object.keys(sizes).reduce((accumulator, label) => {
  const acc = accumulator;
  const emSize = sizes[label] / 16;
  acc[label] = (...args) => css`
    @media (max-width: ${emSize}em) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});

export default media;
