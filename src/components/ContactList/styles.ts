import styled from 'styled-components';

export const Container = styled.ul`
  grid-area: CL;
  padding: 3px;
  max-height: calc(100vh - 250px);
  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Contact = styled.li`
  background-color: ${(props) => props.theme.colors.gray};
  display: flex;
  align-items: center;
  padding: 5px 20px;
  border-radius: 20px;

  & + li {
    margin-top: 4px;
  }
`;

export const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

export const Name = styled.strong`
  margin-left: 15px;
  color: ${(props) => props.theme.colors.text};
`;
