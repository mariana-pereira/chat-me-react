import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;

  .left {
    width: 25%;
    position: relative;
    height: 100%;
    overflow: scroll;
    overflow-anchor: none;
    touch-action: auto;
    display: block;
    text-align: center;
  }

  .right {
    flex: 1;
    position: relative;
    height: 100%;
    overflow: scroll;
    overflow-anchor: none;
    touch-action: auto;
    display: block;
    text-align: center;
  }
`;
