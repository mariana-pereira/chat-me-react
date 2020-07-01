import styled from 'styled-components';

export const Container = styled.div`
  max-width: 400px;
  height: 100%;
  background: #cbf3f0;
  border-right: 0.5px solid #fff;
`;

export const Contact = styled.div`
  padding: 10px;
  display: flex;
  border-bottom: 0.5px solid #fff;
`;

export const ContactImage = styled.div`
  width: 100px;

  img {
    width: 70px;
    border-radius: 50%;
  }
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    color: #999;
  }
`;
