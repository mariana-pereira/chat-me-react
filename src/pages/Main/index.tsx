import React from 'react';

import Header from '../../components/Header';
import ContactList from '../../components/ContactList';

import { Container } from './styles';

const Main: React.FC = () => (
  <Container>
    <Header />
    <ContactList />
  </Container>
);

export default Main;
