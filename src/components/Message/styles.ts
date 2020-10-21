import styled from 'styled-components';

import { Props } from '.';

export const Container = styled.div<Props>`
  display: flex;
  justify-content: ${(props) => (props.isCurrent ? 'flex-end' : 'flex-start')};
  padding: 0 5%;
  margin-top: 15px;

  div {
    background: ${(props) => (props.isCurrent ? props.theme.colors.primary : props.theme.colors.background)};
    border-radius: 12px;
    padding: 10px 20px;
    display: inline-block;

    span {
      color: ${(props) => (props.isCurrent ? props.theme.colors.primaryText : props.theme.colors.text)};
      font-size: 15px;
    }
  }
`;
