import React, { InputHTMLAttributes } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SubmitHandler } from '@unform/core';
import { Form } from '@unform/web';

import { ApplicationState } from '../../../store';

import Input from '../../../components/Input';

import logo from '../../../assets/logo-light.svg';
import {
  Container, Image, Auth, Logo,
} from '../styles';

interface FormData extends InputHTMLAttributes<HTMLInputElement> {
  email: string;
  password: string;
};

const Login: React.FC = () => {
  const auth = useSelector((state: ApplicationState) => state.auth.data);

  const handleSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  return (
    <Container>
      <Image>
        <Logo src={logo} />
      </Image>
      <Auth>
        <Form onSubmit={handleSubmit}>
          <Input name="email" type="email" placeholder="Digite seu e-mail" />
          <Input
            name="password"
            type="password"
            placeholder="Digite sua senha"
          />
          <button type="submit">Entrar</button>

        </Form>
      </Auth>
    </Container>
  );
};

export default Login;
