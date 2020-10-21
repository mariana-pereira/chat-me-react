import React, { useEffect } from 'react';
import io from 'socket.io-client';

import ContactList from '../../components/ContactList';
import Conversation from '../../components/Conversation';
import Sidenav from '../../components/Sidenav';

import { Container } from './styles';

let socket;

const Main: React.FC = () => {
  const ENDPOINT = 'http://localhost:3333';

  useEffect(() => {
    socket = io(ENDPOINT);

    console.log(socket);
  }, [ENDPOINT]);

  return (
    <Container>
      <Sidenav />
    </Container>
  );
};

export default Main;
