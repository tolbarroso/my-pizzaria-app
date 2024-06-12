import React, { useState, useEffect } from 'react';
import { fetchMunicipalities } from '../services/ibge';

const SelectMunicipality = ({ stateId, onMunicipalityChange }) => {
  const [municipalities, setMunicipalities] = useState([]);

  useEffect(() => {
    if (stateId) {
      const getMunicipalities = async () => {
        const data = await fetchMunicipalities(stateId);
        setMunicipalities(data);
      };

      getMunicipalities();
    }
  }, [stateId]);

  return (
    <select onChange={(e) => onMunicipalityChange(e.target.value)}>
      <option value="">Selecione um município</option>
      {municipalities.map((municipality) => (
        <option key={municipality.id} value={municipality.nome}>
          {municipality.nome}
        </option>
      ))}
    </select>
  );
};

export default SelectMunicipality;