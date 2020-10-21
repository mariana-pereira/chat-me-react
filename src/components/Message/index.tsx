import React from 'react';

import { Container } from './styles';

export interface Props {
  isCurrent: boolean;
}

const Message: React.FC<Props> = ({ isCurrent }) => (
  <Container isCurrent={isCurrent}>
    <div>
      <span>kkkkk</span>
    </div>
  </Container>
);

export default Message;
