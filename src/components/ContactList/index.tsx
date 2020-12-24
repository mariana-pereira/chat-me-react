import React from 'react';

import Image from '../../assets/prof_pic.jpg';

import {
  Container, Contact, Avatar, Name,
} from './styles';

const ContactList: React.FC = () => (
  <Container>
    <Contact>
      <Avatar src={Image} alt="Ash" />
      <Name>Ash</Name>
    </Contact>
    <Contact>
      <Avatar src={Image} alt="Ash" />
      <Name>Ash</Name>
    </Contact>
    <Contact>
      <Avatar src={Image} alt="Ash" />
      <Name>Ash</Name>
    </Contact>
    <Contact>
      <Avatar src={Image} alt="Ash" />
      <Name>Ash</Name>
    </Contact>
    <Contact>
      <Avatar src={Image} alt="Ash" />
      <Name>Ash</Name>
    </Contact>
    <Contact>
      <Avatar src={Image} alt="Ash" />
      <Name>Ash</Name>
    </Contact>
    <Contact>
      <Avatar src={Image} alt="Ash" />
      <Name>Ash</Name>
    </Contact>
  </Container>
);

export default ContactList;
