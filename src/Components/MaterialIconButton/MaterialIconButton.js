import React from "react";
import styled from "styled-components";

export default function MaterialIconButton({
  size,
  icon,
  handleClick,
  color,
  bgColor,
  className,
}) {
  return (
    <StyledMaterialIconButton
      className={className}
      size={size}
      onClick={handleClick}
      color={color}
      bgColor={bgColor}
    >
      <span className="material-icons">{icon}</span>
    </StyledMaterialIconButton>
  );
}

const StyledMaterialIconButton = styled.div`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  border-radius: 50%;
  background-color: ${({ bgColor }) => bgColor || "white"};
  color: ${({ color }) => color || "black"};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  span {
    font-size: ${({ size }) => +size.split("rem")[0] * 10 + "px"};
  }
`;
