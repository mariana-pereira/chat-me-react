import React from 'react';

import Image from '../../assets/prof_pic.jpg';

import {
  Container, Header, Contact, ContactImage, ContactInfo,
} from './styles';

const ContactList: React.FC = () => (
  <Container>
    <Header />
    <Contact>
      <ContactImage>
        <img src={Image} alt="Profile" />
      </ContactImage>
      <ContactInfo>
        <h3>Ash</h3>
        <p>Oi</p>
      </ContactInfo>
    </Contact>

    <Contact>
      <ContactImage>
        <img src={Image} alt="Profile" />
      </ContactImage>
      <ContactInfo>
        <h3>Ash</h3>
        <p>Oi</p>
      </ContactInfo>
    </Contact>

    <Contact>
      <ContactImage>
        <img src={Image} alt="Profile" />
      </ContactImage>
      <ContactInfo>
        <h3>Ash</h3>
        <p>Oi</p>
      </ContactInfo>
    </Contact>

    <Contact>
      <ContactImage>
        <img src={Image} alt="Profile" />
      </ContactImage>
      <ContactInfo>
        <h3>Ash</h3>
        <p>Oi</p>
      </ContactInfo>
    </Contact>

    <Contact>
      <ContactImage>
        <img src={Image} alt="Profile" />
      </ContactImage>
      <ContactInfo>
        <h3>Ash</h3>
        <p>Oi</p>
      </ContactInfo>
    </Contact>

    <Contact>
      <ContactImage>
        <img src={Image} alt="Profile" />
      </ContactImage>
      <ContactInfo>
        <h3>Ash</h3>
        <p>Oi</p>
      </ContactInfo>
    </Contact>
    <Contact>
      <ContactImage>
        <img src={Image} alt="Profile" />
      </ContactImage>
      <ContactInfo>
        <h3>Ash</h3>
        <p>Oi</p>
      </ContactInfo>
    </Contact>

    <Contact>
      <ContactImage>
        <img src={Image} alt="Profile" />
      </ContactImage>
      <ContactInfo>
        <h3>Ash</h3>
        <p>Oi</p>
      </ContactInfo>
    </Contact>
  </Container>
);

export default ContactList;
