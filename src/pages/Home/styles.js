import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  background-color: var(--accentGray);
`;

export const ContainerHome = styled.div`
  width: 90%;
  min-height: 700px;
  height: auto;
  margin-top: 80px;
  border-radius: 10px;

  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: var(--light);

  h3 {
    background-color: var(--blackLight);
    height: 50px;
    width: 60%;
    text-align: center;
    padding-top: 15px;
    border-radius: 0 0 10px 10px;
    color: var(--light);
  }
`;

export const ContainerItensMenu = styled.div`
  width: inherit;
  height: 800px;

  display: flex;
  align-items: left;
  flex-direction: row;
`;

export const ContainerColuna = styled.div`
  height: 100%;
  width: inherit;
  flex-direction: column;
  overflow-y: hidden;
`;

export const ItemMenu = styled.div`
  height: 40%;
  width: inherit;
  background-color: var(--blackLight);
  margin-top: 20px;
  margin-left: 12px;
  border-radius: 10px;
  transition: 1s;
  display: flex;
  flex-direction: column;

  img {
    align-self: center;
    height: 200px;
    width: inherit;
    margin-bottom: 8px;
  }

  h4 {
    align-self: center;
    text-align: center;
    margin-top: 10px;
    color: var(--light);
  }
`;

export const ContainerDetails = styled.div`
width: 610px;
height: 200px;

display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
background-color: var(--blackLight);
color: var(--light);

h5 {
  text-align: center;
}
`;
