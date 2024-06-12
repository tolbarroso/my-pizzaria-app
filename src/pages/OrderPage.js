import React, { useState } from 'react';
import { OrderForm } from '../components';
import { db } from '../services/firebase';
import { collection, addDoc } from 'firebase/firestore';

const OrderPage = () => {
  const [orders, setOrders] = useState([]);

  const handleAddOrder = async (data) => {
    try {
      const docRef = await addDoc(collection(db, 'orders'), data);
      setOrders([...orders, { ...data, id: docRef.id }]);
      alert('Pedido cadastrado com sucesso!');
    } catch (e) {
      console.error('Erro ao adicionar pedido: ', e);
    }
  };

  return (
    <div>
      <h1>Fazer Pedido</h1>
      <OrderForm onSubmit={handleAddOrder} />
    </div>
  );
};

export default OrderPage;