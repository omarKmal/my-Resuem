import React from "react";
import styled from "styled-components";
import Marginer from "../../containers/Marginer";

const ProgressContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const TextBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
`;
const ProgressText = styled.span`
  color: #fff;
`;
const ProgressWrapper = styled.div`
  width: 100%;
  background-color: #181822;
  height: 4px;
  position: relative;
`;
const ProgressLine = styled.div`
  height: 100%;
  position: absolute;
  background-color: #ffc107;
`;

function Progress({ item }) {
  return (
    <ProgressContainer>
      <TextBox>
        <ProgressText>{item.name}</ProgressText>
        <ProgressText>{item.progress}</ProgressText>
      </TextBox>
      <Marginer direction="vertical" margin={5} />
      <ProgressWrapper>
        <ProgressLine style={{ width: item.progress }} />
      </ProgressWrapper>
      <Marginer direction="vertical" margin={10} />
    </ProgressContainer>
  );
}

export default Progress;
