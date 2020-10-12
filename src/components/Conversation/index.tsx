import React from 'react';

import {
  Container, Header, MessageContainer, Message,
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
      <Message isCurrent={false}>
        <div>
          <p>kkkk</p>
        </div>
      </Message>
      <Message isCurrent>
        <div>
          <p>kkkk</p>
        </div>
      </Message>
      <Message isCurrent={false}>
        <div>
          <p>kkkk</p>
        </div>
      </Message>
    </MessageContainer>
  </Container>
);

export default Conversation;
