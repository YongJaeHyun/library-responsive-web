import { Link } from "react-router-dom";
import styled from "styled-components";

const LinkBtn = styled.button`
  width: 6rem;
  height: 2.6rem;
  background-color: #9c88ff;
  border-radius: 10px;
  color: white;
  position: absolute;
  right: 1.1rem;
  top: 1rem;
  font-size: 1rem;
`;

const LinkBtnOnSection = (props) => {
  return (
    <Link to={props.to}>
      <LinkBtn>{props.title}</LinkBtn>
    </Link>
  );
};

export default LinkBtnOnSection;
