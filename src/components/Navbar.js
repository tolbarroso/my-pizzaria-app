import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/address">Endereço</Link></li>
        <li><Link to="/order">Pedido</Link></li>
        <li><Link to="/product">Produto</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
