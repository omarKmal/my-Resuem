import React from "react";
import styled from "styled-components";

const Horizontal = styled.span`
  display: flex;
  width: ${({ margin }) =>
    typeof margin === "string" ? margin : `${margin}px`};
`;
const Vertical = styled.span`
  display: flex;
  height: ${({ margin }) =>
    typeof margin === "string" ? margin : `${margin}px`};
`;

function Marginer({ margin, direction }) {
  if (direction === "horizontal") {
    return <Horizontal margin={margin} />;
  } else {
    return <Vertical margin={margin} />;
  }
}

Marginer.defaultProps = {
  direction: "horizontal",
};

export default Marginer;
