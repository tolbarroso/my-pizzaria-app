import React, { useState, useEffect } from 'react';
import { fetchStates } from '../services/ibge';

const SelectState = ({ onStateChange }) => {
  const [states, setStates] = useState([]);

  useEffect(() => {
    const getStates = async () => {
      const data = await fetchStates();
      setStates(data);
    };

    getStates();
  }, []);

  return (
    <select onChange={(e) => onStateChange(e.target.value)}>
      <option value="">Selecione um estado</option>
      {states.map((state) => (
        <option key={state.id} value={state.sigla}>
          {state.nome}
        </option>
      ))}
    </select>
  );
};

export default SelectState;