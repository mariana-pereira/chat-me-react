import React from 'react';

import ContactList from '../../components/ContactList';
import Conversation from '../../components/Conversation';

import { Container } from './styles';

const Main: React.FC = () => (
  <Container>
    <div className="left">
      <ContactList />
    </div>
    <Conversation />
  </Container>
);

export default Main;
