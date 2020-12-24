import styled from 'styled-components';

export const Container = styled.div`
  grid-area: SN;

  display: flex;
  flex-direction: column;
  align-items: center;

  background: ${(props) => props.theme.colors.primary};
  padding: 11px 0;
  max-height: 100vh;
`;
