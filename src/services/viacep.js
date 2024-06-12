export const getAddressByCep = async (cep) => {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    if (!response.ok) {
      throw new Error('CEP não encontrado');
    }
    return await response.json();
  };