import React from "react";
import styled from "styled-components";

export const StyledModImage = props => <StyImage src={props.url} />;

const StyImage = styled.img`
  width: 100%;
`;
