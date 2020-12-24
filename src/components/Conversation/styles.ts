import styled from 'styled-components';
import { MdSend } from 'react-icons/md';

export const Container = styled.div`
  grid-area: MC;
  max-height: 100vh;
  background-color: ${(props) => props.theme.colors.gray};
  border-radius: 20px;
  margin: 5px;
  padding: 7px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0 20px;
`;

export const Input = styled.input`
  height: 40px;
  width: 95%;
  padding: 5px 20px;
  margin: 0 25px;
  border: 1px solid #333;
  border-radius: 20px;
`;

export const SendButton = styled.button`
  background: 0;
  border: 0;
`;

export const SendIcon = styled(MdSend)`
  width: 30px;
  height: 30px;
  color: ${(props) => props.theme.colors.primary};
`;
