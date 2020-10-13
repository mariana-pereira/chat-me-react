import styled from 'styled-components';
// @ts-ignore
import ScrollToBottom from 'react-scroll-to-bottom';

interface ContainerProps {
  isCurrent: boolean;
}

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const Header = styled.div`
  height: 70px;
  background: #c9cccd;
  z-index: 1;
  box-shadow: 0 2px 0 rgba(255, 255, 255, 0.5) inset,
                0 -2px 0 rgba(255, 255, 255, 0.1) inset,
                0 5px 0 rgba(0, 0, 0, 0.01),
                0 5px 3px rgba(0, 0, 0, 0.5);
`;

export const MessageContainer = styled(ScrollToBottom)`
  width: 100%;
  height: 100%;
`;

export const Message = styled.div<ContainerProps>`
  display: flex;
  justify-content: ${(props) => (props.isCurrent ? 'flex-end' : 'flex-start')};
  padding: 0 5%;
  margin-top: 15px;

  div {
    background: ${(props) => (props.isCurrent ? '#0077b6' : '#c9cccd')};
    border-radius: ${(props) => (props.isCurrent ? '20px 20px 0 20px' : '20px 20px 20px 0')};
    padding: 10px 20px;
    color: ${(props) => (props.isCurrent ? '#fff' : '#353535')};
    display: inline-block;
  }
`;
