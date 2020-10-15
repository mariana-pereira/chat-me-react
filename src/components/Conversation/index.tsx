import React from 'react';
import { MdSend } from 'react-icons/md';

import {
  Container, Header, MessageContainer, Message, Footer,
} from './styles';

const Conversation: React.FC = () => (
  <Container>
    <Header />
    <MessageContainer>
      <Message isCurrent>
        <div>
          <p>kkkk</p>
        </div>
      </Message>
    </MessageContainer>
    <Footer>
      <input type="text" placeholder="Digite a mensagem..." />
      <button type="button">
        <MdSend />
      </button>
    </Footer>
  </Container>
);

export default Conversation;
