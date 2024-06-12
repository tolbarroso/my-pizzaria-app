import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1>Bem-vindo à Pizzaria</h1>
      <nav>
        <ul>
          <li><Link to="/address">Cadastrar Endereço</Link></li>
          <li><Link to="/order">Fazer Pedido</Link></li>
          <li><Link to="/product">Adicionar Produto</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default HomePage;