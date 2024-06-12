import React from 'react';
import { useForm } from 'react-hook-form';

const OrderForm = ({ onSubmit }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Produto</label>
        <input {...register("produto", { required: "Produto é obrigatório" })} />
        <p>{errors.produto?.message}</p>
      </div>
      <div>
        <label>Quantidade</label>
        <input type="number" {...register("quantidade", { required: "Quantidade é obrigatória", min: 1 })} />
        <p>{errors.quantidade?.message}</p>
      </div>
      <div>
        <label>Preço</label>
        <input type="number" step="0.01" {...register("preco", { required: "Preço é obrigatório" })} />
        <p>{errors.preco?.message}</p>
      </div>
      <button type="submit">Fazer Pedido</button>
    </form>
  );
};

export default OrderForm;
