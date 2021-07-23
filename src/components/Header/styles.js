import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 60px;
  background-color: var(--light);
  z-index: 9;

  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 3px 3px var(--blackLight), -1em 0 0.4em olive;
  position: fixed;

  img {
    width: 120px;
    height: 60px;
    padding: 5px;
    margin-left: 60px;
    border-radius: 10px;
    transition: all 0.4s;
  }
`;
