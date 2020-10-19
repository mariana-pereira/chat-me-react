import React, { useEffect } from 'react';
import io from 'socket.io-client';

import ContactList from '../../components/ContactList';
import Conversation from '../../components/Conversation';

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
      <div className="left">
        <ContactList />
      </div>
      <div className="right">
        <Conversation />
      </div>
    </Container>
  );
};

export default Main;
