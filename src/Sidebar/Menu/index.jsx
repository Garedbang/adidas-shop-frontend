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
      <Link to="/products/football/shoes">SHOES</Link>
      <Link to="/products/football/clothing">CLOTHING</Link>
      <Link to="/products/football/accesories">ACCESORIES</Link>
    </Menu>
    <Menu title="BASKETBALL">
      <Link to="/products/football/shoes">SHOES</Link>
      <Link to="/products/football/clothing">CLOTHING</Link>
      <Link to="/products/football/accesories">ACCESORIES</Link>
    </Menu>
  </nav>
);
