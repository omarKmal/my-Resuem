import styled from "styled-components";
import { screenSize } from "../../containers/responsive";
import { color } from "../../containers/tools";

export const Button = styled.button`
  padding: 20px 30px;
  font-family: "Courier Prime", monospace;
  font-size: 20px;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.849);
  background-color: ${color.mainColor};
  cursor: pointer;
  border: none;
  letter-spacing: 2px;
  transition: all 0.5s ease-in-out;
  &:focus {
    outline: none;
  }
  &:hover {
    filter: contrast(80%);
    transform: translate(0, -5px);
  }
  @media (max-width: ${screenSize.mobile}px) {
    padding: 15px 20px;
  }
`;
