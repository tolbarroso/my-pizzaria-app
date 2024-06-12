import React from 'react';
import { useForm } from 'react-hook-form';

const Login = ({ onLogin }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    onLogin(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Usuário</label>
        <input {...register("usuario", { required: "Usuário é obrigatório" })} />
        <p>{errors.usuario?.message}</p>
      </div>
      <div>
        <label>Senha</label>
        <input type="password" {...register("senha", { required: "Senha é obrigatória" })} />
        <p>{errors.senha?.message}</p>
      </div>
      <button type="submit">Entrar</button>
    </form>
  );
};

export default Login;