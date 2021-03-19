import styled, { createGlobalStyle } from "styled-components";
import { color } from "./tools";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html, body { 
    background-color: ${color.backColor};
    font-family: 'Poppins', sans-serif;
    font-size: 13px;
    line-height: 1.7;
    font-weight: 400;
    letter-spacing: .25px;
  }
`;

export default GlobalStyle;

export const GlobalHeader = styled.h4`
  color: #fff;
  font-size: 17px;
`;

export const GlobalPara = styled.p`
  color: ${color.grayFont};
  font-size: 14px;
  font-weight: 400;
  line-height: 1.7;
`;
