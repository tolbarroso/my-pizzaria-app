import React, { useState } from 'react';
import { AddressForm } from '../components';
import { db } from '../services/firebase';
import { collection, addDoc } from 'firebase/firestore';

const AddressPage = () => {
  const [addresses, setAddresses] = useState([]);

  const handleAddAddress = async (data) => {
    try {
      const docRef = await addDoc(collection(db, 'addresses'), data);
      setAddresses([...addresses, { ...data, id: docRef.id }]);
      alert('Endereço cadastrado com sucesso!');
    } catch (e) {
      console.error('Erro ao adicionar endereço: ', e);
    }
  };

  return (
    <div>
      <h1>Cadastrar Endereço</h1>
      <AddressForm onSubmit={handleAddAddress} />
    </div>
  );
};

export default AddressPage;