import styled from 'styled-components';

export const Container = styled.div`
  display: grid;

  grid-template-columns: 55px 240px auto 240px;
  grid-template-rows: 250px auto;

  grid-template-areas:
    'SN UI MC CI'
    'SN CL MC CI';
  height: 100vh;
`;
