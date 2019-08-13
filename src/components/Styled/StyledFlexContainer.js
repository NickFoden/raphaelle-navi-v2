import React from "react";
import styled from "styled-components";

export const StyledFlexContainer = ({ children }) => (
  <StyDiv>{children} </StyDiv>
);

const StyDiv = styled.div`
  align-content: flex-end;
  display: flex;
`;
