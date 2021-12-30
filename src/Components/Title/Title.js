import React from "react";
import styled from "styled-components";

export default function Title({ title }) {
  return (
    <div>
      <StyledH1>{title.toUpperCase()}</StyledH1>
    </div>
  );
}

const StyledH1 = styled.h1`
  font-size: 120px;
  color: #ffffff;
  font-weight: normal;
  line-height: 70%;
`;
