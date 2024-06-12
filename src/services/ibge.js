const getStates = async () => {
    const response = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados');
    if (!response.ok) {
      throw new Error('Erro ao buscar estados');
    }
    const data = await response.json();
    return data;
  };
  
  const getMunicipalities = async (stateId) => {
    const response = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${stateId}/municipios`);
    if (!response.ok) {
      throw new Error('Erro ao buscar municípios');
    }
    const data = await response.json();
    return data;
  };
  
  export { getStates, getMunicipalities };
  