import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0 auto;
    text-align: center;
  }

  body{
    background-image: linear-gradient(90deg, #fff, #ccc);
  }

  #root{
    padding: 2rem;
  }
`;

export const Typography = styled.h1`
  font-size: 18px;
  font-weight: 500;
  font-family: "Courier New", Courier, monospace;
`;

export const ContainerCalc = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 500px;
  border: 1px solid black;
  margin-top: 20px;
  background: #000;
  border-radius: 1rem;
`;

export const ResultArea = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  width: 80%;
  margin-top: 20px;
  background-color: #FFF;
`;

export const ButtonsArea = styled.div`
  flex: 8;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
  grid-gap: 10px;
  margin-top: 20px;
  width: 80%;
`;

export const Button = styled.button`
  border-radius: 100px;
  width: 50px;
  height: 50px;
  padding: 3px;
  background-color: #DDD;
  cursor: pointer;
`