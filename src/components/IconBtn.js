import styled, { css } from "styled-components";

const Icon = styled.span`
  font-size: ${(props) => props.fontSize};
  &:hover {
    scale: 1.1;
  }
  ${(props) =>
    props.title === "search" &&
    css`
      transition: all 0.2s ease-out;
      &:hover {
        scale: 1;
        color: #9c88ff;
      }
    `}
`;

const Button = styled.button`
  position: relative;
`;

const IconBtn = (props) => {
  return (
    <Button onClick={props.onClick}>
      <Icon
        className="material-symbols-outlined"
        fontSize={props.fontSize}
        title={props.title}
      >
        {props.title}
      </Icon>
    </Button>
  );
};

export default IconBtn;
