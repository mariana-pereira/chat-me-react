import React from 'react';
import Message from '../Message';

import {
  Container, MessageContainer, InputWrapper, Input, SendButton, SendIcon,
} from './styles';

const Conversation: React.FC = () => (
  <Container>
    <MessageContainer>
      <Message isCurrent />
      <Message isCurrent={false} />
      <Message isCurrent />
      <Message isCurrent />
    </MessageContainer>
    <InputWrapper>
      <Input placeholder="Type a message..." />
      <SendButton>
        <SendIcon />
      </SendButton>
    </InputWrapper>
  </Container>
);

export default Conversation;
