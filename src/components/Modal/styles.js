import styled from "styled-components";

export const Overlay = styled.div`
  position: absolute;
  width: 100vw;
  height: 150vh;
  z-index: 9;

  background-color: #333c;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled.section`
  min-width: 600px;
  min-height: 200px;
  max-height: calc(100vh - 20px);
  padding: 20px;
  margin-top: -250px;

  z-index: 19;

  overflow-y: auto;

  background-color: var(--light);
  box-shadow: 0px 0px 10px black;
  border-radius: 4px;
  overflow-y: hidden;

  position: relative;

  > span {
    position: absolute;
    top: 15px;
    right: 20px;

    font-size: 30px;

    cursor: pointer;
    transition: 0.2s;

    :hover {
      color: var(--primary);
    }
  }

  > header {
    font-weight: bold;
    font-size: 24px;
    text-align: center;
    margin: 0px 20px;
  }

  > img {
    width: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 160px;
  }
`;
