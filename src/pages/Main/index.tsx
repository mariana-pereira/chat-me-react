import React from 'react';

import ContactList from '../../components/ContactList';
import Conversation from '../../components/Conversation';

import { Container } from './styles';

const Main: React.FC = () => (
  <Container>
    <div className="left">
      <ContactList />
    </div>
    <div className="right">
      <Conversation />
    </div>
  </Container>
);

export default Main;
