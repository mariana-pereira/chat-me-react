import React, { InputHTMLAttributes } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { SubmitHandler } from '@unform/core';
import { Form } from '@unform/web';

import Input from '../../../components/Input';

import { signUpRequest } from '../../../store/modules/auth/actions';

import logo from '../../../assets/logo.svg';
import {
  Container, Image, Auth, Logo,
} from '../styles';

interface FormData extends InputHTMLAttributes<HTMLInputElement> {
  email: string;
  password: string;
};

const Register: React.FC = () => {
  const dispatch = useDispatch();

  const handleSubmit: SubmitHandler<FormData> = (data) => {
    dispatch(signUpRequest(data));
  };

  return (
    <Container>
      <Image>
        <Logo src={logo} />
      </Image>
      <Auth>
        <Form onSubmit={handleSubmit}>
          <Input name="name" placeholder="Digite seu nome" />
          <Input name="email" type="email" placeholder="Digite seu e-mail" />
          <Input
            name="password"
            type="password"
            placeholder="Digite sua senha"
          />
          <button type="submit">Cadastrar</button>
          <Link to="/login">Já tenho login</Link>
        </Form>
      </Auth>
    </Container>
  );
};

export default Register;
