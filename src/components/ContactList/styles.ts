import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const Header = styled.div`
  width: 100%;
  position: sticky;
  top: 0;
  height: 70px;
  background: ${(props) => props.theme.colors.primary};
  z-index: 1;
  box-shadow: 0 2px 0 rgba(255, 255, 255, 0.5) inset,
                0 -2px 0 rgba(255, 255, 255, 0.1) inset,
                0 5px 0 #338494,
                0 5px 3px rgba(0, 0, 0, 0.5);

  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 10px;
`;

export const ContactsContainer = styled.ul`

`;

export const Contact = styled.li`
  background: ${(props) => props.theme.colors.primary};
  padding: 10px;
  display: flex;
  border-bottom: 2px solid rgba(255, 255, 255, 0.05);
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
  color: ${(props) => props.theme.colors.textLight};

  p {
    margin-top: 10px;
    opacity: 0.5;
  }
`;
