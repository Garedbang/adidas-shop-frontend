import React from 'react';

import Menu from './Menu';
import Link from './Link';

export default () => (
  <nav>
    <Menu title="FOOTBALL">
      <Link to="/products/football/shoes">SHOES</Link>
      <Link to="/products/football/clothing">CLOTHING</Link>
      <Link to="/products/football/accesories">ACCESORIES</Link>
    </Menu>
    <Menu title="RUNNING">
      <Link to="/products/basketball/shoes">SHOES</Link>
      <Link to="/products/basketball/clothing">CLOTHING</Link>
      <Link to="/products/basketball/accesories">ACCESORIES</Link>
    </Menu>
    <Menu title="BASKETBALL">
      <Link to="/products/volley-ball /shoes">SHOES</Link>
      <Link to="/products/volley-ball /clothing">CLOTHING</Link>
      <Link to="/products/volley-ball /accesories">ACCESORIES</Link>
    </Menu>
  </nav>
);
