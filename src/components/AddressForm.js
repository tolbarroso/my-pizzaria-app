import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { getAddressByCep } from '../services/viacep';
import SelectState from './SelectState';
import SelectMunicipality from './SelectMunicipality';

const AddressForm = ({ onSubmit }) => {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });
  const [stateId, setStateId] = useState("");

  const fetchAddress = async (cep) => {
    try {
      const data = await getAddressByCep(cep);
      setValue("rua", data.logradouro);
      setValue("bairro", data.bairro);
      setValue("cidade", data.localidade);
      setValue("estado", data.uf);
      setStateId(data.uf);
    } catch (error) {
      console.error("CEP não encontrado");
    }
  };

  const handleCepBlur = async (e) => {
    const cep = e.target.value.replace(/\D/g, '');
    if (cep.length === 8) {
      await fetchAddress(cep);
    }
  };

  const handleStateChange = (selectedState) => {
    setValue('estado', selectedState);
    setStateId(selectedState);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Nome</label>
        <input {...register("nome")} />
        <p>{errors.nome?.message}</p>
      </div>
      <div>
        <label>CEP</label>
        <input {...register('cep')} onBlur={handleCepBlur} />
        <p>{errors.cep?.message}</p>
      </div>
      <div>
        <label>Rua</label>
        <input {...register("rua")} />
        <p>{errors.rua?.message}</p>
      </div>
      <div>
        <label>Bairro</label>
        <input {...register("bairro")} />
        <p>{errors.bairro?.message}</p>
      </div>
      <div>
        <label>Número</label>
        <input type="number" {...register("numero")} />
        <p>{errors.numero?.message}</p>
      </div>
      <div>
        <label>Estado</label>
        <SelectState onStateChange={handleStateChange} />
        <p>{errors.estado?.message}</p>
      </div>
      <div>
        <label>Cidade</label>
        <SelectMunicipality stateId={stateId} onMunicipalityChange={(value) => setValue("cidade", value)} />
        <p>{errors.cidade?.message}</p>
      </div>
      <div>
        <label>Telefone</label>
        <input {...register("telefone")} />
        <p>{errors.telefone?.message}</p>
      </div>
      <div>
        <label>CPF</label>
        <input {...register("cpf")} />
        <p>{errors.cpf?.message}</p>
      </div>
      <div>
        <label>Sexo</label>
        <select {...register("sexo")}>
          <option value="Masculino">Masculino</option>
          <option value="Feminino">Feminino</option>
          <option value="Outro">Outro</option>
        </select>
        <p>{errors.sexo?.message}</p>
      </div>
      <button type="submit">Cadastrar</button>
    </form>
  );
};

export default AddressForm;