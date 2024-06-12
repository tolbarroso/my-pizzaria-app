export const fetchStates = async () => {
    const response = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados');
    if (!response.ok) {
      throw new Error('Erro ao buscar estados');
    }
    return await response.json();
  };
  
  export const fetchMunicipalities = async (stateId) => {
    const response = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${stateId}/municipios`);
    if (!response.ok) {
      throw new Error('Erro ao buscar municípios');
    }
    return await response.json();
  };
  