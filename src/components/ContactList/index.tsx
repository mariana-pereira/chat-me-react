import React, { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { shade } from 'polished';
import { useDispatch } from 'react-redux';

import * as ThemeActions from '../../store/modules/theme/actions';

import Image from '../../assets/prof_pic.jpg';
import dark from '../../styles/themes/dark';
import light from '../../styles/themes/light';

import {
  Container, Header, ContactsContainer, Contact, ContactImage, ContactInfo,
} from './styles';

const ContactList: React.FC = () => {
  const { colors, title } = useContext(ThemeContext);
  let theme;
  const dispatch = useDispatch();

  const toggleTheme = () => {
    if (title === 'light') {
      theme = dark;
    } else {
      theme = light;
    }

    dispatch(ThemeActions.applyTheme(theme));
  };

  return (
    <Container>
      <Header>
        <Switch
          onChange={toggleTheme}
          checked={title === 'dark'}
          checkedIcon={false}
          uncheckedIcon={false}
          height={20}
          width={40}
          handleDiameter={20}
          onColor={shade(0.5, colors.secondary)}
          offColor={shade(0.15, colors.primary)}
        />
      </Header>
      <ContactsContainer>
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
      </ContactsContainer>
    </Container>
  );
};

export default ContactList;
