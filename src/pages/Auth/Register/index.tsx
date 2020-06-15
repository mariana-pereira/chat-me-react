import React from 'react';

import logo from '../../../assets/logo-light.svg';
import {
  Container, Image, Auth, Logo,
} from '../styles';

const Register: React.FC = () => (
  <Container>
    <Image>
      <Logo src={logo} />
    </Image>
    <Auth>
      <form>
        <input name="name" placeholder="Digite seu nome" />
        <input name="email" type="email" placeholder="Digite seu e-mail" />
        <input
          name="password"
          type="password"
          placeholder="Digite sua senha"
        />
        <button type="submit">Cadastrar</button>

      </form>
    </Auth>
  </Container>
);

export default Register;
