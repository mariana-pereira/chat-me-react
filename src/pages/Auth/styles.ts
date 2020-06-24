import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: row;
`;

export const Image = styled.div`
    width: 60%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Auth = styled.div`
    width: 40%;
    height: 100%;
    background: #10c3ef;

    display: flex;
    align-items: center;
    justify-content: center;

    form {
      width: 400px;
      display: flex;
      flex-direction: column;
    }

    input {
      height: 44px;
      padding: 0 15px;
      border: 0;
      border-radius: 4px;
      margin: 0 0 10px;
    }

    button {
      height: 44px;
      padding: 0 15px;
      background: #333;
      color: #fff;
      border: 0;
      border-radius: 4px;
      margin: 5px 0 0;
      transition: background 0.2s;
      &:hover {
        background: ${darken(0.1, '#333')};
      }
    }

    a {
      margin-top: 10px;
      color: #fff;
      align-self: center;
    }
`;

export const Logo = styled.img`
    width: 400px;
`;
