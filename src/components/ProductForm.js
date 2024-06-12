import React from 'react';
import { useForm } from 'react-hook-form';

const ProductForm = ({ onSubmit }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Nome do Produto</label>
        <input {...register("nome", { required: "Nome do produto é obrigatório" })} />
        <p>{errors.nome?.message}</p>
      </div>
      <div>
        <label>Descrição</label>
        <textarea {...register("descricao", { required: "Descrição é obrigatória" })}></textarea>
        <p>{errors.descricao?.message}</p>
      </div>
      <div>
        <label>Preço</label>
        <input type="number" step="0.01" {...register("preco", { required: "Preço é obrigatório" })} />
        <p>{errors.preco?.message}</p>
      </div>
      <button type="submit">Adicionar Produto</button>
    </form>
  );
};

export default ProductForm;
