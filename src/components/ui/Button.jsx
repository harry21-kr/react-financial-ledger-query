import styled from "styled-components";

export const Button = styled.button`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  min-width: 64px;
  min-height: 34px;
  opacity: ${({ disabled }) => (disabled ? 0.4 : 1)};
  pointer-events: ${({ disabled }) => (disabled ? "none" : "auto")};
  transition: all 0.3s;
  border: none;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  box-shadow: ${({ boxShadow }) =>
      boxShadow && "rgba(0, 0, 0, 0.1) 0px 4px 6px;"}
    ${({ variant }) => {
      switch (variant) {
        case "blue":
          return "";
        case "green":
          return "background-color: #2EC4B6";
        case "default":
          return "background-color: #F9F9F9";
      }
    }};

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.5;
  }
`;

export default Button;
