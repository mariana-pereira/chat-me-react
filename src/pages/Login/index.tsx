import React, { InputHTMLAttributes } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { SubmitHandler } from '@unform/core';
import { Form } from '@unform/web';
import { toast } from 'react-toastify';

import { ApplicationState } from '../../store';
import { signInRequest } from '../../store/modules/auth/actions';

import Input from '../../components/Input';
import Layout from '../../Layouts/Auth';

import schema from './schema';

interface FormData extends InputHTMLAttributes<HTMLInputElement> {
  email: string;
  password: string;
};

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state: ApplicationState) => state.auth.loading);

  const handleSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      await schema.validate(data);

      dispatch(signInRequest(data));
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <Layout>
      <Form onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder="Digite seu e-mail" />
        <Input
          name="password"
          type="password"
          placeholder="Digite sua senha"
        />
        <button type="submit">{loading ? 'Carregando...' : 'Acessar'}</button>
        <Link to="/register">Criar conta gratuita</Link>
      </Form>
    </Layout>
  );
};

export default Login;
