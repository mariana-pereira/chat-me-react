import React from 'react';

import logo from '../../../assets/logo-light.svg';
import {
  Container, Image, Auth, Logo,
} from '../styles';

const Login: React.FC = () => (
  <Container>
    <Image>
      <Logo src={logo} />
    </Image>
    <Auth>
      <form>
        <input name="email" type="email" placeholder="Digite seu e-mail" />
        <input
          name="password"
          type="password"
          placeholder="Digite sua senha"
        />
        <button type="submit">Entrar</button>

      </form>
    </Auth>
  </Container>
);

export default Login;
