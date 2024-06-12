import React, { useState } from 'react';
import ProductForm from '../components/ProductForm';
import { db } from '../services/firebase';
import { collection, addDoc } from 'firebase/firestore';

const ProductPage = () => {
  const [products, setProducts] = useState([]);

  const handleAddProduct = async (data) => {
    try {
      const docRef = await addDoc(collection(db, 'products'), data);
      setProducts([...products, { ...data, id: docRef.id }]);
      alert('Produto cadastrado com sucesso!');
    } catch (e) {
      console.error('Erro ao adicionar produto: ', e);
    }
  };

  return (
    <div>
      <h1>Adicionar Produto</h1>
      <ProductForm onSubmit={handleAddProduct} />
    </div>
  );
};

export default ProductPage;
